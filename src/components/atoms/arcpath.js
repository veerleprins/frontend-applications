
export const ArcPath = ({ data, index, createArc, colors }) => (
  <g key={index} className="arc">
    <path className="piePath" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
    >
      { data.data.name }
    </text>
  </g>
);