import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { LinkIconImg } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import { ImageContainer } from "../Technologies/TechnologiesStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
      <FooterWrapper>
            <SectionTitle>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>
            contact@bchaindev.com
          </LinkItem>
          <img src="images/flag.png" alt="" right />
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
           <Slogan>Web3 Architect and Brick Layer</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/bchaindeveloper">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
