import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <LogoImg src="logo.svg" alt="logo image" />
      <NavbarContainer>
        <NavLink href="#">
          <h4>Features</h4>
        </NavLink>
        <NavLink href="#">
          <h4>Team</h4>
        </NavLink>
        <NavLink href="#">
          <h4>Sign In</h4>
        </NavLink>
      </NavbarContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`
    flex items-center justify-between w-full p-7 md:p-10
`;
const LogoImg = tw.img`
    h-6 
`;
const NavbarContainer = tw.div`
    flex justify-between
`;
// const NavLink = tw.div`
//    md:px-6 px-4 font-light md:font-normal text-xs md:text-base
//    cursor-pointer hover:text-white-1
// `;
const NavLink = styled.a`
  font-weight: 300;
  cursor: pointer;
  font-size: 0.875rem;
  margin-right: 1rem;
  position: relative;
  transition: 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: rgba(255, 255, 255);
    width: 0%;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    &:before {
      opacity: 1;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
  }
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
  }
`;
export default Navbar;
