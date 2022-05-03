import React from 'react';
import styled from 'styled-components';

const Footercontainer = styled.div`
  margin-top: 10px;
    height: 90px;
  background-color:black;
  address {
    line-height: 90px;
    text-align: center;
    color: white;
    span {
      text-decoration: underline;
      cursor: pointer;
      color: white;
    }
  }
`

const Footer = () => {
    return (
        <Footercontainer>
            <address>Powered by <span>w3.css</span></address>
        </Footercontainer>
    );
};

export default Footer;