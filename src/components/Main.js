import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
  text-decoration: none;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 41%;
  left: calc(0.2rem + 2vw);
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
To{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

// const DarkDiv = styled.div`
//   position: absolute;
//   top: 0;
//   background-color: #000;
//   bottom: 0;
//   right: 50%;
//   weight: ${(props) => (props.click ? "50%" : "0%")};
//   height: ${(props) => (props.click ? "100%" : "0%")};
//   z-index: 1;
// `;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  weight: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
`;

function Main() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv />
      <Container>
        <HomeButton />
        <LogoComponent />
        <SocialIcons />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 160}
            height={click ? 120 : 160}
            fill="currentColor"
          />
          <span>Click here</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:mahmudulhasanshohag219@gmail.com" }}
        >
          <h2>Say hi..</h2>
        </Contact>

        <BLOG to="/blog">
          <h2>Blog</h2>
        </BLOG>

        <WORK to="/work">
          <h2>Work</h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <h2>About.</h2>
          </ABOUT>

          <SKILLS to="/skills">
            <h2>My Skills.</h2>
          </SKILLS>
        </BottomBar>
      </Container>
    </MainContainer>
  );
}

export default Main;
