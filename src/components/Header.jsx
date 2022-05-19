import React from "react";
import styled from "styled-components";

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
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
        </nav>
      </NavBar>
    </Container>
  );
}

const Container = styled.div`
  height: 56px;
  background: transparent;
  position: fixed;
  padding: 0 32px;
  display: flex;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  line-height: 40px;
`;

const NavBar = styled.div``;
