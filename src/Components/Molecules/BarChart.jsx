import { margin, width, height } from '../../modules/helpers/utils';
import { AxisBottom } from '../atoms/AxisBottom';
import { AxisLeft } from '../atoms/AxisLeft';
import { Bars } from '../atoms/Bars';
import { format } from 'd3';

export const BarChart = ({
  data, 
  xScale, 
  yScale, 
  innerHeight, 
  innerWidth,
  xValue,
  yValue }) => (
    <svg width={width} height={height} >
    <g transform={`translate(${margin.left},${-margin.bottom})`}>
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
)