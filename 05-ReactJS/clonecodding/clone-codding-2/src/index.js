import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Meta from './Meta';
import GlobalStyles from "./GlobalStyles";
import {Reset} from 'styled-reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Reset />
        <GlobalStyles />
        <Meta />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </>
);
