import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  // { number: 29, text: "Repositories" },
  // { number: 1000, text: "Patrick Collins Blockchain Course" },
  // { number: 1900, text: "Github Followers" },
  // { number: 5000, text: "Github Stars" },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <SectionText>
      My main accomplishments so far are educational based from CodeCademy
      courses to FreeCodeCamp tutorials. Below are some of my most significant
      accomplishments.{" "}
    </SectionText>
    <SectionText>
    <div>
        <h4>
        Completed: Solidity, Blockchain, FullStack Web3 JS Tutorial
        </h4>
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/gyMwXuJrbJQ"
          title="Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div>
        <h4> Completed: Solidity, Blockchain Python Tutorial</h4>
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/M576WGiDBdQ"
          title="Solidity, Blockchain, and Smart Contract Course – Beginner to Expert Python Tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div>
        <h4>Completed: CodeCademy, Front-End Engineer</h4>
        <a href="https://join.codecademy.com/learn/paths/front-end-engineer-career-path/" target="_blank" rel="noreferrer">
        <img
          src="https://static-assets.codecademy.com/components/curriculum/path/front-end-engineer-career-path/curriculum-card.svg"
          width="180"
          height="180"
        />
        </a>
      </div>
      <br />
        <div>
        Resume Available Upon Request
        </div>
    </SectionText>
    <SectionDivider />

  </Section>
);

export default Accomplishments;
