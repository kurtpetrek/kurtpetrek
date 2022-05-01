import React from "react";
import styled, { css } from "styled-components";

const animationLength = "5s";

type Props = { color?: string };

const BarContainer = styled.div(
  (props) => css`
    flex: 1;
    padding: 12px 0;
    margin: 0 32px;
    overflow: hidden;
    position: relative;
    opacity: 0.5;

    @media (max-width: 500px) {
      margin: 0 8px;
    }
  `
);

const MainBar = styled.div<Props>(
  (props) => css`
    height: 1px;
    background: ${props.color || props.theme.colors.ink100};
    transition: background 0.5s;
    width: 100%;
    animation: AnimatedBar__MainBar-animation ${animationLength} infinite
      alternate ease-in-out;

    @keyframes AnimatedBar__MainBar-animation {
      0% {
        transform: scale(0);
        transform-origin: left;
      }
      40% {
        transform: scale(1);
        transform-origin: left;
      }
      60% {
        transform: scale(1);
        transform-origin: right;
      }
      100% {
        transform: scale(0);
        transform-origin: right;
      }
    }
  `
);

const PulseBar = styled.div<Props>(
  (props) => css`
    position: absolute;
    height: 4px;
    @media (max-width: 500px) {
      height: 3px;
    }
    background: ${props.color || props.theme.colors.ink100};
    transition: background 0.5s;
    width: 200px;
    border-radius: 100%;
    left: -200px;
    transform: translate(0, -50%);
    animation: AnimatedBar__PulseBar-animation ${animationLength} infinite
      linear alternate;

    @keyframes AnimatedBar__PulseBar-animation {
      0% {
        transform: translate(0, -50%);
      }
      40% {
        transform: translate(0, -50%) scale(0.2);
      }
      50% {
        transform: translate(40vw, -50%) scale(1);
      }
      60% {
        transform: translate(100vw, -50%) scale(0.2);
      }
      100% {
        transform: translate(100vw, -50%);
      }
    }
  `
);

const AnimatedBar = ({ color }: Props) => {
  return (
    <BarContainer>
      <MainBar color={color} />
      <PulseBar color={color} />
    </BarContainer>
  );
};

export default AnimatedBar;
