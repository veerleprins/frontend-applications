import { startText } from "../../modules/helpers/utils";
// Importing the components:
import { HeaderTitle } from "../atoms/headertitle";
import { Image } from "../atoms/image";
import { Paragraph } from "../atoms/paragraph";

export const Intro = () => (
  <section>
    <HeaderTitle />
    <Image imageSrc="carPNG.png" name="imgCar" divName="greenSpace" />
    <Paragraph text={startText} name="firstP" />
    <Image imageSrc="scroll-icon.svg" name="scroll" divName="centered" />
  </section>
);
