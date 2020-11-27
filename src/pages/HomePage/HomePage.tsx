import React from "react";
import styled, { css } from "styled-components";
import TypewriterAnimation from "../../components/animations/TypewriterAnimation";

const Wrapper = styled.div`
  padding: 20px;
`;

const Link = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.blue500};
  `
);

const Text = styled.p<{ smallText?: boolean }>(
  ({ theme, smallText = false }) => css`
    color: ${theme.colors.ink800};
    text-align: center;
    font-size: ${smallText ? "14px" : "24px"};

    @media (max-width: 600px) {
      font-size: ${smallText ? "12px" : "20px"};
    }
  `
);

const HomePage = () => {
  // <StyledWavingHand color={styleTheme.colors.yellow500} />
  return (
    <Wrapper>
      <TypewriterAnimation />
      <Text>Every Web Dev should have a cool website.</Text>
      <Text smallText>
        I had a cool one but it was built in php (
        <span role="img" aria-label="yeah I said php">
          👀
        </span>
        )
      </Text>
      <Text>
        I'm building this out in{" "}
        <Link
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </Link>{" "}
        on{" "}
        <Link
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </Link>
      </Text>
      <Text smallText>
        (So I don't have to pay for hosting)
        <br />
        At some point I am going to work on this...
      </Text>
      <Text>
        While you wait, check out what <br />
        I've created on{" "}
        <Link href="https://codepen.io/KPCodes/pens/showcase">Codepen</Link>
      </Text>
    </Wrapper>
  );
};

export default HomePage;
