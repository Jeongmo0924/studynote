import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/img/logo192.png';

const Meta = (props) => {
    console.debug(props.title);
    return (
        <Helmet>
            <title>{props.title} ::: React 연습문제</title>
            <link rel='shortcut icon' href={props.image} type="image/png" />
            <link rel='icon' href={logo} type="image/png" />
        </Helmet>
    )
};

Meta.defaultProps = {
    title: '',
};

export default Meta;