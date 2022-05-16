/**
 * @filename: Content.js
 * @description: 헤더와 푸터를 제외한 실질적 컨텐츠 부분
 * @author: 박정모(oooperbjm@gmail.com)
 */


import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import styled from 'styled-components';

const ContentContainer = styled.div`

`

const Content = () => {


    return (
        <ContentContainer>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </ContentContainer>
    );
};

export default Content;