import {
  Image,
  // PinkBlock,
  // YellowBlock
} from "./styledComponents";
import headerPicture from "../../assets/images/header.jpg";

function Picture() {
  return (
    <div style={{ fontSize: "16px" }}>
      {/* <PinkBlock /> */}
      <Image src={headerPicture} alt="Décoration" />
      {/* <YellowBlock /> */}
    </div>
  );
}

export default Picture;
