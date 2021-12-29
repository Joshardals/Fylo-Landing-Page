import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Features from "./Features";
import Products from "./Products";
import EarlyAccess from "./EarlyAccess";
import Footer from "./Footer";
import Testimonial from "./TestimonialContainer";

const Body = () => {
  return (
    <Wrapper>
      <BodyContent>
        <Features />
        <Products />
        <Testimonial />
        {/* <EarlyAccess /> */}
      </BodyContent>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex flex-col bg-dark-blue-2 h-auto space-y-[10rem] md:space-y-[15rem]
`;
const BodyContent = tw.div`
   space-y-[10rem] md:space-y-[15rem] p-7
`;
export default Body;
