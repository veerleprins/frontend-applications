export const AxisBottom = ({ xScale, innerHeight}) =>    
  xScale.domain().map(tickValue => (
    <text
      key={tickValue}
      y={xScale(tickValue) + xScale.bandwidth() / 2}
      x={- innerHeight - 10}
      style={{textAnchor: "end"}}
      transform={`rotate(-90)`}
    >
      {tickValue}
    </text>
  ))