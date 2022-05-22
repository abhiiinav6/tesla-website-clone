import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <BottomPart>
      <Text>
        Made with <Heart src="/images/red-heart.svg" alt="" /> by Abhinav{" "}
      </Text>
      <Icons>
        <a href="https://twitter.com/_Abhinav6">
          <FaTwitter />
        </a>
        <a href="https://github.com/Abhinav-6">
          <FaGithub />
        </a>
      </Icons>
    </BottomPart>
  );
}

const BottomPart = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Text = styled.div`
  color: #393c41;
`;

const Heart = styled.img`
  width: 20px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
`;
