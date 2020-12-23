import { SubHeading } from '../atoms/subheading';
import { Paragraph } from '../atoms/paragraph';
import { BarChart } from '../molecules/barchart';
import { thirdText } from '../../modules/helpers/utils';

export const SecondArticle = ({ data }) => (
  <>
  <section>
    <SubHeading 
      subtitle="Welke merken zijn het populairst in Nederland?"/>
    <Paragraph text={ thirdText } name="secondP"/>
    <BarChart data={ data } />
  </section>
  </>
)