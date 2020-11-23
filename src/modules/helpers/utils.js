// ALL THE HELPERS:

// The API's needed for the visualizations:
export const API_1 = 'https://opendata.rdw.nl/resource/b3us-f26s.json';
export const API_2 = 'https://opendata.rdw.nl/resource/t5pc-eb34.json';
export const API_3 = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?$select=count(*)';
export const API_4 = 'https://opendata.rdw.nl/resource/w4rt-e856.json?$limit=200000';

// The array's with columns whose strings must be converted to integers:
export const columnArr1 = ['chargingpointcapacity', 'capacity', 'disabledaccess', 'maximumvehicleheight'];
export const columnArr2 = ['latitude', 'longitude'];

export const startText = "Elektrisch rijden, u kunt er tegenwoordig al bijna niet meer omheen. Er wordt veel gesproken over de voordelen van het elektrisch rijden in het nieuws. Nu is natuurlijk de vraag: Hoe zit het ondertussen met de cijfers van het elektrisch rijden in Nederland?";

export const secondText = "Uit de cijfers van het RDW blijkt dat er ongeveer 14 miljoen gekentekende auto’s in Nederland rijden. Hiervan is nog maar 1 procent elektrisch. ";

// The array with column names for the datasets that needs to be merged:
export const mergeColumns = ['areaid', 'specifications'];

export const dummyObj = {
  areaid: "",
  areamanagerid: "",
  capacity: NaN,
  chargingpointcapacity: NaN,
  disabledaccess: NaN,
  limitedaccess: NaN,
  maximumvehicleheight: NaN,
  startdatespecifications: NaN
}
