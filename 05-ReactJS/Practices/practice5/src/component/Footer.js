import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 20px;
    text-align: center;
    background: #ddd;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <h2>Footer</h2>
        </StyledFooter>
    );
};

export default Footer;
