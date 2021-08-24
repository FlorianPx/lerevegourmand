import Payment from "./Payment/Payment";
import SocialNetwork from "./SocialNetwork/SocialNetwork";
import { FooterContainer, Copyright } from "./styledComponents";

function Footer() {
  const dateOfThisDay = new Date();
  const year = dateOfThisDay.getUTCFullYear();

  return (
    <FooterContainer id="contact">
      <SocialNetwork />
      <Payment />
      <Copyright>
        <small>&copy; Le rêve gourmand {year}</small>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
