export const Circles = ({data, keyName, projection, name}) => (
  <g className="circles">
    {data.map(d => {
      const [x, y] = projection([d.location.longitude, d.location.latitude]);
      return (
        <circle
          key={d[keyName]}
          className={name}
          cx={x}
          cy={y}
          r={2}
        />
      )
    })}
  </g>
)