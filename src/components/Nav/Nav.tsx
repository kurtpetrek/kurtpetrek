import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import ButtonHamburger from "./Hamburger";
import NavMainDropdown from "./NavMainDropdown";
import { Link } from "react-router-dom";

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
    background: ${props.theme.colors.ink500};
    border-bottom: 1px solid ${props.theme.colors.white};
  `
);

const HomeLink = styled(Link)(
  (props) => css`
    font-size: 24px;
    text-decoration: none;
    color: ${props.theme.colors.white};
  `
);

const StyledButtonHamburger = styled(ButtonHamburger)`
  margin-left: auto;
`;

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <NavContainer>
      <HomeLink to="/">Kurt Petrek</HomeLink>
      <StyledButtonHamburger isOpen={navIsOpen} toggleNav={toggleNav} />
      <NavMainDropdown navIsOpen={navIsOpen}>{null}</NavMainDropdown>
    </NavContainer>
  );
};

export default Nav;
