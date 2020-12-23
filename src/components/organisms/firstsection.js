import { HeaderTitle } from '../atoms/headertitle';
import carPNG from '../../images/carPNG.png';
import { Image } from '../atoms/image';
import { Paragraph } from '../atoms/paragraph';
import { startText } from '../../modules/helpers/utils';

export const FirstSection = () => (
  <section>
    <HeaderTitle/>
    <Image imageSrc={ carPNG } />
    <Paragraph text={ startText } name="firstP"/>
  </section>
)