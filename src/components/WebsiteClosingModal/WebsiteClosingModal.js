import React from "react";

import LogoCakePng from "../../assets/images/logoCake.png";
import { LogoCake, Span, Text, Wrapper } from "./styledComponents";

export const WebsiteClosingModal = () => {
  return (
    <Text>
      Chers visiteurs,
      <br />
      <br />
      Nous regrettons de vous informer que <Span>LE RÊVE GOURMAND</Span> a cessé
      son activité. Nous tenons à remercier chaleureusement tous nos clients et
      partenaires qui nous ont soutenus.
      <br />
      <br />
      En raison de cette fermeture, ce site internet n'est plus actif et toutes
      les opérations commerciales ont été arrêtées. Par conséquent, il est
      désormais uniquement disponible en tant que site de démonstration, rendant
      toutes les informations qu'il contient factices.
      <br />
      <br />
      Nous vous remercions de votre compréhension.
      <br />
      <br />
      <Wrapper>
        <Span>LE RÊVE GOURMAND</Span>
        <LogoCake src={LogoCakePng} alt="Cupcake du Rêve Gourmand" />
      </Wrapper>
    </Text>
  );
};
