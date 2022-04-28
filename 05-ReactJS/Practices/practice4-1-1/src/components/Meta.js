import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
    return (
        <Helmet>
            <title>{props.title} ::: React 연습문제</title>
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'React 연습문제'
}

export default Meta;