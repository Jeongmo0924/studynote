/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * SEO 처리를 정의한 객체
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title> Clone Codding 2::: by React </title>
                <meta charSet="utf-8" />
                {/* SEO 태그 */}
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.image} />
                <meta property="og:url" content={props.url} />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: "React Example",
    description: "React.js 예제 입니다.",
    keywords: "React",
    author: "박정모",
    url: window.location.href,
};

export default Meta;
