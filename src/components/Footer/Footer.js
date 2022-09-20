import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bcdev3@protonmail.com">
            bcdev3@protonmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Blockchain Domain</LinkTitle>
          <LinkItem href="https://ipfs.io/ipfs/QmZuhj5Zq58c2N4Hs4HTeMPysikxE9nd2ab6kDpRzriGFV/">
            bchaindev.crypto
          </LinkItem>
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
