import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const Products = () => {
  return (
    <Wrapper>
      <ProductiveContainer>
        <Zoom left>
          <ProductiveImg
            src="/illustration-stay-productive.png"
            alt="illustration-stay-productive"
          />
        </Zoom>
        <Zoom right>
          <Product>
            <ProductHeader>
              <h2>Stay productive, wherever you are</h2>
            </ProductHeader>
            <ProductBody>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all your file storage needs.
                <br /> <br />
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </ProductBody>
            <ProductLink>
              See how Fylo works
              <ProductLinkImg src="/icon-arrow.svg" alt="icon-arrow" />
            </ProductLink>
          </Product>
        </Zoom>
      </ProductiveContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div``;
const ProductiveContainer = tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-20 
`;
const ProductiveImg = tw.img`
  h-full w-full px-7
`;
const Product = tw.div`
  space-y-4 flex flex-col justify-center px-7

`;
const ProductHeader = tw.div`
  w-full md:w-[19rem]
   h2 {
    md:text-2xl text-xl
  }
`;
const ProductBody = tw.div`
  text-left
`;
const ProductLink = styled.div`
  color: hsl(176, 68%, 64%);
  display: flex;
  align-items: center;
  width: 12rem;
  position: relative;
  right: 0;
  left: 0;

  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    width: 92%;
    background-color: hsl(176, 68%, 64%);
  }
`;
const ProductLinkImg = tw.img`
  ml-2 h-6 w-6
`;
export default Products;
