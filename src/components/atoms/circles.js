export const Circles = ({data, keyName, projection, name}) => (
  <g className="circles">
    {data.map((d, i) => {
      const [x, y] = projection([d.location.longitude, d.location.latitude]);
      return (
        <circle
          key={i}
          className={name}
          cx={x}
          cy={y}
          r={2}
        />
      )
    })}
  </g>
)