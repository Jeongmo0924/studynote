/**
 * @filename: App.js
 * @description: 컴포넌트 출력 페이지
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F5F6F7;
  }
    h3, button, input, select, table, textarea, span, a {
      font-family: Dotum,'돋움',Helvetica,sans-serif;
    }

    label {
      cursor: pointer;
    }
    
    h3 {
      font-size: 14px;
      font-weight: 700;
      margin: 0;
    }
    
  // input박스 입력시 자동으로 배경색상 지정되는 기능 해제 
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
`;

const App = () => {
    return (
        <div style={{ width: "100%" }}>
            <GlobalStyles />
            <Header />
            <Form />
            <Footer />
        </div>
    );
};

export default App;
