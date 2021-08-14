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
      <TextHeader>{textHeader}</TextHeader>
      <Image src={headerPicture} alt="Décoration" />
      <PinkBlock />
      <YellowBlock />
    </PictureContainer>
  );
}

export default Picture;
