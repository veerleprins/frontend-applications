import { HeaderTitle } from '../atoms/headertitle';
import { Paragraph } from '../atoms/paragraph';
import { startText } from '../../modules/helpers/utils';

export const HeaderText = () => (
  <>
    <HeaderTitle/>
    <Paragraph text={startText} name="firstP"/>
  </>
)