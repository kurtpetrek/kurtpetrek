import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";

const StylingContainer = styled.div(
  (props) => css`
    color: ${props.fontColor || props.theme.colors.ink500};
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

const CharItem = styled.span(
  (props) => css`
    display: inline-block;
    transform-origin: bottom center;
    min-width: 8px;
    ${props.isUp
      ? css`
          transform: scale(1);
          transition: 0.3s ${props.delay * 0.1 + "s"}
            cubic-bezier(0.29, -0.63, 0.74, 1.64);
        `
      : css`
          transform: scale(0);
          transition: 0.3s cubic-bezier(0.29, -0.63, 0.74, 1.64);
        `}
  `
);

const UnderConstruction = (props) => {
  const [isUp, setIsUp] = useState(false);
  const [changeUpTimeout, setChangeUpTimeout] = useState(null);
  const timeoutLength = 3000;

  useEffect(() => {
    delayUpToTrue(1000);
    return () => {
      clearTimeout(changeUpTimeout);
    };
  }, []);

  const delayUpToFalse = (length) => {
    setChangeUpTimeout(
      setTimeout(() => {
        setIsUp(false);
        delayUpToTrue();
      }, length || timeoutLength)
    );
  };

  const delayUpToTrue = (length) => {
    setChangeUpTimeout(
      setTimeout(() => {
        setIsUp(true);
        delayUpToFalse();
      }, length || timeoutLength)
    );
  };

  const content = "Under Construction".split("").map((char, i) => {
    return (
      <CharItem delay={i} isUp={isUp} key={`item ${i}`}>
        {char}
      </CharItem>
    );
  });

  return (
    <StylingContainer fontColor={props.fontColor}>
      <h1>{content}</h1>
    </StylingContainer>
  );
};

export default UnderConstruction;
