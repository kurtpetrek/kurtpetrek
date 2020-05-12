import React from "react";
import styled, { css } from "styled-components/macro";

const StylingContainer = styled.div(
  (props) => css`
    color: ${props.fontColor || "#000"};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    text-align: center;
    padding: 16px 32px;

    @media (max-width: 500px) {
      font-size: 14px;
    }

    h1 {
      font-size: 1.8em;
    }

    h2 {
      font-size: 1.5em;
    }
  `
);

const UnderConstruction = (props) => {
  return (
    <StylingContainer fontColor={props.fontColor}>
      <h1>
        Moving hosting to Github <br />
        need to rebuild in React
      </h1>
      <h2>Back soon</h2>
    </StylingContainer>
  );
};

export default UnderConstruction;
