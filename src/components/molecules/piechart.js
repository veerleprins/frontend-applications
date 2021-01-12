import { scaleOrdinal, pie, arc } from 'd3';
import { width, height, radius } from '../../modules/helpers/utils';
// Importing the components:
import { ArcPath } from '../atoms/arcpath';
import { Labels } from '../atoms/labels';

// From example: https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32
export const PieChart = ({ data }) => {
  const createPie = pie().value(d => d.value).sort(null);
  const colors = scaleOrdinal(["#043E1D", "#F6AE2D"]);
  const createArc = arc().innerRadius(0).outerRadius(radius);
  const totalData = createPie(data);

  const label = arc()
    .outerRadius(radius)
    .innerRadius(radius + 70);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {totalData.map((d, i) => (
          <>
          <ArcPath
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            label={label}
          />
          <Labels data={ d } colors = { colors } index={ i }/>
          </>
        ))}
      </g>
    </svg>
  )
}