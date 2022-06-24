import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import sample from './assets/img/reactjs.png';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property = 'og:image' content = {props.image} />
                <meta property="og:url" content={props.url} />

                <link rel='shortcut icon' href={props.image} type="image/png" />
                <link rel='icon' href={props.image} type="image/png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet" />

            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: "React Exam",
    description: "React.js 시험 답안입니다.",
    keywords: "React",
    author: "박정모(oooperbjm@gmail.com)",
    img: sample,
    url: window.location.href,
};

export default Meta;