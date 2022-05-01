import React from "react";
import TypewriterAnimation from "../../../../components/animations/TypewriterAnimation";
import {
  ExternalLink,
  H1,
  H2,
  Text,
} from "../../../../components/General/Typography";
import styled, { css } from "styled-components/macro";
import {
  navScrollItemClassName,
  navScrollMarginTop,
} from "../../../../constants/navigation";

const breakpoint = `700px`;

const Container = styled.section(
  ({ theme }) => css`
    max-width: ${theme.sizes.containerWidth};
    margin: auto;
  `
);

const HeadingContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: ${breakpoint}) {
    display: block;
  }
`;

const TypewriterAnimationStyled = styled(TypewriterAnimation)`
  @media (max-width: ${breakpoint}) {
    margin: 10px 0 40px;
  }
`;

const ScrollableH2 = styled(H2)`
  scroll-margin-top: ${navScrollMarginTop};
`;

const HomePageHeading = ({ className }: { className?: string }) => {
  return (
    <Container data-testid="HomePageHeading" className={className}>
      <HeadingContainer data-testid="HomePageHeading">
        <div>
          <H1>Hello World!</H1>
          <Text>
            My name is Kurt Petrek, I am a software engineer focusing on
            frontend development with over five years of professional
            experience. Currently I work at{" "}
            <ExternalLink
              href="https://uipath.com"
              target="_blank"
              rel="noopener"
            >
              UiPath
            </ExternalLink>{" "}
            where I lead the frontend team on{" "}
            <ExternalLink
              href="https://www.uipath.com/product/automation-hub"
              target="_blank"
              rel="noopener"
            >
              Automation Hub
            </ExternalLink>
            . I believe web applications should be performant, visually
            appealing, secure, responsive and accessible. The open nature of the
            web attracted me to teach myself programing while the challenge of
            problem solving and the joy of seeing my creations used by thousands
            of users drives me to continue to learn more.
          </Text>
        </div>
        <TypewriterAnimationStyled />
      </HeadingContainer>
      <ScrollableH2 className={navScrollItemClassName}>Background</ScrollableH2>
      <Text>
        I graduated from the{" "}
        <ExternalLink href="https://uc.edu" target="_blank" rel="noopener">
          University of Cincinnati
        </ExternalLink>{" "}
        in 2010 with a bachelors degree in Electronic Media. My coursework
        during college focused on graphic design, audio and video production as
        well as web development, business and history. After graduation I moved
        to Brooklyn, New York where I worked out of{" "}
        <ExternalLink
          href="http://www.continentalrecording.studio/"
          target="_blank"
          rel="noopener"
        >
          Continental Recording Studio
        </ExternalLink>{" "}
        and for various live sound companies before becoming interested in web
        development. Having taken some courses on web development in college I
        had a foundation to build on and found I could learn a lot more for free
        on the web and gain valuable problem solving and research abilities
        along the way.
      </Text>
      <Text>
        In 2015 I started a position as a technology instructor at the{" "}
        <ExternalLink
          href="https://www.nypl.org/techconnect"
          target="_blank"
          rel="noopener"
        >
          New York Public Library{" "}
        </ExternalLink>{" "}
        where I taught free coding classes in Midtown Manhattan for their
        Project Code and Kids Coding Hour classes. In 2017 I took a position
        through{" "}
        <ExternalLink
          href="https://www.laguardia.edu/ce/techhire-opencode/"
          target="_blank"
          rel="noopener"
        >
          City University of New York at LaGuardia Community College
        </ExternalLink>{" "}
        teaching HTML, CSS, JavaScript and Git in a four week crash course to
        prepare students for various coding bootcamps. In 2018 I started a job
        as a React Developer at App Partner, an app development agency, where I
        worked on various web applications and content management systems. In
        2019 UiPath acquired App Partner where I started as a Software Engineer
        I and have since been promoted up twice to Senior Software Engineer.
      </Text>
    </Container>
  );
};

export default HomePageHeading;
