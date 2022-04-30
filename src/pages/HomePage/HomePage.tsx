import React from "react";
import styled, { css } from "styled-components";
import HomePageHeading from "./Components/HomePageHeading/HomePageHeading";
import HomePageProjects from "./Components/HomePageProjects/HomePageProjects";

const Wrapper = styled.div`
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HomePageHeading />
      <HomePageProjects />
    </Wrapper>
  );
};

export default HomePage;
