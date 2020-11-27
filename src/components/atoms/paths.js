export const Paths = ({data, pathGenerator}) => (
  <g className="paths">
    {data.map(feature => 
      (
        <path 
          key={feature.id} 
          className="city" 
          d={pathGenerator(feature)}>
        </path>
    ))}
  </g>
)