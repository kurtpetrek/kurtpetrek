import React from "react";
import styled, { css } from "styled-components/macro";
import Nav from "../Nav/Nav";

const LayoutContainer = styled.div(
  (props) => css`
    padding-top: ${props.theme.nav.height};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
);

const LayoutMain = ({ children }) => {
  return (
    <LayoutContainer>
      <Nav />
      {children}
    </LayoutContainer>
  );
};

export default LayoutMain;
