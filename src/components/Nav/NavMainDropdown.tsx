import React from "react";
import styled, { css } from "styled-components/macro";

const panelAnimationLength = 0.2;

const Container = styled.div<{ navIsOpen?: boolean }>(
  (props) => css`
    position: fixed;
    left: 0;
    top: ${props.theme.nav.height};
    z-index: 100;
    width: 100%;
    height: calc(100% - ${props.theme.nav.height});
    overflow: auto;
    transition: 0.3s;
    ${props.navIsOpen
      ? ""
      : css`
          pointer-events: none;
          top: 100vh;
        `}
  `
);

const PanelAnimation = styled(Container)(
  (props) => css`
    background: ${props.theme.colors.green500};
    opacity: 0.5;
    transform: translate(100vw);
    transition: 0.3s;

    ${props.navIsOpen
      ? css`
          transform: translate(0);
          border-radius: 0;
          transition: ${panelAnimationLength + "s"};
        `
      : css`
          transform: translate(100vw);
          border-radius: 100%;
          transition: ${panelAnimationLength + "s"}
            ${panelAnimationLength * 2 + "s"};
        `}

    &:nth-of-type(2) {
      background: ${props.theme.colors.yellow500};
      transform: translate(-100vw, 100vh);

      ${props.navIsOpen
        ? css`
            transform: translate(0);
            border-radius: 0;
            transition: ${panelAnimationLength + "s"}
              ${panelAnimationLength + "s"};
          `
        : css`
            transform: translate(-100vw, 100vh);
            border-radius: 100%;
            transition: ${panelAnimationLength + "s"}
              ${panelAnimationLength + "s"};
          `}
    }
  `
);

const List = styled(PanelAnimation)(
  (props) => css`
    display: flex;
    flex-direction: column;

    background: ${props.theme.colors.white};
    border-radius: 0;
    opacity: 1;
    ${props.navIsOpen
      ? css`
          transform: translate(0);
          border-radius: 0;
          transition: ${panelAnimationLength + "s"}
            ${panelAnimationLength * 2 + "s"};
        `
      : css`
          transform: translate(0, 100vh);
          border-radius: 100%;
          transition: ${panelAnimationLength + "s"};
        `}
  `
);

const NavMainDropdown = ({
  children,
  navIsOpen,
}: {
  navIsOpen?: boolean;
  children: any;
}) => {
  return (
    <Container navIsOpen={navIsOpen}>
      <PanelAnimation navIsOpen={navIsOpen} />
      <PanelAnimation navIsOpen={navIsOpen} />
      <List navIsOpen={navIsOpen}>{children}</List>
    </Container>
  );
};

export default NavMainDropdown;
