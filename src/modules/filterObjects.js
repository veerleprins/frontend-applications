// This function filters through a array and returns the filtered list 
// without the false values:
// .filter( Boolean ) from source:
// https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
export function filterObjects(dataArray, arr) {
  let newList = dataArray.map((obj) => {
    let c = obj[arr[0]][arr[1]];
    return checkObjects(c, obj);
  })
  return newList.filter( Boolean );
}

function checkObjects (column, obj) {
  return (column !== 0) ? obj : false
}