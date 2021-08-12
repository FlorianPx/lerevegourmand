import { paymentArray } from "./constants";
import { PaymentContainer, List, Image } from "./styledComponents";

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
      <p>Nos moyens de paiement :</p>
      <List>{paymentElements}</List>
    </PaymentContainer>
  );
}

export default Payment;
