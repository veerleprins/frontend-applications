import { SpanTitle } from '../atoms/spantitle';

export const ScrollVisualization = ({ cars }) => {
  let nf = Intl.NumberFormat();
  return (    
    <section>
        <SpanTitle 
          first="Volgens het RDW rijden er momenteel"
          spanText={ nf.format(cars[1].value) }
          last="elektrische auto's in Nederland."
        />
    </section>
  )
}