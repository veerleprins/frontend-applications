import { margin, width, height } from '../../modules/helpers/utils';
import { AxisBottom } from '../atoms/axisbottom';
import { AxisLeft } from '../atoms/axisleft';
import { Bars } from '../atoms/bars';
import { format, scaleBand, scaleLinear, max  } from 'd3';

// D3 BarChart with help from Curran Kelleher.
// Source: https://www.youtube.com/watch?v=y03s9MEx6mc&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=23

export const BarChart = ({ data }) => {

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = d => d.brand; //TESLA
    const yValue = d => d.value; //40000

    const xScale = scaleBand()
      .domain(data.map(xValue))
      .range([0, innerWidth])
      .padding(0.2);

    const yScale = scaleLinear()
      .domain([0, max(data, yValue)])
      .range([innerHeight, 0]);
    
    return (
    <svg width={width} height={height} >
    <g transform={`translate(${margin.left},${margin.top})`}>
      <g className="x-Axis">
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight}
        />
      </g>
      <AxisLeft yScale={yScale} innerWidth={innerWidth} tickFormat={n => format(",d")(n).replace(',', '.')}/>
      <text
        className="y-label"
        y={-80}
        textAnchor='middle'
        x={- innerHeight / 2}
        transform={`rotate(-90)`}
      >
        Aantal auto's
      </text>
      <Bars 
        data={data} 
        xScale={xScale} 
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        innerHeight={innerHeight}
      />
      </g>
  </svg>
)}