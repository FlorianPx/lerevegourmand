import { paymentArray } from "./constants";
import { PaymentContainer, List, Image } from "./styledComponents";
import { FooterTitle } from "../styledComponents";

const paymentElements = paymentArray.map((paymentElement) => (
  <Image
    key={paymentElement.title}
    alt={paymentElement.title}
    src={paymentElement.src}
    title={paymentElement.title}
  />
));

function Payment() {
  return (
    <PaymentContainer>
      <FooterTitle>Nos moyens de paiement sur place</FooterTitle>
      <List>{paymentElements}</List>
    </PaymentContainer>
  );
}

export default Payment;
