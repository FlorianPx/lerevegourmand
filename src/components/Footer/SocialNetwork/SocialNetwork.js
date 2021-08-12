import React from "react";

import {
  SocialContainer,
  List,
  Item,
  Anchor,
  Image,
  BedenacLogo,
  RightBlock,
  LittleRightBlock,
  LeftBlock,
} from "./styledComponents";
import { socialNetWorkArray, bedenacArray } from "./constants";
import bedenacLogo from "../../../assets/svg/bedenacLogo.svg";

const SocialElements = () =>
  socialNetWorkArray.map((socialNetwork) => (
    <Item key={socialNetwork.title}>
      <a
        target="_blank"
        rel="noreferrer"
        href={socialNetwork.url}
        title={socialNetwork.title}
      >
        <Image src={socialNetwork.src} alt={socialNetwork.title} />
      </a>
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
      <LeftBlock>
        <p>Rejoignez-nous :</p>
        <List>
          <SocialElements />
        </List>
      </LeftBlock>
      <RightBlock>
        <p>On parle de nous :</p>
        <LittleRightBlock>
          <BedenacLogo alt="Commune de Bédenac" src={bedenacLogo} />
          <List>
            <SocialInformations />
          </List>
        </LittleRightBlock>
      </RightBlock>
    </SocialContainer>
  );
}

export default SocialNetwork;
