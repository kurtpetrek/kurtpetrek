import React from "react";
import styled, { css } from "styled-components/macro";
import Nav from "../Nav/Nav";
import RainbowFooter from "../RainbowFooter";

const LayoutContainer = styled.div(
  (props) => css`
    padding-top: ${props.theme.nav.height};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
);

const StyledRainbowFooter = styled(RainbowFooter)`
  margin-top: auto;
`;

const LayoutMain = ({ children }) => {
  return (
    <LayoutContainer>
      <Nav />
      {children}
      <StyledRainbowFooter />
    </LayoutContainer>
  );
};

export default LayoutMain;
