/**
 * @filename: Header.js
 * @description: Header 부분
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import styled from "styled-components";
// import 부분이 너무 길어져서 하나의 파일에 이미지링크 통합
import { Img, Search, Logo, Gnb, Happypoint, Pika } from "../assets/img/image";
import { Link } from "react-router-dom";


const HeaderContainer = styled.div`
    width: 100%;
    height: 182px;
    background: url(${Img});
    border-bottom: 1px solid #e2d9d6;
    .header_top {
        width: 1200px;
        display: block;
        margin: auto;
        line-height: 136px;
        ul {
            margin-top: 11px;
            float: left;
            display: flex;
            li {
                padding-right: 10px;
                img {
                    width: 100%;
                }
            }
        }
        .header_logo {
            float: left;
            position: relative;
            left: 330px;
            margin-top: 22px;
            background: url(${Logo});
            height: 92px;
            width: 92px;
        }
        .header_menu {
            float: right;
            a {
                text-decoration: none;
                color: black;
                font-size: 12px;
                line-height: 54px;
                padding: 0 10px;
                letter-spacing: -0.1em;
                img {
                    vertical-align: middle;
                }
            }
        }
        &:after {
            content: "";
            float: none;
            display: block;
            clear: both;
        }
    }
    .header_nav {
        width: 1200px;
        margin: auto;
        display: flex;
        position: relative;
        top: -10px;
        text-indent: -9999px;
        .login {
            display: block;
            height: 46px;
            width: 40px;
            background: url(${Gnb}) no-repeat;
            cursor: pointer;
        }
        .join {
            position: relative;
            left: 40px;
            height: 46px;
            width: 36px;
            background: url(${Gnb});
            background-position: -95px 0;
            cursor: pointer;
        }
        .nav {
            position: relative;
            left: 140px;
            height: 46px;
            width: 980px;
            background: url(${Gnb});
            background-position: -125px 0;
            cursor: pointer;
        }
    }
    .open {
        border-top: 1px solid black;
        width: 100%;
        display: block;
        height: 0px;
        background-color: #ffffff;
        transition: height 0.5s;
        overflow: hidden;
        position: relative;
        top: -10px;
        z-index: 99999;
        ul {
            display: flex;
            width: 1200px;
            margin: auto;
            li {
                .happy-point {
                    padding-top: 60px;
                }
                ul {
                    position: relative;
                    left: 50px;
                    display: flex;
                    flex-direction: column;
                    width: 158px;
                    padding-top: 35px;
                    li {
                        text-align: center;
                        line-height: 35px;
                        font-size: 14px;
                        a:hover {
                            color: #e01783;
                        }
                    }
                }
            }
        }
    }
`;

const Header = (props) => {
    const open = React.useRef();
    const openmenu = React.useRef();

    const OnMouseover = () => {
        openmenu.current.style.height = '276px';
    }

    const OnMouseout = () => {
        openmenu.current.style.height = '0px'
    }

    return (
        <HeaderContainer>
            <div className="header_top">
                <ul>
                    {props.data.map((v, i) => {
                        return (
                            <li key={i}>
                                <Link to="/" key={i}>
                                    <img src={v.img} alt={v.icon} key={i} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="header_logo"></div>
                <div className="header_menu">
                    <Link to="/">고객센터</Link>
                    <Link to="/">CONTACT US</Link>
                    <Link to="/">
                        <img src={Search} alt={Search} />
                    </Link>
                </div>
            </div>
            <div className="header_nav" >
                <div className="login">login</div>
                <div className="join">join</div>
                <div className="nav" ref={open} onMouseOver={OnMouseover} onMouseLeave={OnMouseout}>flavor of the month, menu, 영양성분 및 알레르기, event, store, about</div>
            </div>
            <div className="open" ref={openmenu} onMouseOver={OnMouseover} onMouseLeave={OnMouseout}>
                <ul>
                    <li>
                        <img src={Happypoint} alt="happypoint" className="happy-point" />
                    </li>
                    <li>
                        <Link to="/">
                            <img src={Pika} alt="pikachu" />
                        </Link>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link to="/">아이스크림</Link>
                            </li>
                            <li>
                                <Link to="/">아이스크림케이크</Link>
                            </li>
                            <li>
                                <Link to="/">음료</Link>
                            </li>
                            <li>
                                <Link to="/">커피</Link>
                            </li>
                            <li>
                                <Link to="/">디저트</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link to="/">아이스크림</Link>
                            </li>
                            <li>
                                <Link to="/">음료</Link>
                            </li>
                            <li>
                                <Link to="/">커피</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link to="/">진행중이벤트</Link>
                            </li>
                            <li>
                                <Link to="/">당첨자발표</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link to="/">매장찾기</Link>
                            </li>
                            <li>
                                <Link to="/">고객센터</Link>
                            </li>
                            <li>
                                <Link to="/">단체주문</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link to="/">공지사항</Link>
                            </li>
                            <li>
                                <Link to="/">보도자료</Link>
                            </li>
                            <li>
                                <Link to="/">채용정보</Link>
                            </li>
                            <li>
                                <Link to="/">점포개설문의</Link>
                            </li>
                            <li>
                                <Link to="/">CONTACT US</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </HeaderContainer>
    );
};

export default Header;
