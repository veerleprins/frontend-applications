// The API's needed for the visualizations:
export const API_1 = "https://opendata.rdw.nl/resource/b3us-f26s.json";
export const API_2 = "https://opendata.rdw.nl/resource/t5pc-eb34.json";
export const API_3 =
  "https://opendata.rdw.nl/resource/dy9u-ian4.json?$select=count(*)";
export const API_4 =
  "https://opendata.rdw.nl/resource/w4rt-e856.json?$limit=200000";
// Endpoint from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
export const API_5 =
  "https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson";

// The array's with columns whose strings must be converted to integers:
export const columnArr1 = [
  "chargingpointcapacity",
  "capacity",
  "disabledaccess",
  "maximumvehicleheight",
];
export const columnArr2 = ["latitude", "longitude"];

export const width = 980;
export const height = 550;
export const margin = {
  top: 40,
  right: 50,
  bottom: 120,
  left: 120,
};
export const innerHeight = height - margin.top - margin.bottom;
export const innerWidth = width - margin.left - margin.right;

export const radius = 100;

export const startText =
  "Elektrisch rijden, u kunt er tegenwoordig al bijna niet meer omheen. In het nieuws wordt gesproken over de voordelen van het elektrisch rijden voor het milieu, in het centrum bij u in de buurt wordt een nieuwe laadpaal geïnstalleerd en zelfs uw buurman heeft het nieuwste model aangeschaft. Maar, hoe zit het ondertussen met de cijfers in Nederland?";

// The array with column names for the datasets that needs to be merged:
export const mergeColumns = ["areaid", "specifications"];

export const dummyObj = {
  areaid: "",
  areamanagerid: "",
  capacity: NaN,
  chargingpointcapacity: NaN,
  disabledaccess: NaN,
  limitedaccess: NaN,
  maximumvehicleheight: NaN,
  startdatespecifications: NaN,
};
