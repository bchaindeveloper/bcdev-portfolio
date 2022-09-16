import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
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
        expertise are in creating smart contracts using solidity, Web3
        applications and working with blockchain/cryptocurrency protocols. I am
        very passionate about the industry and am excited to keep learning
        everyday.
      </SectionText>
      <Button onClick={() => window.location = 'https//google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
