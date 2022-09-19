import React from "react";
import {
  DiFirebase,
  DiJavascript,
  DiLinux,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web and blockchain
      developement space.
    </SectionText>
    <List>
      <ListItem>
        <img
          src="https://camo.githubusercontent.com/6831b4de31807bcf9e2c8c25dd19a4f465382cf29cbc9a58dac10960a1799194/68747470733a2f2f736f6c69646974796c616e672e6f72672f696d616765732f536f6c477261792e706e67"
          width="200px"
          height="80px"
        />
        <br />
        <ListContainer>
          <ListTitle>Solidity</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://camo.githubusercontent.com/97ab139a10b0a0ef776fdccccc7dc7b8386c8cb3faa3d1797956bb906ca489f8/68747470733a2f2f776562336a732e6f72672f776562336a732e706e67"
          width="200px"
          height="80px"
        />
        <br />
        <ListContainer>
          <ListTitle>Web3.js</ListTitle>
          <ListParagraph>
            Experience with <br />
            Web3.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://camo.githubusercontent.com/2ab62ab50123744ccf49a93413e2397ca1584ca9fae540d1118507db4035f393/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f312f31352f436861696e6c696e6b5f4c6f676f5f426c75652e7376672f33373870782d436861696e6c696e6b5f4c6f676f5f426c75652e7376672e706e67"
          width="200"
          height="80px"
        />
        <br />
        <ListContainer>
          <ListTitle>Chainlink</ListTitle>
          <ListParagraph>
            Experience with <br />
            Chainlink
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1"
          width="200"
          height="180px"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          width="200"
          height="180px"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimage_gallery%2Fn1204014.png&f=1&nofb=1"
          width="200"
          height="180px"
        />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL + MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
