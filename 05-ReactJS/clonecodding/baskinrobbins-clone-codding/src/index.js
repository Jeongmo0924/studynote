import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = () => {
    <HelmetProvider>
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.3.1/index.min.js"></script>
            <script src="notice.js"></script>
            <script>Notice.init("박정모", "./about.pdf");</script>
        </Helmet>
    </HelmetProvider>;
};

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
    <>
        <Meta />
        <GlobalStyles />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </>
);
