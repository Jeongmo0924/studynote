import React from "react";
import Hamburger from "../assets/img/hamburger.jpg";
import styled from "styled-components";

const Headercontainer = styled.header`
  position: relative;
  width: 1600px;
  margin: auto;

  img {
    display: block;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: -1;
  }
  h1 {
    display: block;
    font-size: 36px;
    color: #505050;
    position: absolute;
    bottom: 60px;
    left: 40px;
    letter-spacing: 5px;
  }
  &:after {
    content: "";
    display: block;
    float: none;
    clear: both;
  }
`;

const Header = () => {
  return (
    <Headercontainer>
      <img src={Hamburger} alt="Le Catering" />
      <h1>Le Catering</h1>
    </Headercontainer>
  );
};

export default Header;
