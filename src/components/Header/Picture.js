import {
  Image,
  PictureContainer,
  TextHeader,
  PinkBlock,
  YellowBlock,
} from "./styledComponents";
import headerPicture from "../../assets/images/header.jpg";
import { textHeader } from "./constants";

function Picture() {
  return (
    <PictureContainer>
      <Image src={headerPicture} alt="Décoration" />
      <TextHeader>{textHeader}</TextHeader>
      <PinkBlock />
      <YellowBlock />
    </PictureContainer>
  );
}

export default Picture;
