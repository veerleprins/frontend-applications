import { json } from 'd3';
import { feature } from 'topojson';
import { API_1, API_2, API_3, API_4, API_5 } from './helpers/utils';
import { startCleaning } from './cleanData';

// Code from https://github.com/BVictorB/frontend-applications/blob/master/src/helper/fetchData.js
export async function fetchData (setGarages, 
  setElectric, 
  setMap, 
  setChargingGarages,
  setCars) 
  {
  // Getting all the data for the visualizations:
  const specData = await json(API_1);
  const locData = await json(API_2);
  const allCars = await json(API_3);
  const electricCars = await json(API_4);
  const GEOdata = await json(API_5);

  let towns = feature(GEOdata, GEOdata.objects.gemeente_2020);

  let allGarages = startCleaning(specData, locData);

  let chargingGarages = filterObjects(allGarages, ['specifications', 'chargingpointcapacity']);
  let carBrands = getItems(electricCars, 'merk', 'MOTORS');

  let uniqueBrands = [];
  getCount(carBrands, uniqueBrands);
  sortArray(uniqueBrands);

  let amountAllCars = +(allCars[0].count);
  let amountElec = carBrands.length;

  let percNonElec = getPercentage((amountAllCars - amountElec), amountAllCars);
  let percElec = getPercentage(amountElec, amountAllCars);
  const pieArr = createArr(amountAllCars, amountElec, percNonElec, percElec);

  // Setting all the states:
  setGarages(allGarages);
  setChargingGarages(chargingGarages);
  setElectric(uniqueBrands.slice(0, 10));
  setMap(towns.features);
  setCars(pieArr);
};

// This function filters through a array and returns the filtered list 
// without the false values:
// .filter( Boolean ) from source:
// https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
function filterObjects(dataArray, arr) {
  let newList = dataArray.map((obj) => {
    let c = obj[arr[0]][arr[1]];
    return checkObjects(c, obj);
  })
  return newList.filter( Boolean );
}

function checkObjects (column, obj) {
  return (column !== 0) ? obj : false
}

// This function searches for items in a column of an array and returns 
// the item if it does not contain the specific word.
function getItems (dataArray, column, word) {
  let list =  dataArray.map((obj) => {
    return (!obj[column].includes(word)) ? obj[column] : false;
  });
  return list.filter(Boolean);
}

// Code from Laurens & Sergio:
// https://vizhub.com/HappyPantss/673013ca00df472da1a3dfa7a6b55aaf?edit=files&file=index.js
function getCount(dataArray, newArray) {
  dataArray.forEach((merk) => {
    let brandItem = newArray.find((item) => item.brand === merk);
    if (brandItem === undefined) {
      newArray.push({
        brand: merk,
        value: 0
      });
    }
    newArray.find((item) => item.brand === merk).value += 1
  });
}

// This function sorts an array from largest value to smallest value.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortArray(dataArray) {
  dataArray.sort((min, max) => {
    return max.value - min.value;
  })
}

// This function changes the percentage to a number with two digits and
// replaces the dot to a comma:
function getPercentage(num, total) {
  let percentage = num / total * 100;
  return percentage.toFixed(2).replace(".", ",");
}

function createArr(cars, elecs, percCars, percElec) {
  return [{
    keyNum: 1,
    name: "Niet elektrische auto's",
    value: (cars - elecs),
    percentage: percCars
  }, 
  {
    keyNum: 2,
    name: "Elektrische auto's",
    value: elecs,
    percentage: percElec
  }]
}