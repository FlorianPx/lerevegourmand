import React from "react";

import {
  SocialContainer,
  List,
  Item,
  Anchor,
  SocialLogo,
  BedenacLogo,
  Block,
  PressBlock,
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
      <PressBlock>
        <FooterTitle>On parle du Rêve Gourmand</FooterTitle>
        <BedenacLogo alt="Commune de Bédenac" src={bedenacLogo} />
        <List>
          <SocialInformations />
        </List>
      </PressBlock>
      <Block>
        <FooterTitle>Nous contacter</FooterTitle>
        <ContactBlock
          target="_blank"
          rel="noreferrer"
          href="tel:0785142887"
          title="Contacter le Rêve Gourmand"
        >
          <PhoneLogo src={phoneLogo} alt="Contacter le Rêve Gourmand" />
          <FooterText>07 85 14 28 87</FooterText>
        </ContactBlock>
      </Block>
    </SocialContainer>
  );
}

export default SocialNetwork;
