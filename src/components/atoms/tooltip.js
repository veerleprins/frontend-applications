export const Tooltip = ({ data, x, y }) => {
  return (
    <g transform={`translate(${x + 20}, ${y})`} x="10" y="30">
      <rect className="tooltip-background" />
      <text className="tooltip-text" x="10" y="30">
        <tspan>{data.brand}</tspan>
      </text>
      <text className="tooltip-text" x="10" y="60">
        <tspan>Amount:</tspan>
        <tspan className="yellow"> {data.value}</tspan>
      </text>
    </g>
  );
};
