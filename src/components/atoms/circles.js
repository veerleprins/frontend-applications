import { useMemo } from 'react';

export const Circles = ({data, projection, name}) => (
  <g className="circles">
    {useMemo(() => (
      data.map((d, i) => {
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
      })
    ), [data, projection, name])
    }
  </g>
)