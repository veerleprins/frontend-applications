import { json } from 'd3';
import { feature } from 'topojson';
import { API_5 } from '../helpers/utils';

export async function cleanMapData(setMap) {
  const dataGEO = await json(API_5);
  const data = feature(dataGEO, dataGEO.objects.gemeente_2020);
  setMap(data.features)
};