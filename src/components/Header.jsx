import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
export default function Header() {
  const [burgerNavBarOpen, setBurgerNavBarOpen] = useState(false);
  return (
    <Container>
      <Logo>
        <a href="#">
          <LogoImg src="/images/logo.svg" alt="" />
        </a>
      </Logo>
      <NavBar>
        <nav>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </nav>
      </NavBar>
      <RightMenu>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <Menu onClick={() => setBurgerNavBarOpen(true)}>
          <li>
            <a href="#">Menu</a>
          </li>
        </Menu>
      </RightMenu>

      <BurgerNavBar open={burgerNavBarOpen}>
        <CloseIcon onClick={() => setBurgerNavBarOpen(false)}>
          <AiOutlineClose />
        </CloseIcon>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#"></a>Used Inventory
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Powerwell</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Find us</a>Utilities
        </li>
        <li>
          <a href="#"></a>Support
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </BurgerNavBar>
    </Container>
  );
}

const Container = styled.div`
  height: 56px;
  width: 100%;
  background: transparent;
  position: fixed;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  line-height: 40px;
`;

const NavBar = styled.div`
  font-family: "Roboto Flex", sans-serif;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
  gap: 5px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 30px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 12px;
    transition: all 0.5s;
  }
  li:hover {
    background-color: rgba(20, 21, 21, 0.27);
  }
`;

const RightMenu = styled(NavBar)`
  display: flex;

  @media (max-width: 720px) {
    li {
      display: none;
    }
  }
`;

const Menu = styled(NavBar)`
  @media (min-width: 224px) {
    display: flex;
    li {
      display: flex;
    }
  }
  /* display: flex; */
`;

const BurgerNavBar = styled.div`
  transition: all 0.5s ease;
  padding: 2rem 2.1rem;
  transform: ${(props) => (props.open ? `translateX(0)` : `translateX(100%)`)};
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 100vh;
  position: fixed;
  background-color: white;
  right: 0;
  align-items: flex-start;
  z-index: 9999;
  gap: 0.5rem;
  li {
    text-align: left;
    width: 100%;
    height: 30px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-family: "Roboto Flex", sans-serif;
    font-size: 14px;
    font-weight: 700;
    transition: all 0.5s;
  }
  li:hover {
    background-color: rgba(20, 21, 11, 0.11);
  }
`;

const CloseIcon = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1.5rem;
  cursor: pointer;
`;
