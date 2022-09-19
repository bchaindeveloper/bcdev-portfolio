import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  // { number: 29, text: "Repositories" },
  // { number: 1000, text: "Patrick Collins Blockchain Course" },
  // { number: 1900, text: "Github Followers" },
  // { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <SectionText>
      My main acomplishments so far are educational based from CodeCademy
      courses to FreeCodeCamp tutorial. Below are some of my most significant
      acomplishments.{" "}
    </SectionText>
    <SectionText>
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
        <h4>
          Currently Enrolled: Solidity, Blockchain, FullStack Web3 JS Tutorial
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
        <h4>Currently Enrolled: CodeCademy_ Full-Stack Software Engineer</h4>
      </div>
    </SectionText>
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

export default Acomplishments;
