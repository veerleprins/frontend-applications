import { 
  API_1, 
  API_2,
  API_3,
  API_4,
  columnArr1, 
  columnArr2, 
  mergeColumns,
  dummyObj } from './helpers/utils';
import { fetchData } from './collectData.js';

// Collecting the data
export async function startCleaning () {
  // Fetching the Data:
  const facilitiesData = await fetchData(API_1);
  const locationData = await fetchData(API_2);

  const carsData = await fetchData(API_3);
  const electricData = await fetchData(API_4);
  const carArr = [+(carsData[0].count), +(electricData[0].count)];
  return carArr;

  // Merging the Data:
  // const data = mergeData(facilitiesData, locationData, mergeColumns, dummyObj);

  // toNumbers(data, columnArr1);
  // console.log(data);
  // console.log(locationData);
};

// This function merges two datasets together:
export function mergeData(dataset1, dataset2, itemArr, dummy) {
  return dataset2.map(obj1 => {
    const filtered = dataset1.find(obj2 => obj1[itemArr[0]] === obj2[itemArr[0]]);
    filtered === undefined ? obj1[itemArr[1]] = dummy : obj1[itemArr[1]] = filtered;
    obj1[itemArr[1]][itemArr[0]] = obj1[itemArr[0]];
    return obj1;
  });
}

//This function has as parameters the total data set and an array
// of columns and changes each item of the column to a integer or float:
function toNumbers(dataArray, columnArr) {
  return dataArray.forEach(arrItem => {
    columnArr.forEach(c => {arrItem[c] = +arrItem[c];});
  });
}

// This function changes the values within an object that is inside
// an object to integers or floats:
export function toIntegersInObj(dataArray, objName, columnArr) {
  return dataArray.forEach(arrItem => {
    columnArr.forEach(c => {arrItem[objName][c] = +arrItem[objName][c];});
  });
}

// function toNan(dataArray) {
//   dataArray.map(obj => {
//     if (obj.specifications === undefined) {
//       obj.specifications = {
//         areaid: obj.areaid,

//         capacity: NaN,
//         chargingpointcapacity: NaN
//       }
//     }
//   })
// }