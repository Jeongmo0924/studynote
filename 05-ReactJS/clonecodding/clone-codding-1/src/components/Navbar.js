import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 0px;
  box-shadow: 0px 2px 3px #a1a1a1;
  position: fixed;
  background-color: #ffffff;
  z-index: 100;

  a {
    display: block;
    letter-spacing: 4px;
    cursor: pointer;
    float: left;
    height: 30px;
    padding: 10px 10px 0px 10px;
    /* margin-bottom: 10px; */
    font-size: 15px;
    line-height: 20px;

    &:hover {
      background-color: #27272747;
    }
    &: first-child {
      position: absolute;
      left: 20px;
    }
  }

  .right3 {
    position: absolute;
    right: 30px;
  }
  .right2 {
    position: absolute;
    right: 140px;
  }

  .right1 {
    position: absolute;
    right: 220px;
  }

  &:after {
    float: none;
    clear: both;
    display: block;
    content: "";
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="#"> Gourmet au Catering </Link>
      <Link to="#" className="right1">
        {" "}
        About{" "}
      </Link>
      <Link to="#" className="right2">
        {" "}
        Menu{" "}
      </Link>
      <Link to="#" className="right3">
        {" "}
        Contact{" "}
      </Link>
    </Nav>
  );
};

export default Navbar;
