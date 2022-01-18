import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  margin-left: 0.6rem;
  height: 7rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ colour: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Shohag219" }}
        >
          <Github width={25} height={25} fill="currentColour" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ colour: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Shohag219" }}
        >
          <Twitter width={25} height={25} fill="currentColour" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ colour: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Shohag219" }}
        >
          <Facebook width={25} height={25} fill="currentColour" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ colour: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Shohag219" }}
        >
          <YouTube width={25} height={25} fill="currentColour" />
        </NavLink>
      </div>

      <Line />
    </Icons>
  );
};

export default SocialIcons;
