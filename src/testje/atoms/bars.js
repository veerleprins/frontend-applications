import { useState } from 'react';
export const Bars = ({ data, yScale, xScale, xValue, yValue, innerHeight }) => 
{ 
  const [isShown, setIsShown] = useState(null);
  return (
    <>
    {data.map(d => (
      <rect 
        key={xValue(d)}
        className="bars"
        cursor="pointer"
        x={xScale(xValue(d))}
        y={yScale(yValue(d))}
        height={innerHeight - yScale(yValue(d))}
        width={xScale.bandwidth()}
        onClick={() => {setIsShown(true)
          console.log(xValue(d), yValue(d))
        }}
      />
    ))}
  </>)
};