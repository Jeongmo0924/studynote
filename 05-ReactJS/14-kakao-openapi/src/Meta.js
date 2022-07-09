import React, { memo } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import sample from './assets/img/sample.jpg';

const Meta = memo((props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name = 'description' content = {props.description} />
            <meta name = 'keywords' content = {props.keywords} />
            <meta name = 'author' content = {props.author} />
            <meta property = 'og:type' content = 'website' />
            <meta property = 'og:title' content = {props.title} />
            <meta property = 'og:description' content = {props.description} />
            <meta property = 'og:image' content = {props.image} />
            <meta property = 'og:url' content = {props.url} />

            <link rel='shortcut icon' href={props.image} type="image/png" />
            <link rel='icon' href={props.image} type="image/png" />
            </Helmet>            
        </HelmetProvider>
    );
});


Meta.defaultProps = {
    title: 'React OpenAPI 연동',
    description: 'React.js 예제 입니다.',
    keywords : 'React',
    author : '호쌤',
    image: sample,
    url: window.location.href,
};

export default Meta;