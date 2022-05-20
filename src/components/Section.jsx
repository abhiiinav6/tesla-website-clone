import React from "react";
import Fade from "react-reveal/Fade";

import styled from "styled-components";

export default function Section({
  bgimg,
  title,
  description,
  leftButtonText,
  rightButtonText
}) {
  return (
    <Wrap img={bgimg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonsGroup>
          <Fade bottom>
            <LeftButton>{leftButtonText}</LeftButton>
          </Fade>
          <Fade bottom>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </Fade>
        </ButtonsGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}
const Wrap = styled.div`
  color: black;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const Buttons = styled.div``;

const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftButton = styled.button`
  width: 264px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #171a20;
  opacity: 80%;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 2px inset;
  line-height: 20px;
  font-size: 14px;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  background-color: white;
  opacity: 60%;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateDown infinite 1.5s;
`;
