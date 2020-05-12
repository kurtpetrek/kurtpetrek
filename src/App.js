import React from "react";
import styled, { css } from "styled-components/macro";
import WavingHand from "./components/WavingHand/WavingHand";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

const Wrapper = styled.div(
  (props) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
  `
);

function App() {
  return (
    <Wrapper>
      <WavingHand color="white" size="230px" />
      <UnderConstruction fontColor="white" />
    </Wrapper>
  );
}

export default App;
