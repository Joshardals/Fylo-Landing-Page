import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Navbar from "./Navbar";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <HeaderContent>
        <Zoom>
          <HeroImg src="/illustration-intro.png" alt="illustration-intro" />
        </Zoom>
        <Bounce>
          <HeroText>
            <h2>All your files in one secure location, accessible anywhere.</h2>
            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family and co-workers.
            </p>
          </HeroText>
          <GetStarted>Get Started</GetStarted>
        </Bounce>
      </HeaderContent>
      <BgCurve src="/background/bg-curvy-desktop.svg" />
    </Wrapper>
  );
};
const Wrapper = tw.div`
  pb-12rem md:pb-[12rem] relative z-10
`;

const BgCurve = tw.img`
  absolute bottom-[0] md:bottom-0 md:right-0 md:left-0
  z-[-1]  md:w-full 
`;

const HeaderContent = tw.div`
    flex flex-col items-center justify-center mt-8 py-6 px-7 md:px-10
`;
const HeroImg = tw.img`
`;
const HeroText = tw.div`
    my-6 space-y-6 w-5/5  md:w-[30rem]
    h2 {
        md:text-2xl text-2xl text-center
    }
`;
const GetStarted = tw.button`
    bg-gradient-to-r from-cyan-1 to-blue-1 p-4 w-64 rounded-full
    cursor-pointer
    `;
export default Header;
