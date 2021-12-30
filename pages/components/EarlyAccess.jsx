import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

const EarlyAccess = () => {
  const [email, setEmail] = useState(false);
  const [earlyAccess, setEarlyAccess] = useState("");

  useEffect(() => {}, [earlyAccess]);

  return (
    <Wrapper>
      <FormContainer>
        <Bounce>
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <FormInputContainer>
            <EmailInput
              type="email"
              placeholder="email@example.com"
              value={earlyAccess}
              onChange={(e) => setEarlyAccess(e.target.value)}
              required
            />
            <Submit>Get started for free</Submit>
          </FormInputContainer>
        </Bounce>
        {email ? (
          <Bounce>
            <ErrorMessage>Please enter a valid email address</ErrorMessage>
          </Bounce>
        ) : null}
      </FormContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`
    flex items-center justify-center absolute z-10 right-0 
    left-0 top-[-15rem] md:top-[-12rem] lg:top-[-12rem] p-7 
`;
const FormContainer = tw.div`
    h-auto bg-dark-blue-1 text-center flex flex-col space-y-6  w-[60rem] p-10 md:px-20 md:py-10
    shadow-lg
    h2 {
        md:text-2xl text-xl
    }
    p {
      w-full
    }
`;
const FormInputContainer = tw.div`
    flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 
`;
const EmailInput = tw.input`
    rounded-full outline-none w-full md:flex-1 text-[14px] px-10 text-black p-4
`;
const Submit = tw.button`
    text-[14px] capitalize bg-gradient-to-r from-cyan-1 to-blue-1 w-full md:w-64 p-4 rounded-full
    cursor-pointer
`;
const ErrorMessage = tw.div`
    text-left px-10 text-light-red text-[14px] 
`;
export default EarlyAccess;
