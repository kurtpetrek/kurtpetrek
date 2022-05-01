import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import ButtonHamburger from "./Hamburger";
import NavMainDropdown from "./NavMainDropdown";
import { Link } from "react-router-dom";
import AnimatedBar from "./AnimatedBar";
import {
  navScrollItemClassName,
  navScrollSubItemClassName,
} from "../../constants/navigation";

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

const NavLink = styled.button(
  ({ theme }) => css`
    border: none;
    padding: 14px 32px;
    background: none;
    color: ${theme.colors.ink700};
    text-align: left;
    cursor: pointer;
    display: flex;

    &:hover {
      color: ${theme.colors.blue500};
    }
  `
);

const NavSubLink = styled(NavLink)`
  padding: 14px 32px 14px 64px;
`;

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

  const renderNavItems = () => {
    const navItems = [
      ...document.querySelectorAll(`.${navScrollItemClassName}`),
    ].map((element, i) => {
      const text = element.textContent;
      return (
        <NavLink
          onClick={() => {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            setNavIsOpen(false);
          }}
          key={text || i}
        >
          {text}
          <AnimatedBar />
        </NavLink>
      );
    });

    const navSubItems = [
      ...document.querySelectorAll(`.${navScrollSubItemClassName}`),
    ].map((element, i) => {
      const text = element.textContent;
      return (
        <NavSubLink
          onClick={() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setNavIsOpen(false);
          }}
          key={text || i}
        >
          {text}
          <AnimatedBar />
        </NavSubLink>
      );
    });
    return [...navItems, ...navSubItems];
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
        {renderNavItems()}
      </NavMainDropdown>
    </NavContainer>
  );
};

export default Nav;
