let rValue = 0;
let tValue = 0;
export const Labels = ({ data, colors, index }) => {
  if (index === 0) {
    rValue = "330";
    tValue = "355";
  } else {
    rValue = "126";
    tValue = "150";
  }
  return (
    <>
      <rect
        key={index + 10}
        width="13"
        height="13"
        x={rValue}
        y={0}
        fill={colors(index)}
      />
      <text
        key={index + 50}
        className="pie-label"
        width="100"
        height="100"
        x={tValue}
        y={11.5}
      >
        {data.data.name}
      </text>
    </>
  );
};
