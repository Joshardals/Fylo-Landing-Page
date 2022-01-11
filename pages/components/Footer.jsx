import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import EarlyAccess from "./EarlyAccess";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <Bounce>
          <LogoImg src="/logo.svg" alt="fylo logo" />
        </Bounce>
        <FooterBody>
          <ReachMe>
            <Fade left>
              <Address>
                <LocationImg src="/icon-location.svg" alt="location" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  iusto. Praesentium rem nesciunt impedit nisi, officiis quam
                  eum
                </p>
              </Address>
            </Fade>
            <Fade right>
              <Contact>
                <Phone>
                  <PhoneImg src="/icon-phone.svg" alt="phone number" />
                  <p>+1-543-123-4567</p>
                </Phone>
                <Email>
                  <EmailImg src="/icon-email.svg" alt="email address" />
                  <p>example@fylo.com</p>
                </Email>
              </Contact>
            </Fade>
          </ReachMe>
          <Zoom>
            <About>
              <NavContainer>
                <NavLink href="#">About Us</NavLink>
                <NavLink href="#">Jobs</NavLink>
                <NavLink href="#">Press</NavLink>
                <NavLink href="#">Blog</NavLink>
              </NavContainer>
              <NavContainer>
                <NavLink href="#">Contact Us</NavLink>
                <NavLink href="#">Terms</NavLink>
                <NavLink href="#">Privacy</NavLink>
              </NavContainer>
              <SocialsContainer>
                <SocialLink
                  href="https://web.facebook.com/joshardals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </SocialLink>
                <SocialLink
                  href="https://www.twitter.com/joshardals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </SocialLink>
                <SocialLink
                  href="https://www.instagram.com/joshardals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialLink>
              </SocialsContainer>
            </About>
          </Zoom>
        </FooterBody>
      </FooterContainer>
      <EarlyAccess />
      <Author>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        <br />
        Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Joshardals">
          Joshua Bamidele
        </a>
      </Author>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    bg-dark-blue-3 md:px-14 flex flex-col relative z-0
`;
const FooterContainer = tw.div`
    pt-[20rem] md:py-[10rem] space-y-10 md:space-y-8 
`;
const LogoImg = tw.img`
  px-14
`;
const FooterBody = tw.div`
    flex flex-col lg:flex-row justify-between md:justify-between
    px-7 md:px-14
    `;
const ReachMe = tw.div`
    flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-7
`;
const Address = tw.div`
    flex space-x-4
`;
const LocationImg = tw.img`
    h-7
`;
const Contact = tw.div`
    space-y-6
`;
const Phone = tw.div`
    flex space-x-4
`;
const PhoneImg = tw.img``;
const Email = tw.div`
    flex space-x-4
`;
const EmailImg = tw.img``;
const About = tw.div`
    grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 py-7 ml-2
`;
const NavContainer = tw.div`
    flex flex-col space-y-4
`;
const NavLink = tw.a`
    flex hover:font-bold transition-all
`;
const SocialsContainer = tw.div`
    flex space-x-4 mt-20 items-center justify-center 
    md:justify-start md:items-start md:mt-0 
`;
const SocialLink = tw.a`
    h-10 w-10 border-[1px] border-white rounded-full flex items-center
    justify-center hover:border-cyan-1 
`;
const Author = tw.div`
  text-center
`;
export default Footer;
