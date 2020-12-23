import { margin, width, height, radius } from '../../modules/helpers/utils';
import { scaleOrdinal, pie, arc } from 'd3';

// From example: https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js
export const PieChart = ({ data }) => {
  const color = scaleOrdinal(["#043E1D", "#F6AE2D"]);
  const createPie = pie();
  const paths = arc().innerRadius(0).outerRadius(radius);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {createPie(data).map(x => (
          <g className="arc" key={x.data.keyNum}>
            <path
              fill={color(x.data.value)} 
              d={paths}>
            </path>
          </g>
        ))}
      </g>
    </svg>
  )
}