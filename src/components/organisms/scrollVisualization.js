import { SpanTitle } from '../atoms/spantitle';
import { PieChart } from '../molecules/piechart';

export const ScrollVisualization = ({ carsObj }) => {
  let nf = Intl.NumberFormat();
  return <>
  <section>
      <SpanTitle 
        first="Volgens het RDW rijden er momenteel"
        spanText={ nf.format(carsObj[1].value) }
        last="elektrische auto's in Nederland."
      />
  </section>
  <section>
    <SpanTitle 
        first="Dit komt neer op maar "
        spanText={ carsObj[1].percentage + " %" }
        last="van alle auto's in Nederland."
    />
    <PieChart data={ carsObj }/>
  </section>
  </>
}