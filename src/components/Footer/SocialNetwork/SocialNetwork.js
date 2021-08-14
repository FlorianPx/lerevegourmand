import React from "react";

import {
  SocialContainer,
  List,
  Item,
  Anchor,
  SocialLogo,
  BedenacLogo,
  Block,
  ContactBlock,
  PhoneLogo,
} from "./styledComponents";
import { socialNetWorkArray, bedenacArray } from "./constants";
import { FooterTitle, FooterText } from "../styledComponents";
import bedenacLogo from "../../../assets/images/bedenacLogo.png";
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

const SocialInformations = () =>
  bedenacArray.map((socialInfo) => (
    <Item key={socialInfo.title}>
      <Anchor
        target="_blank"
        rel="noreferrer"
        href={socialInfo.url}
        title={socialInfo.title}
      >
        {socialInfo.title}
      </Anchor>
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
          href="tel:0785142887"
          title="Appeler le Rêve Gourmand"
        >
          <PhoneLogo src={phoneLogo} alt="Logo pour appeler le Rêve Gourmand" />
          <FooterText>07 85 14 28 87</FooterText>
        </ContactBlock>
      </Block>
      <Block>
        <FooterTitle>On parle du Rêve Gourmand</FooterTitle>
        <BedenacLogo alt="Commune de Bédenac" src={bedenacLogo} />
        <List>
          <SocialInformations />
        </List>
      </Block>
    </SocialContainer>
  );
}

export default SocialNetwork;
