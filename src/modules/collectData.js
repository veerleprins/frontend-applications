import { json } from 'd3';

// Fetching the data from the url and changing it from a json type:
export async function fetchData (url) {
  return await json(url);
};
