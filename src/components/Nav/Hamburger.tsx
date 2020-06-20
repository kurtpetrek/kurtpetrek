import React from "react";
import styled, { css } from "styled-components/macro";

const InnerContainer = styled.span`
  width: 24px;
  height: 16px;
  display: inline-block;
  position: relative;
  top: 2px;
  border: none;
  background: transparent;
  padding: 0;
`;

const Label = styled.b`
  position: absolute;
  left: -10000px;
  opacity: 0;
`;

const Bar = styled.span<{
  isOpen: boolean;
  topBar?: boolean;
  midBar?: boolean;
  bottomBar?: boolean;
}>(
  (props) => css`
    background: ${props.theme.colors.white};
    height: 3px;
    width: 100%;
    border-radius: 1px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    ${
      props.topBar
        ? css`
            top: 0%;
            transition: transform 0.1s, width 0.1s 0.15s, top 0.1s 0.15s;
          `
        : ""
    }
    ${
      props.topBar && props.isOpen
        ? css`
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            transition: width 0.1s, top 0.1s, transform 0.1s 0.15s;
          `
        : ""
    }

    ${
      props.midBar
        ? css`
            top: 50%;
            transition: transform 0.1s, width 0.1s 0.15s, top 0.1s 0.15s;
          `
        : ""
    }
    ${
      props.midBar && props.isOpen
        ? css`
            top: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            transition: width 0.1s, top 0.1s, transform 0.1s 0.15s;
          `
        : ""
    }

    ${
      props.bottomBar
        ? css`
            top: 100%;
            transition: transform 0.1s, width 0.1s 0.15s, top 0.1s 0.15s;
          `
        : ""
    }
    ${
      props.bottomBar && props.isOpen
        ? css`
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            transition: width 0.1s, top 0.1s, transform 0.1s 0.15s;
          `
        : ""
    }
  `
);

const Wrapper = styled.button(
  (props) => css`
    display: inline-block;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 8px;

    &:focus {
      outline: none;

      ${Bar} {
        outline: blue solid 1px;
      }
    }
  `
);

const ButtonHamburger = ({
  isOpen,
  toggleNav,
  className,
}: {
  isOpen: boolean;
  toggleNav: Function | any;
  className?: string;
}) => {
  return (
    <Wrapper
      className={className}
      onClick={toggleNav}
      data-testid="ButtonHamburgerContainer"
    >
      <InnerContainer>
        <Label>Toggle Navigation Menu</Label>
        <Bar isOpen={isOpen} topBar />
        <Bar isOpen={isOpen} midBar />
        <Bar isOpen={isOpen} bottomBar />
      </InnerContainer>
    </Wrapper>
  );
};

export default ButtonHamburger;
