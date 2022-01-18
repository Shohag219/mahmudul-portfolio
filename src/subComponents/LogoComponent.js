import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  colour: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;
  position: fixed
  top: 2rem;
  left:2rem;
  z-index:3;
`;

const LogoComponent = () => {
  return <Logo>MH</Logo>;
};

export default LogoComponent;
