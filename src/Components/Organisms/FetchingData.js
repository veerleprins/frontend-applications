import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { API_1 } from '../../modules/helpers/utils';

export function fetchingData(setSpecifications) {
  const fData = fetchData(API_1);
  setSpecifications(fData);
}

async function fetchData (endpoint) {
  return await json(endpoint);
}




// export function useFetch (endpoint) {
//   // Function in useState because faster (only runs once i.s.o. every time)
//   const [data, setData] = useState(() => {
//     return null;
//   });
  
//   useEffect(() => {
//     // hierin opschoon functies aanroepen.
//     async function fetchData() {
//       let response = await json(endpoint);
//       setData(prevRes => response);
//     }
//     fetchData();
//   }, [endpoint]);

//   return data;
// }

