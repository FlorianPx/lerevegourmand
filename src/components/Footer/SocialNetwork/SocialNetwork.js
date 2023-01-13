import React from "react";

import {
  SocialContainer,
  List,
  Item,
  SocialLogo,
  Block,
  ContactBlock,
  PhoneLogo,
} from "./styledComponents";
import { socialNetWorkArray } from "./constants";
import { FooterTitle, FooterText } from "../styledComponents";
import phoneLogo from "../../../assets/svg/phone.svg";

const SocialElements = () =>
  socialNetWorkArray.map((socialNetwork) => (
    <Item key={socialNetwork.title}>
      <a
        target="_blank"
        rel="noreferrer"
        href={socialNetwork.url}
        title={socialNetwork.title}
      >
        <SocialLogo src={socialNetwork.src} alt={socialNetwork.title} />
      </a>
      <FooterText>{socialNetwork.title}</FooterText>
    </Item>
  ));

function SocialNetwork() {
  return (
    <SocialContainer>
      <Block>
        <FooterTitle>Réseaux sociaux</FooterTitle>
        <List>
          <SocialElements />
        </List>
      </Block>
      <Block>
        <FooterTitle>Nous contacter</FooterTitle>
        <ContactBlock
          target="_blank"
          rel="noreferrer"
          href=""
          title="Contacter"
        >
          <PhoneLogo src={phoneLogo} alt="Appeler" />
          <FooterText>06 00 00 00 00</FooterText>
        </ContactBlock>
      </Block>
    </SocialContainer>
  );
}

export default SocialNetwork;
