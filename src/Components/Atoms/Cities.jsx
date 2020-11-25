import { geoPath, geoMercator } from 'd3';

// .scale(5100).center([]) from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
const projection = geoMercator().scale(4000).center([5.116667, 52.17]);
const pathGenerator = geoPath().projection(projection);

// Source from:
// https://www.youtube.com/watch?v=151T4hSrlSo&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=37&ab_channel=CurranKelleher
export const Cities = ({ data, garages, chargingPoints }) => 
  <g 
    className="cities"
    cursor="zoom-in">
  {data.map(feature => 
    (
      <path
        key={feature.id} 
        className="city"
        d={pathGenerator(feature)}
      >
      </path> 
  ))}
  {garages.map(d => {
    const [x, y] = projection([d.location.longitude, d.location.latitude]);
    return (
      <circle
        className="garages" 
        cx={x} 
        cy={y} 
        r={1}
      />
    )
  })}
    {chargingPoints.map(d => {
    const [x1, y2] = projection([d.location.longitude, d.location.latitude]);
    return (
      <circle
        className="chargingpoints" 
        cx={x1} 
        cy={y2} 
        r={1}
      />
    )
  })}
  </g>