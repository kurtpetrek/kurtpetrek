import React from "react";
import styled, { css } from "styled-components/macro";

const panelAnimationLength = 0.3;

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
          animation: PanelAnimation-left ${panelAnimationLength + "s"} forwards;
        `
      : ""}

    @keyframes PanelAnimation-left {
      0% {
        transform: translate(100vw);
      }
      100% {
        transform: translate(0vw);
      }
    }

    &:nth-of-type(2) {
      background: ${props.theme.colors.yellow500};
      transform: translate(-100vw, 100vh);
      transition: 0.3s;
      ${props.navIsOpen
        ? css`
            animation: PanelAnimation-right ${panelAnimationLength + "s"}
              ${panelAnimationLength + "s"} forwards;
          `
        : ""}

      @keyframes PanelAnimation-right {
        0% {
          transform: translate(-100vw, 100vh);
        }
        100% {
          transform: translate(0vw);
        }
      }
    }
  `
);

const List = styled(PanelAnimation)(
  (props) => css`
    background: ${props.theme.colors.ink500};
    opacity: 1;
    transform: translate(0, 100vh);
    transition: 0.3s;
    ${props.navIsOpen
      ? css`
          animation: PanelAnimation-bottom ${panelAnimationLength + "s"}
            ${panelAnimationLength * 2 + "s"} forwards;
        `
      : css`
          transform: translate(0, 100vh);
        `}

    @keyframes PanelAnimation-bottom {
      0% {
        transform: translate(0, 100vh);
      }
      100% {
        transform: translate(0);
      }
    }
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
