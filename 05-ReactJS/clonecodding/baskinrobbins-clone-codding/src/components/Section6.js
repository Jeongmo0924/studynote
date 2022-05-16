/**
 * @filename: Section6.js
 * @description: Content 파일 여섯번째 부분, SNS링크와 인스타그램 이미지 링크
 * @author: 박정모(oooperbjm@gmail.com)
 */


import React from 'react';
import styled from 'styled-components';
import {Sns, Facebook, Blog, Twitter, Instagram, Youtube, Text} from '../assets/img/image';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Section6Container = styled.div`
    height: 1025px;
    position: relative;
    .sns {
        display: block;
        margin: auto;
    }
    ul {
        display: flex;
        width: 400px;
        justify-content: space-around;
        margin: 40px auto;
        padding-bottom: 30px;
    }
    hr {
        width: 1200px;
        display: block;
        margin: auto;
        border: none;
        border-top: 1px solid gray;
    }
    .textwrap {
        position: absolute;
        top: 178px;
        left: 700px;
    }
    .instagram {
        padding-top: 20px;
        width: 1200px;
        margin: auto;
        ul {
            display: flex;
            width: 1200px;
            overflow: hidden;
            flex-wrap: wrap;
            li {
                margin: 1px 0;
                width: 238px;
                height: 238px;
                img {
                    width: 238px;
                    height: 238px;
                }
            }
        }
    }
`

const Section6 = () => {

    const [section6, setSection6] = React.useState([]);
    

    React.useEffect(() => {
        (async () => {

            try {
                const response = await axios.get('http://localhost:4000/section6')
                setSection6(response.data);
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패');
            }
        })();
    },[])

    return (
        <Section6Container>
            <div className='snsbtn'>
                <img src={Sns} alt='sns' className='sns' />
                <ul>
                    <li><Link to='/'><img src={Facebook} alt='facebook' /></Link></li>
                    <li><Link to='/'><img src={Twitter} alt='Twitter' /></Link></li>
                    <li><Link to='/'><img src={Blog} alt='Blog' /></Link></li>
                    <li><Link to='/'><img src={Instagram} alt='Instagram' /></Link></li>
                    <li><Link to='/'><img src={Youtube} alt='Youtube' /></Link></li>
                </ul>
            </div>
            <hr />
            <div className='textwrap'>
                <Link to='/'><img src={Text} alt='BASKINROBBINS INSTAGRAM' /></Link>
            </div>
            <div className='instagram'>
                <ul>
                {section6.map((v, i) => {
                    return(
                        <li key={i}>
                            <Link to='/'><img src={v.src} alt={v.alt} /></Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </Section6Container>
    );
};

export default Section6;