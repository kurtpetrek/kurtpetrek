import React from "react";
import styled, { css } from "styled-components/macro";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import WavingHand from "../../components/WavingHand/WavingHand";
import styleTheme from "../../constants/styles/styleTheme";

const Wrapper = styled.div(
  (props) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

const UnderConstructionPage = () => {
  return (
    <Wrapper>
      <WavingHand color={styleTheme.colors.yellow500} size="230px" />
      <UnderConstruction />
    </Wrapper>
  );
};

export default UnderConstructionPage;
