import React from "react";
import logo from "../assets/img/logo.webp";
import "../assets/js/header";
import language from "../assets/img/btn_topmenu_language.png";
import channel from "../assets/img/btn_topmenu_Channelh.webp";
import search from "../assets/img/btn_topmenu_search.png"

const HeaderSub = () => {
    return (
        <div className="header-wrap">
            <div className="header-wrap__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-wrap__menubar">
                <ul>
                    <li>
                        <a href="/" className="header-wrap__menubar-menu">
                            브랜드
                        </a>
                    </li>
                    <li>
                        <a href="/" className="header-wrap__menubar-menu">
                            아이오닉
                        </a>
                    </li>
                    <li>
                        <a href="/" className="header-wrap__menubar-menu">
                            라이프스타일
                        </a>
                    </li>
                    <li>
                        <a href="/" className="header-wrap__menubar-menu">
                            모델<span className="pointout"></span>
                        </a>
                    </li>
                    <li>
                        <p className="header-wrap__menubar-menu" id="introduce">
                            회사소개
                        </p>
                    </li>
                </ul>
            </div>
            <div className="header-wrap__menubar-2">
                <ul>
                    <li>
                        <a href="/">
                            <img src={language} alt="language" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={channel} alt="channel" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={search} alt="search" />
                        </a>
                    </li>
                    <li>
                        <a href="/" id="language">
                            Language
                            <span id="arrow" class="clickedarrow">
                                &gt;
                            </span>
                        </a>
                        <div id="hiddenlang" class="hide">
                            <ul>
                                <li>
                                    <a href="/" class="lang-opt">
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="lang-opt selected">
                                        한국어
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderSub;
