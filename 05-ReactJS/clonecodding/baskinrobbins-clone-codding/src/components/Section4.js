/**
 * @filename: Section4.js
 * @description: Content 파일 네번째 부분, 간단한 설명을 포함한 메뉴 이미지에 링크
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Bg, Brmenu, Menu } from "../assets/img/image";

const Section4Container = styled.div`
    height: 1157px;
    background: url(${Bg});
    background-position: -400px center;
    position: relative;
    .brmenu {
        position: relative;
        top: -823px;
        left: 800px;
        z-index: 100;
    }
    .menu {
        position: relative;
        top: 150px;
        left: 280px;
    }

    a {
        display: block;
    }
        .icecream {
            width: 395px;
            height: 302px;
            position: absolute;
            top: 175px;
            left: 580px;
        }
        .icecream-cake {
            width: 276px;
            height: 472px;
            position: absolute;
            top: 180px;
            left: 1010px;
        }

        .coffee {
            width: 329px;
            height: 292px;
            position: absolute;
            top: 515px;
            left: 645px;
        }

        .beverage {
            width: 230px;
            height: 366px;
            position: absolute;
            top: 515px;
            left: 377px;
        }

        .dessert {
            width: 329px;
            height: 177px;
            position: absolute;
            top: 845px;
            left: 645px;
        }

        .gift {
            width: 276px;
            height: 183px;
            position: absolute;
            top: 685px;
            left: 1012px;
        }
    
`;
const Section4 = () => {
    return (
        <Section4Container>
            <img className="brmenu" src={Brmenu} alt="BR MENU" />
            {/* 메뉴이미지가 하나로 통합되어있기에 각 부분에 position: absolute 적용한 <a>태그를 덮어씌움 */}
            <img className="menu" src={Menu} alt="Menus" />
            <Link to="/" className="icecream" />
            <Link to="/" className="icecream-cake" />
            <Link to="/" className="coffee" />
            <Link to="/" className="beverage" />
            <Link to="/" className="dessert" />
            <Link to="/" className="gift" />
        </Section4Container>
    );
};

export default Section4;
