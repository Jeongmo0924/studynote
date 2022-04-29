import React from "react";
import Header from "./component/Header";
import Content from "./page/Content";
import Footer from "./component/Footer";
import { Helmet } from "react-helmet";
import './assets/css/common.css';

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
