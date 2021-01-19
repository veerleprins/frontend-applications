export const ArcPath = ({ data, index, createArc, colors, list }) => (
  <>
    <path
      key={index}
      className="piePath"
      d={createArc(data)}
      fill={colors(index)}
    />
    <text
      key={index + 5}
      className="percentage"
      transform={`translate(${list[index].centroid(data)})`}
    >
      {data.data.percentage + " %"}
    </text>
  </>
);
