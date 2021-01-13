import { json } from 'd3';
import { API_1, API_2 } from '../helpers/utils';
import { startCleaning } from '../cleanData';
import { filterObjects } from '../filterObjects';

export async function cleanGarages(setGarages, setChargingGarages) {
  const specData = await json(API_1);
  const locData = await json(API_2);

  let allGarages = startCleaning(specData, locData);
  let chargingGarages = filterObjects(allGarages, ['specifications', 'chargingpointcapacity']);

  setGarages(allGarages);
  setChargingGarages(chargingGarages);
};