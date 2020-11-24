export const Bars = ({ data, yScale, xScale, xValue, yValue, innerHeight }) => 
  data.map(d => 
    (<rect 
      key={xValue(d)}
      className="bars"
      x={xScale(xValue(d))}
      y={yScale(yValue(d))}
      height={innerHeight - yScale(yValue(d))}
      width={xScale.bandwidth()}
      />
  ))