import { useRef } from "react";
import { select, geoPath, geoMercator, zoom } from "d3";
// Importing the components:
import { Paths } from "../atoms/paths";
import { Circles } from "../atoms/circles";
import { SpanTitle } from "../atoms/spantitle";

// .scale(5100).center([])
// from Merlijn: https://github.com/mbergevoet/frontend-data/blob/master/frontend-data/index.js
const projection = geoMercator().scale(3000).center([7.8, 52.17]);
const pathGenerator = geoPath().projection(projection);

// Source from:
// https://www.youtube.com/watch?v=151T4hSrlSo&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=37&ab_channel=CurranKelleher
export const DutchMap = ({ data, garages, chargingPoints }) => {
  const svgEl = useRef(null),
    svgGroup = useRef(null),
    svg = select(svgEl.current),
    group = select(svgGroup.current);

  const zoomMap = zoom().on("zoom", (e) => {
    group.attr("transform", e.transform);
  });

  svg.call(zoomMap);

  return (
    <section>
      <SpanTitle
        first={`Maar waar kan deze elektrische auto dan worden`}
        spanText="opgeladen?"
      />
      <div className="center">
        <div className="svg-container">
          <svg
            preserveAspectRatio="xMinYMin meet"
            viewBox={`0 0 600 300`}
            ref={svgEl}
            className="svg-content dutch-map"
          >
            <g className="group" ref={svgGroup}>
              <Paths data={data} pathGenerator={pathGenerator} />
              {/* <Circles
                data={garages}
                projection={projection}
                name='garages'
              /> */}
              <Circles
                data={chargingPoints}
                projection={projection}
                name="chargingpoints"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
