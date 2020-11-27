import React from "react";
import styled, { css } from "styled-components/macro";

const defaultColor = "white";
const defaultSize = `300px`;

const Wrapper = styled.div(
  ({ size }) => css`
    position: relative;
    width: ${size};
    height: ${size};
  `
);

const Hand = styled.div(
  ({ size, color }) => css`
    background: ${color};
    height: calc(${size} * 0.4);
    width: calc(${size} * 0.4);
    border-radius: calc(${size} * 0.14) calc(${size} * 0.14) calc(${size} * 0.1)
      calc(${size} * 0.1);
    position: absolute;
    bottom: 15%;
    left: 30%;
    animation: wave-hi 3s infinite;
    box-shadow: 3px 10px 5px 0px rgba(0, 0, 0, 0.3);

    @keyframes wave-hi {
      0%,
      100% {
        transform: rotate(30deg) rotate3d(0, 1, 0, 20deg) translate(5%, -10%);
        box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.2);
      }
      25% {
        transform: rotate(-20deg) rotate3d(0, 1, 0, -20deg) translate(-5%, 0);
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
      }
      50% {
        transform: rotate(20deg) rotate3d(0, 1, 0, 20deg) translate(5%, -10%);
        box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.2);
      }
      75% {
        transform: rotate(-30deg) rotate3d(0, 1, 0, -20deg) translate(-5%, 0%);
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
      }
    }
  `
);

const HandTop = styled(Hand)(
  (props) => css`
    box-shadow: none;
    will-change: transform;
  `
);

const Finger = styled.div(
  ({ size, color }) => css`
    box-shadow: 0px 6px 3px 6px rgba(0, 0, 0, 0.3);
    width: calc(${size} * 0.084);
    height: calc(${size} * 0.4);
    position: absolute;
    bottom: 68%;
    background: ${color};
    border-radius: calc(${size} * 0.04);
    left: calc(${size} * 0.005);

    &:nth-child(2) {
      left: calc(${size} * 0.106);
      bottom: 86%;
    }

    &:nth-child(3) {
      left: calc(${size} * 0.21);
      bottom: 76%;
    }

    &:nth-child(4) {
      left: calc(${size} * 0.316);
      bottom: 54%;
    }
  `
);

const Thumb = styled.div(
  ({ size, color }) => css`
    width: calc(${size} * 0.12);
    height: calc(${size} * 0.37);
    background: ${color};
    position: absolute;
    transform: skew(30deg);
    border-radius: calc(${size} * 0.1) calc(${size} * 0.04) 0
      calc(${size} * 0.1);
    left: calc(${size} * -0.08);
    bottom: 0vmin;
    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);
  `
);

const WavingHand = ({
  className = "",
  size = defaultSize,
  color = defaultColor,
}) => {
  return (
    <Wrapper size={size} className={className}>
      <Hand color={color} size={size}>
        <Finger color={color} size={size} />
        <Finger color={color} size={size} />
        <Finger color={color} size={size} />
        <Finger color={color} size={size} />
        <Thumb color={color} size={size} />
      </Hand>
      <HandTop color={color} size={size} />
    </Wrapper>
  );
};

export default WavingHand;
