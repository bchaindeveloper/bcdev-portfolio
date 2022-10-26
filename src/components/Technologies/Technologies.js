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
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web and blockchain
      developement space. I specialize in creating smart contracts and front-end applications.
    </SectionText>
    <List>
      <ListItem>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9h23Biyzbvy7TmEbevoqbwHaHa%26pid%3DApi&f=1"
          width="180px"
          height="160px"
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
          width="180px"
          height="160px"
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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-X5OBU37Ims4%2FXQexxebsV0I%2FAAAAAAAAD80%2FPlMIGUQBY3YwRugZNLvdRaI2Pw_g0jIlgCLcBGAs%2Fs1600%2FPython%252BProgramming%252BLogo.png&f=1&nofb=1"
          width="180px"
          height="160px"
        />
        <br />
        <ListContainer>
          <ListTitle>Web3.py</ListTitle>
          <ListParagraph>
            Experience with <br />
            Web3.py
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1"
          width="180px"
          height="160px"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Frameworks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          width="180px"
          height="160px"
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
          width="180px"
          height="160px"
        />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
