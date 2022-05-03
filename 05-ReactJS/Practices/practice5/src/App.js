/**
 *  @filename: App.js
 *  @description: <head>태그 적용된 메인 페이지
 *  @author: Park J.M (regettog@gmail.com)
 * 
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from "react";

// 컴포넌트 객체
import Header from "./component/Header";
import Content from "./page/Content";
import Footer from "./component/Footer";

// SEO처리 기능 패키지
import { Helmet } from "react-helmet";

// css적용
import './assets/css/common.css';

/**
 * SEO 처리 컴포넌트
 * @returns {JSX.Element}
 */
const Meta = () => {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet" />
            {/* <style>
                {`
                *{
                    font-family: 'Noto Sans KR';
                }
                
                body {
                    margin: 0;
                    padding: 0;
                }
                `}
            </style> */}
        </Helmet>
    );
};

const App = () => {
    return (
        <div className="App">
            <Meta />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
