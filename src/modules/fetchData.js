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

  const listie = [
    {merk: 'VOLVO'},
    {merk: 'BMW'},
    {merk: 'VOLVO MOTORS'},
    {merk: 'BMW'},
    {merk: 'BMW'},
    {merk: 'VOLVO'},
    {merk: 'BMW'},
    {merk: 'VOLVO MOTORS'},
    {merk: 'BMW'},
    {merk: 'BMW'}
  ];

  let carBrands = getBrand(electricCars, 'merk');
  carBrands = carBrands.filter( Boolean );

  // Code from Laurens & Sergio:

  let uniqueBrands = [];

  carBrands.forEach((merk) => {
    let brandItem = uniqueBrands.find((item) => item.brand === merk);
    if (brandItem === undefined) {
      uniqueBrands.push({
        brand: merk,
        value: 0
      });
    }
    uniqueBrands.find((item) => item.brand === merk).value += 1
  })

  // Code from : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  uniqueBrands.sort((min, max) => {
    return max.value - min.value;
  })

  let val = uniqueBrands.slice(0, 40)


  setParking(merged);
  // setCars(allCars);
  setElectric(electricCars);


  // setSpecifications(specData);
  // setLocations(locData);
};

function getBrand (dataArray, column) {
  return dataArray.map(obj => {
    if (!obj[column].includes('MOTORS')) {
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