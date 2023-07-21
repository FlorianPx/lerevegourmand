import React from "react";

import XIcone from "../../assets/svg/cross.svg";
import {
  CloseIcone,
  Container,
  Image,
  Section,
  Title,
  Wrapper,
} from "./styledComponents";

export const Modal = (props) => {
  const {
    closeModal,
    content: { body, title },
    isOpen,
  } = props;
  return (
    <div>
      {isOpen && (
        <Container onClick={closeModal}>
          <Section
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CloseIcone onClick={closeModal}>
              <Image alt="Fermer la modale" loading="lazy" src={XIcone} />
            </CloseIcone>
            {title !== "" && <Title>{title}</Title>}
            <Wrapper>{body}</Wrapper>
          </Section>
        </Container>
      )}
    </div>
  );
};
