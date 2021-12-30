import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Roll from "react-reveal/Roll";

const TestimonialContainer = () => {
  return (
    <Wrapper>
      <Testimonials>
        <Roll left>
          <Testimonial1>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <TestimonialProfile>
              <TestimonialImg src="/profile-1.jpg" alt="Satish Patel" />
              <TestimonialText>
                <p>Satish Patel</p>
                <p>Founder & CEO, Huddle.</p>
              </TestimonialText>
            </TestimonialProfile>
          </Testimonial1>
        </Roll>
        <Roll botttom>
          <Testimonial>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <TestimonialProfile>
              <TestimonialImg src="/profile-2.jpg" alt="Bruce McKenzie" />
              <TestimonialText>
                <p>Bruce Mckenzie</p>
                <p>Founder & CEO, Huddle.</p>
              </TestimonialText>
            </TestimonialProfile>
          </Testimonial>
        </Roll>
        <Roll right>
          <Testimonial>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <TestimonialProfile>
              <TestimonialImg src="/profile-3.jpg" alt="Iva Boyd" />
              <TestimonialText>
                <p>Iva Boyd</p>
                <p>Founder & CEO, Huddle.</p>
              </TestimonialText>
            </TestimonialProfile>
          </Testimonial>
        </Roll>
      </Testimonials>
    </Wrapper>
  );
};
const Wrapper = tw.div``;
const Testimonials = tw.div`
  px-7 grid gap-20 grid-cols-1 md:grid-cols-3 relative z-10 pb-[10rem]
`;
const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(219, 30%, 18%);
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 5px 5px 0px 5px hsl(217, 28%, 15%);
`;
const Testimonial1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: hsl(219, 30%, 18%);
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 5px 5px 0px 5px hsl(217, 28%, 15%);

  &:before {
    content: "";
    position: absolute;
    top: -2.5rem;
    left: -0.5rem;
    height: 100%;
    width: 100%;
    background: url("/bg-quotes.png") no-repeat;
    z-index: -1;
  }
`;
const TestimonialProfile = tw.div`
  flex mt-6
`;
const TestimonialImg = tw.img`
  h-10 w-10 rounded-full 
`;
const TestimonialText = styled.div`
  margin-left: 1rem;

  p:first-child {
    font-weight: 700;
  }

  p:last-child {
    font-size: 0.75rem;
    line-height: 1rem;
    margin-top: 0.3rem;
  }
`;
export default TestimonialContainer;
