import { SpanTitle } from '../atoms/spantitle';

export const SecondSection = ({ carsObj }) => {
  let perc = carsObj[1].value / carsObj[0].value * 100;
  // let num = countElectric / allCars * 100;
  // let twoDigits = num.toFixed(2);
  let twoDigits = perc.toFixed(2);
  let newNum = twoDigits.replace(".", ",");

  let nf = Intl.NumberFormat();
  // const numb = nf.format(allCars);
  const numb = nf.format(carsObj[0].value);

  // const numb2 = nf.format(countElectric);
    const numb2 = nf.format(carsObj[1].value);
  return <>
  <section>
      <SpanTitle 
        first="Volgens het RDW rijden er momenteel "
        // spanText={ JSON.stringify(allCars) }
        spanText={ numb }
        last="auto's in Nederland."
      />
  </section>
  <section>
    
  </section>
  {/* <section>
    <SpanTitle 
      first="Van deze auto's, zijn er "
      spanText={ numb2 }
      last="elektrisch rijdende auto's in Nederland."
    />
  </section>
  <section>
    <SpanTitle 
      first="Dit komt neer op maar "
      spanText={ newNum + " %"}
      last="elektrische auto's in Nederland."
    />
  </section> */}
  </>
}