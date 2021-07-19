import {
  Image,
  TextHeader,
  // PinkBlock,
  // YellowBlock
} from "./styledComponents";
import headerPicture from "../../assets/images/header.jpg";
import { textHeader } from "./constants";

function Picture() {
  return (
    <div style={{ fontSize: "16px" }}>
      {/* <PinkBlock /> */}
      <Image src={headerPicture} alt="Décoration" />
      <TextHeader>{textHeader}</TextHeader>
      {/* <YellowBlock /> */}
    </div>
  );
}

export default Picture;
