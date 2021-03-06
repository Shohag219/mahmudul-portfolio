import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-item: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    colour: inherit;
  }

  ${mediaQueries(40)`
    width: 2rem;
    height: 2rem;
     svg{
       width:20px;
       height:20px;
     }

 `};
`;
const HomeButton = () => {
  return (
    <Home>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill={"currentColour"} />
      </NavLink>
    </Home>
  );
};

export default HomeButton;
