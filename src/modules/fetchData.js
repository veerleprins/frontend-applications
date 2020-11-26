import { json } from 'd3';
import { API_1, API_2, API_3, API_4 } from './helpers/utils';
import { feature } from 'topojson';
import { startCleaning } from './cleanData';

// Endpoint from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
const endpoint = 'https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson';

// Code from https://github.com/BVictorB/frontend-applications/blob/master/src/helper/fetchData.js
export async function fetchData (setGarages, 
  setElectric, 
  setMap, 
  setChargingGarages, 
  setCountElectric, 
  setAllCars) 
  {
  // Getting all the data for the visualizations:
  const specData = await json(API_1);
  const locData = await json(API_2);
  const allCars = await json(API_3);
  const electricCars = await json(API_4);
  const GEOdata = await json(endpoint);

  let towns = feature(GEOdata, GEOdata.objects.gemeente_2020);

  let allGarages = startCleaning(specData, locData);
  let chargingGarages = filterObjects(allGarages, ['specifications', 'chargingpointcapacity']);
  let carBrands = getItems(electricCars, 'merk', 'MOTORS');

  let uniqueBrands = [];
  getCount(carBrands, uniqueBrands);
  sortArray(uniqueBrands);

  // Setting all the states:
  setGarages(allGarages);
  setCountElectric(carBrands.length);
  setChargingGarages(chargingGarages);
  setAllCars(+(allCars[0].count));
  setElectric(uniqueBrands.slice(0, 10));
  setMap(towns.features);
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

// This function sorts an array from largest value to smallest value.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortArray(dataArray) {
  dataArray.sort((min, max) => {
    return max.value - min.value;
  })
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

// This function searches for items in a column of an array and returns 
// the item if it does not contain the specific word.
function getItems (dataArray, column, word) {
  let list =  dataArray.map((obj) => {
    return (!obj[column].includes(word)) ? obj[column] : false;
  });
  return list.filter(Boolean);
}