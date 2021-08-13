import React from "react";

import {
  SocialContainer,
  List,
  Item,
  Anchor,
  SocialLogo,
  BedenacLogo,
  Block,
} from "./styledComponents";
import { socialNetWorkArray, bedenacArray } from "./constants";
import bedenacLogo from "../../../assets/images/bedenacLogo.png";
import { FooterTitle, FooterText } from "../styledComponents";

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
        <List>
          <Item>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href="tel:0785142887"
            >
              <FooterTitle>07 85 14 28 87</FooterTitle>
            </a>
          </Item>
        </List>
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
