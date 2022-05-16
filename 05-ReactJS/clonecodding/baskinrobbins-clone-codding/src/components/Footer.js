/**
 * @filename: Footer.js
 * @description: 최하단 Footer 부분
 * @author: 박정모(oooperbjm@gmail.com)
 */


import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hp, Hm, Hs, Nt, Ccm, Ksa, Footerlogo, Pointer } from "../assets/img/image";

const FooterContainer = styled.div`
    height: 390.5px;
    width: 100%;
    margin-top: 120px;
    border-top: 1px solid orange;
    .policy {
        width: 1200px;
        margin: auto;
        padding: 10px 0;
        ul {
            display: flex;
            width: fit-content;
            margin: auto;
            li {
                margin: 20px 25px;
                a {
                    font-size: 14px;
                    letter-spacing: -0.08em;
                }
            }
        }
    }
    .brand_family {
        background-color: #f9f8f7;
        height: 75px;
        ul {
            width: fit-content;
            display: flex;
            margin: auto;
            li {
                margin: 23px 25px;
                select {
                    padding: 7px 10px;
                    margin-left: 30px;
                    font-size: 11px;
                    width: 150px;
                    border-radius: 5px;
                    border: 1px solid #b1ab9f;
                    color: #b1ab9f;
                    box-shadow: 2px 2px #d0cecc;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background: url(${Pointer}) no-repeat 97% 50%/15px auto;
                    background-color: white;
                    appearance: none;
                    &:focus {
                        outline: none;
                    }
                }
                img {
                    height: 31px;
                }
            }
        }
    }
    .logo {
        width: fit-content;
        margin: auto;
        padding: 40px 0 30px 0;
    }
    .info {
        width: fit-content;
        margin: auto;
        p {
            font-size: 11px;
            text-align: center;
            letter-spacing: -.05em;
            padding-bottom: 10px;
            span {
                margin: 0 7px;
            }
        }
    }
    footer {
        padding-top: 20px;
        width: fit-content;
        margin: auto;
        font-size: 11px;
        letter-spacing: -.05em;
        color: #b1ab9f;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="policy">
                <ul>
                    <li>
                        <Link to="/">점포개설문의</Link>
                    </li>
                    <li>
                        <Link to="/">채용문의</Link>
                    </li>
                    <li>
                        <Link to="/">윤리신고센터</Link>
                    </li>
                    <li>
                        <Link to="/">이용약관</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span>개인정보처리방침</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">영상정보처리기기운영관리방침</Link>
                    </li>
                    <li>
                        <Link to="/">거래희망회사 사전등록</Link>
                    </li>
                </ul>
            </div>
            <div className="brand_family">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={Hp} alt="happy point" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={Hm} alt="happy market" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={Hs} alt="happy story" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={Nt} alt="Norton" />
                        </Link>&nbsp;&nbsp;

                        <Link to="/">
                            <img src={Ccm} alt="소비자 중심" />
                        </Link>&nbsp;&nbsp;

                        <Link to="/">
                            <img src={Ksa} alt="ksa" />
                        </Link>
                    </li>
                    <li>
                        <select>
                            <option value="familysite">
                                FAMILY SITE
                            </option>
                            <option value="던킨도너츠">던킨도너츠</option>
                            <option value="파리바게트">파리바게트</option>
                            <option value="삼립">삼립</option>
                            <option value="파스쿠찌">파스쿠찌</option>
                            <option value="해피포인트 카드">해피포인트 카드</option>
                            <option value="BR코리아">BR코리아</option>
                            <option value="SPC MAGAZINE">SPC MAGAZINE</option>
                            <option value="SPC그룹사이트">SPC그룹사이트</option>
                            <option value="배스킨스쿨">배스킨스쿨</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src={Footerlogo} alt="baskin robbins" />
            </div>
            <div className='info'>
                <p>
                    <span>사업자 등록번호:303-81-09535</span>
                    <span>비알코리아(주) 대표이사 도세호</span>
                    <span>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</span>
                </p>
                <p>
                    TEL: 080-555-3131
                    <span>개인정보관리책임자: 김경우</span>
                </p>
            </div>
            <footer>Copyright&copy;2016BRKOREA Company.All Rights Reserved.</footer>
        </FooterContainer>
    );
};

export default Footer;
