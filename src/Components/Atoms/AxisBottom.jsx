export const AxisBottom = ({ xScale, innerHeight}) =>    
  xScale.domain().map(tickValue => (
    <text
      key={tickValue}
      x={xScale(tickValue) + xScale.bandwidth() / 2}
      y={innerHeight + 25}
      style={{textAnchor: "middle"}}
      // dy="1em"
    >
      {tickValue}
    </text>
  ))