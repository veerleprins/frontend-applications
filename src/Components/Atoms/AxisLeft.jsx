export const AxisLeft = ({ yScale, innerWidth }) => 
  yScale.ticks().map(tickValue => (
    <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
      <line
      className="lines"
        x2={innerWidth}
        // stroke="black"
      />
      <text
        x={-3} 
        dy=".32em"
        style={{textAnchor: "end"}}
      >
        {tickValue}
      </text>
    </g>
  ))