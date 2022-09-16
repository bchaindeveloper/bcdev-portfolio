import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const projectsDemo = [{
  title: 'project1',
  description: 'This is the porject description'
}]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {[0, 1].map((project) => (
          <div>
            {project}
          </div>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;
