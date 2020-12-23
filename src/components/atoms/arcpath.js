
export const ArcPath = ({ data, index, createArc, colors, label }) => (
  <g key={index} className="arc">
    <path className="piePath" d={createArc(data)} fill={colors(index)} />
    <text
      // transform={`translate(${createArc.centroid(data)})`}
      // textAnchor="middle"
      // alignmentBaseline="middle"
      transform={`translate(${label.centroid(data)})`}
      // transform={function (d) {return `translate(${label.centroid(d)})`}}
    >
      { data.data.percentage + " %" }
    </text>
  </g>
);

// .attr('transform', function (d) {
//   return 'translate(' + label.centroid(d) + ')';
//   });