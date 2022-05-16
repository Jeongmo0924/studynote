/**
 * @filename: Section1.js
 * @description: Content 파일 첫번째 부분
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import Section1Img from "../assets/img/1714824579.jpg";

const Section1Container = styled.div`
    width: 100%;
    /* background: url(${Section1Img}) repeat-x;
    background-position: center center; */
    background-color: #ffd826;
    height: fit-content;
    display: block;
    margin: auto;
    cursor: pointer;
    overflow: hidden;

    .img1 {
        width: 100%;
        transition: all 0.5s;
        height: 886px;
        display: block;
        margin: auto;
        position: absolute;
        top: 190px;
        z-index: 10000000;
    }
    .hide {
        height: 150px;
        display: none;
        transition: all 0.5s;
    }
`;

const Section1 = () => {
    return (
        <Section1Container>
            <img src={Section1Img} alt="h" />
        </Section1Container>
    );
};

export default Section1;
