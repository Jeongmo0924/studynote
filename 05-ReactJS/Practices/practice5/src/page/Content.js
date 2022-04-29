import React from "react";
import Main from "../component/Main";
import Side from "../component/Side";
import styled from "styled-components";

const Section = styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    .side {
        width: 360px;
        flex: none;
        border-left: 1px solid #d5d5d5;
        border-right: 1px solid #d5d5d5;
    }

    .container {
        padding: 20px;
    }

    .fakeimg {
        background-color: #aaa;
        width: auto;
        padding: 20px;
    }

    .main {
        flex: 0 1 auto;
        background-color: white;
        border-right: 1px solid #d5d5d5;
    }
`;

const Content = () => {
    return (
        <Section className="content">
            <Side />
            <Main />
        </Section>
    );
};

export default Content;
