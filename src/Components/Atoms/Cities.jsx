import { geoPath, geoMercator, zoom  } from 'd3';

// .scale(5100).center([]) from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
const projection = geoMercator().scale(4000).center([5.116667, 52.17]);
const pathGenerator = geoPath().projection(projection);

export const Cities = ({ data }) => 
  <g 
    className="cities"
    cursor="zoom-in">
  {data.map(feature => 
    (
      <path 
        key={feature.id} 
        className="city"
        d={pathGenerator(feature)} />
  ))}
  </g>