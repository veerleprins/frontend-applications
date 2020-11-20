import React, { useState, useEffect } from 'react';
import { API_1 } from '../../modules/helpers/utils';
import { json } from 'd3';


export function useFetch () {
  // Function in useState because faster (only runs once i.s.o. every time)
  const [data, setData] = useState(() => {
    return null;
  });
  
  useEffect(() => {
    // hierin opschoon functies aanroepen.
    async function fetchData() {
      // let response = await fetch(API_1);
      // response = await response.json();
      let response = await json(API_1);
      setData(prevRes => response);
    }
    fetchData();
  }, []);

  return data;
}