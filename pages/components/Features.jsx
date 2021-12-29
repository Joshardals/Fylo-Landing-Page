import React from "react";
import tw from "tailwind-styled-components";
import Fade from "react-reveal/Fade";

const Features = () => {
  return (
    <Wrapper>
      <FeaturesContainer>
        <Fade left>
          <Feature>
            <FeatureImg
              src="/icon-access-anywhere.svg"
              alt="icon-access-anywhere"
            />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Feature>
        </Fade>
        <Fade right>
          <Feature>
            <FeatureImg src="/icon-security.svg" alt="icon-security" />
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </Feature>
        </Fade>
        <Fade left>
          <Feature>
            <FeatureImg
              src="/icon-collaboration.svg"
              alt="icon-collaboration"
            />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </Feature>
        </Fade>
        <Fade right>
          <Feature>
            <FeatureImg src="/icon-any-file.svg" alt="any-file" />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </Feature>
        </Fade>
      </FeaturesContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`
`;
const FeaturesContainer = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-20 px-10
`;
const Feature = tw.div`
  w-full flex flex-col justify-center items-center text-center space-y-4 w-5/5  md:w-[25rem] mx-auto
`;
const FeatureImg = tw.img`
  h-16
`;
export default Features;
