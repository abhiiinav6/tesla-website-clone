import React from "react";
import styled from "styled-components";
import "../styles.css";
export default function Header() {
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
        <li className="hiddenOnMobile">
          <a href="#">Shop</a>
        </li>
        <li className="hiddenOnMobile">
          <a href="#">Account</a>
        </li>
        <Menu>
          <li>
            <a href="#">Menu</a>
          </li>
        </Menu>
      </RightMenu>
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
  /* margin-left: auto; */
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
