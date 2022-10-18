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
        <h4>Currently Enrolled: CodeCademy_ Full-Stack Software Engineer</h4>
      </div>
    </SectionText>
    <SectionDivider />
    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
  </Section>
);

export default Accomplishments;
