import React from "react";
import { H2, H3, Text } from "../../../../components/General/Typography";
import styled, { css } from "styled-components/macro";
import { projectsData, ProjectTypes } from "./projectsData";
import {
  navScrollItemClassName,
  navScrollMarginTop,
  navScrollSubItemClassName,
} from "../../../../constants/navigation";

const Container = styled.section(
  ({ theme }) => css`
    max-width: ${theme.sizes.containerWidth};
    margin: 40px auto;
  `
);

const ProjectItem = styled.div`
  margin-top: 40px;
`;

const ScrollableH2 = styled(H2)`
  scroll-margin-top: ${navScrollMarginTop};
`;

const ScrollableH3 = styled(H3)`
  scroll-margin-top: ${navScrollMarginTop};
`;

const HomePageProjects = () => {
  const renderProjects = () => {
    return projectsData.map((data, i) => {
      if (data.type === ProjectTypes.codepen) {
        return (
          <ProjectItem key={data.slugHash}>
            <ScrollableH3 className={navScrollSubItemClassName}>
              {data.heading}
            </ScrollableH3>
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
      <ScrollableH2 className={navScrollItemClassName}>
        Personal Projects
      </ScrollableH2>
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
