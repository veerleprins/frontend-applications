import { json } from 'd3';
import { API_1, API_2, API_3, API_4, columnArr1, columnArr2 } from './helpers/utils';

// Code from https://github.com/BVictorB/frontend-applications/blob/master/src/helper/fetchData.js
export async function fetchData (setParking, setCars, setElectric) {
  const specData = await json(API_1);
  const locData = await json(API_2);
  // const allCars = await json(API_3);
  const electricCars = await json(API_4);
  toNumbers(specData, columnArr1);
  toIntegersInObj(locData, 'location', columnArr2);
  const merged = mergeData(specData, locData, ['areaid', 'specifications']);

  let carBrands = getItems(electricCars, 'merk', 'MOTORS');
  // Source: https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
  carBrands = carBrands.filter( Boolean );

  let uniqueBrands = [];
  getCount(carBrands, uniqueBrands);
  sortArray(uniqueBrands);

  const first10Cars = uniqueBrands.slice(0, 10);


  setParking(merged);
  // setCars(allCars);
  setElectric(first10Cars);


  // setSpecifications(specData);
  // setLocations(locData);
};

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

// This function searches for items in a column of an array and returns the item if 
// it does not contain the specific word.
function getItems (dataArray, column, word) {
  return dataArray.map(obj => {
    if (!obj[column].includes(word)) {
      return obj[column];
    }
  });
}


//This function has as parameters the total data set and an array
// of columns and changes each item of the column to a integer or float:
function toNumbers(dataArray, columnArr) {
  return dataArray.forEach(arrItem => {
    columnArr.forEach(c => {arrItem[c] = +arrItem[c];});
  });
};

// This function changes the values within an object that is inside
// an object to integers or floats:
export function toIntegersInObj(dataArray, objName, columnArr) {
  return dataArray.forEach(arrItem => {
    columnArr.forEach(c => {arrItem[objName][c] = +arrItem[objName][c];});
  });
}

// This function merges two datasets together:
export function mergeData(dataset1, dataset2, itemArr) {
  return dataset2.map(obj1 => {
    const filtered = dataset1.find(obj2 => obj1[itemArr[0]] === obj2[itemArr[0]]);
    obj1[itemArr[1]] = filtered;
    return obj1;
  });
}