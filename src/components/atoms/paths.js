import { useMemo } from 'react';

export const Paths = ({data, pathGenerator}) => (
  <g className="paths">
  {useMemo(() => (   
    data.map(feature => 
      (
        <path 
          key={feature.id} 
          className="city" 
          d={pathGenerator(feature)}>
        </path>
    ))
    ), [data, pathGenerator]) 
    }
  </g>
)