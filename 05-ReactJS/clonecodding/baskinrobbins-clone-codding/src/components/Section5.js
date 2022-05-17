/**
 * @filename: Section5.js
 * @description: Content 파일 다섯번째 부분, 매장찾기 & 해피오더, 배달 링크
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import { Store, Find, Order, Delivery } from '../assets/img/image';
import {Link} from 'react-router-dom';

const Section5Container = styled.div`
    height: 547px;
    display: flex;
    margin: auto;
    width: 1200px;
    div {
        width: 600px;
    }
    .content1 {
        margin: auto;
    }
    .content2 {
        margin: auto;
        }
    .name {
            margin: auto;
            display: block;
            padding-bottom: 60px;
    }
`

const Section5 = () => {
    return (
        <Section5Container>
            <div className='content1'>
                <img src={Store} alt='BR STORE' className='name'/>
                <Link to='/'><img src={Find} alt='Find Store' /></Link>
            </div>
            <div className='content2'>
                <img src={Order} alt='HAPPY ORDER & DELIVERY' className='name' />
                <Link to='/'><img src={Delivery} alt='Delivery Service' /></Link>
            </div>
        </Section5Container>
    );
};

export default Section5;