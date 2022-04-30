import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import ButtonHamburger from "./Hamburger";
import NavMainDropdown from "./NavMainDropdown";
import { Link } from "react-router-dom";
import AnimatedBar from "./AnimatedBar";
import styleTheme from "../../constants/styles/styleTheme";
import UnderConstructionPage from "../../pages/UnderConstructionPage/UnderConstructionPage";

const NavContainer = styled.nav(
  (props) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px 32px;
    background: ${props.theme.colors.white};
    border-bottom: 1px solid ${props.theme.colors.ink700};
  `
);

const HomeLink = styled(Link)(
  (props) => css`
    font-size: 28px;
    text-decoration: none;
    color: ${props.theme.colors.ink700};
    font-weight: bold;
  `
);

const StyledButtonHamburger = styled(ButtonHamburger)`
  margin-left: auto;
`;

const Text = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.ink800};
    padding: 32px;
    display: grid;
    place-items: center;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  `
);

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <NavContainer>
      <HomeLink to="/">Kurt Petrek</HomeLink>
      {/* <AnimatedBar
        color={
          navIsOpen ? styleTheme.colors.green200 : styleTheme.colors.ink200
        }
      /> */}
      <StyledButtonHamburger isOpen={navIsOpen} toggleNav={toggleNav} />
      <NavMainDropdown navIsOpen={navIsOpen}>
        <Text>
          Only one page now <br />
          but nav animations are fun...
        </Text>
        <UnderConstructionPage />
      </NavMainDropdown>
    </NavContainer>
  );
};

export default Nav;
