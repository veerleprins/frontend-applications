import { Paragraph } from '../atoms/paragraph';
import { SubHeading } from '../atoms/subheading';
import { secondText } from '../../modules/helpers/utils';

export const FirstArticle = ({allCars, countElectric}) => (
  <>
    <SubHeading subtitle="Hoeveel elektrische auto’s rijden er in Nederland?"/>
    <Paragraph text={secondText} name="secondP"/>
    <Paragraph text={JSON.stringify(allCars)} name="bigGreen"/>
    <Paragraph text="Auto's in Nederland" name="shortT"/>
    <Paragraph text={JSON.stringify(countElectric)} name="bigGreen"/>
    <Paragraph text="Elektrische auto's in Nederland" name="shortT"/>
  </>
)