import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import EarlyAccess from "./EarlyAccess";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

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
                {/* <SocialLink href="">
                  <img src="https://img.icons8.com/material-outlined/24/65e2d9/facebook-f.png" />
                </SocialLink> */}
                <SocialLink href="#">
                  <SocialBg></SocialBg>
                </SocialLink>
                <SocialLink href="#"></SocialLink>
                <SocialLink href="#"></SocialLink>
                <SocialLink href="#"></SocialLink>
              </SocialsContainer>
            </About>
          </Zoom>
        </FooterBody>
      </FooterContainer>
      <EarlyAccess />
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
// const LogoAddress = tw.div`
//     space-y-8
// `;
// const LogoImg = tw.img``;
// const ReachMe = tw.div`
//     flex
// `;
// const Address = tw.div`
//     flex flex-1 space-x-6 py-7 pr-3 items-center h-full w-full
// `;
// const LocationImg = tw.img`
//     h-6
// `;
// const Contact = tw.div`
//     flex-1 flex flex-col justify-center space-y-6 ml-10
// `;
// const Phone = tw.div`
//     flex items-center w-full space-x-6
// `;
// const PhoneImg = tw.img`
//     h-6
// `;
// const Email = tw.div`
//     flex w-full space-x-6
// `;
// const EmailImg = tw.img``;
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
const SocialLink = tw.div`
    h-10 w-10 border-[1px] border-white rounded-full flex items-center
    justify-center hover:border-cyan-1
`;
const SocialBg = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiNmZmZmZmY7Ij4gICAgPHBhdGggZD0iTTE3LjUyNSw5SDE0VjdjMC0xLjAzMiwwLjA4NC0xLjY4MiwxLjU2My0xLjY4MmgxLjg2OHYtMy4xOEMxNi41MjIsMi4wNDQsMTUuNjA4LDEuOTk4LDE0LjY5MywyIEMxMS45OCwyLDEwLDMuNjU3LDEwLDYuNjk5VjlIN3Y0bDMtMC4wMDFWMjJoNHYtOS4wMDNsMy4wNjYtMC4wMDFMMTcuNTI1LDl6Ij48L3BhdGg+PC9zdmc+")
    50% 50% no-repeat;
  background-size: 100%;
`;
export default Footer;
