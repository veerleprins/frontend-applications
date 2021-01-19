import React, { useState } from "react";
import { pointer } from "d3";
import { Tooltip } from "./Tooltip";

export const Bars = ({ data, yScale, xScale, xValue, yValue, innerHeight }) => {
  const [toggle, setToggle] = useState(false);
  const [tooltipData, setTooltipData] = useState({});

  // Function to change the toggleTooltip to true, and pass in the exact data
  // Code from: Jordy Fronik https://github.com/joordy/frontend-applications/blob/main/src/components/molecules/BarChart.svelte
  function showTooltip(event) {
    const index = event.target.getAttribute("data-index");
    const selectedBarData = data[index];
    const [x, y] = pointer(event);
    // Set data.
    setTooltipData({ selectedBarData, x, y });
    setToggle(true);
  }
  function hideTooltip(event) {
    setToggle(false);
  }
  return (
    <>
      <g className="bars">
        {data.map((d, i) => (
          <rect
            key={xValue(d)}
            className="bars"
            cursor="pointer"
            x={xScale(xValue(d))}
            y={yScale(yValue(d))}
            height={innerHeight - yScale(yValue(d))}
            width={xScale.bandwidth()}
            data-index={i}
            onMouseMove={showTooltip}
            onMouseLeave={hideTooltip}
          />
        ))}
      </g>
      )
      {toggle !== false && (
        <Tooltip
          data={tooltipData.selectedBarData}
          x={tooltipData.x}
          y={tooltipData.y}
        />
      )}
    </>
  );
};
