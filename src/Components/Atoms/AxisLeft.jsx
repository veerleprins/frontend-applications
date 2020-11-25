export const AxisLeft = ({ yScale, innerWidth, tickFormat }) => 
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
        {tickFormat(tickValue)}
      </text>
    </g>
  ))