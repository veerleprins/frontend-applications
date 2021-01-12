
export const Labels = ({ data, colors, index }) => {
  let rValue = 0;
  let tValue = 0;
  if (index === 0 ) {
    rValue = "-163";
    tValue = "-150";
  } else {
    rValue = "-133";
    tValue = "-120";
  }
  return <>
    <rect
      width="15"
      height="15"
      stroke="white"
      x="300"
      y={rValue}
      fill={colors(index)}
    />
    <text
      width="100"
      height="100"
      x="325"
      y={tValue}
      >
      { data.data.name }
    </text>
  </>
}