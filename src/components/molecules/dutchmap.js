import { useEffect, useRef } from 'react';
import { select, geoPath, geoMercator, zoom } from 'd3';
import { width, height } from '../../modules/helpers/utils';
// Importing the components:
import { Paths } from '../atoms/paths';
import { Circles } from '../atoms/circles';
import { SpanTitle } from '../atoms/spantitle';

// .scale(5100).center([]) 
// from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
const projection = geoMercator().scale(6000).center([5.5, 52.17]);
const pathGenerator = geoPath().projection(projection);

// Source from:
// https://www.youtube.com/watch?v=151T4hSrlSo&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=37&ab_channel=CurranKelleher
export const DutchMap = ({ data, garages, chargingPoints }) => {
  const svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current);


  const zoomMap = zoom()
  .on('zoom', (e) => {
    group.attr('transform', e.transform)
  });

  svg.call(zoomMap);

  return (
    <section>
      <SpanTitle
        first={`Maar in welke garage kan deze elektrische auto dan worden`}
        spanText='opgeladen?'
      />
      <svg className='dutch-map' ref={svgEl} width={width} height={height}>
        <g className='group' ref={svgGroup}>
          <Paths data={data} pathGenerator={pathGenerator} />
          <Circles
            data={garages}
            projection={projection}
            name='garages'
          />
          <Circles
            data={chargingPoints}
            projection={projection}
            name='chargingpoints'
          />
        </g>
      </svg>
    </section>
  );
};
