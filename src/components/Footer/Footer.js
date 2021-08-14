import Payment from "./Payment/Payment";
import SocialNetwork from "./SocialNetwork/SocialNetwork";
import { FooterContainer } from "./styledComponents";

function Footer() {
  return (
    <FooterContainer id="contact">
      <SocialNetwork />
      <Payment />
    </FooterContainer>
  );
}

export default Footer;
