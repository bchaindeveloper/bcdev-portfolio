import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I have been studying blockchain technology since early 2018. My
        expertise is in creating smart contracts using solidity, Web3
        applications and working with blockchain/cryptocurrency protocols. I am
        very passionate about the industry and excited to keep learning
        everyday.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/bchaindeveloper'}>Learn More</Button>
    </LeftSection>
    <SectionDivider />
  </Section>
);

export default Hero;
