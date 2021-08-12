import Payment from "./Payment/Payment";
import SocialNetwork from "./SocialNetwork/SocialNetwork";
import { FooterContainer } from "./styledComponents";

function Footer() {
  return (
    <FooterContainer>
      <SocialNetwork />
      <Payment />
    </FooterContainer>
  );
}

export default Footer;
