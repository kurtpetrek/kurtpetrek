import React from "react";
import TypewriterAnimation from "../../../../components/animations/TypewriterAnimation";
import {
  ExternalLink,
  H2,
  H3,
  Text,
} from "../../../../components/General/Typography";
import styled, { css } from "styled-components/macro";
import { projectsData, ProjectTypes } from "./projectsData";

const Container = styled.section(
  ({ theme }) => css`
    max-width: ${theme.sizes.containerWidth};
    margin: 40px auto;
  `
);

const ProjectItem = styled.div`
  margin-top: 40px;
`;

const HomePageProjects = () => {
  const renderProjects = () => {
    return projectsData.map((data, i) => {
      if (data.type === ProjectTypes.codepen) {
        return (
          <ProjectItem key={data.slugHash}>
            <H3>{data.heading}</H3>
            <Text>{data.description}</Text>
            <p
              className="codepen"
              data-height={data.height}
              data-default-tab="result"
              data-slug-hash={data.slugHash}
              data-user="KPCodes"
              style={{
                height: `${data.height}px`,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid",
                margin: "1em 0",
                padding: "1em",
              }}
            />
          </ProjectItem>
        );
      }
    });
  };

  return (
    <Container>
      <H2>Personal Projects</H2>
      <Text>
        Over the years I have worked on various personal and professional
        projects. Here are a few of my favorite personal projects. Most of these
        I created several years ago when I was teaching myself to code or
        teaching but I am still proud of many of them.
      </Text>
      {renderProjects()}
    </Container>
  );
};

export default HomePageProjects;
