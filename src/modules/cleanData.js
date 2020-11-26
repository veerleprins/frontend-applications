import { columnArr1, columnArr2 } from './helpers/utils';

// Collecting the data
export function startCleaning (specData, locData) {
  toNumbers(specData, columnArr1);
  toIntegersInObj(locData, 'location', columnArr2);
  const merged = mergeData(specData, locData, ['areaid', 'specifications']);
  return removeUndef(merged, 'specifications');
};

function removeUndef(dataArray, column) {
  let newArray = dataArray.map((obj) => {
    return (obj[column] !== undefined ) ? obj : false
  })
  return newArray.filter(Boolean);
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