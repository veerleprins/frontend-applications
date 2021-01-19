import { scaleOrdinal, pie, arc } from "d3";
import { radius } from "../../modules/helpers/utils";
// Importing the components:
import { ArcPath } from "../atoms/arcpath";
import { Labels } from "../atoms/labels";
import { SpanTitle } from "../atoms/spantitle";

const colors = scaleOrdinal(["#043E1D", "#F6AE2D"]);
const createArc = arc().innerRadius(0).outerRadius(radius);
const labelA = arc()
  .outerRadius(radius)
  .innerRadius(radius + 28);

const labelB = arc()
  .outerRadius(radius)
  .innerRadius(radius + 15);

const list = [labelA, labelB];

// From examples:
// https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32
// https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b
export const PieChart = ({ data }) => {
  const createPie = pie()
    .value((d) => d.value)
    .sort(null);
  const totalData = createPie(data);

  return (
    <section>
      <SpanTitle
        first="Dit komt neer op maar "
        spanText={data[1].percentage + " %"}
        last="van alle auto's in Nederland."
      />
      <div className="svg-container">
        <svg
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 600 300`}
          className="svg-content"
        >
          {totalData.map((d, i) => (
            <Labels key={i + 2} data={d} colors={colors} index={i} />
          ))}
          <g transform={`translate(${300},${150})`}>
            {totalData.map((d, i) => (
              <>
                <ArcPath
                  key={i}
                  data={d}
                  index={i}
                  createArc={createArc}
                  colors={colors}
                  list={list}
                />
              </>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};
