import { Paragraph } from '../atoms/paragraph';
import { SubHeading } from '../atoms/subheading';
import { ThirdHeading } from '../atoms/thirdheading';
import { SpanTitle } from '../atoms/spantitle';

export const FirstArticle = ({allCars, countElectric}) => (
  <>
    {/* <SubHeading subtitle="Maar, hoe zit het ondertussen met de cijfers in Nederland?" name="subtitle"/> */}
    <SpanTitle 
      first="Volgens het RDW rijden er momenteel"
      spanText={ JSON.stringify(allCars) }
      last="auto's in Nederland."
    />
    <SpanTitle 
      first="Hiervan is maar "
      spanText={ JSON.stringify(countElectric) }
      last="elektrisch."
    />
  </>
)