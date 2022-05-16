import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  font-family: "나눔바른고딕", "나눔고딕", "NanumGothic", "돋움", "Dotum", sans-serif;
  color: #483834;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing:-.05em;
  a{
    text-decoration: none;
    color: #483834;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
