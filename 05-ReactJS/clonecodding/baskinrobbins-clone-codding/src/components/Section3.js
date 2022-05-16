/**
 * @filename: Section3.js
 * @description: Content 파일 세번째 부분, 슬라이더 이미지를 이용한 이벤트 링크
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { Event } from "../assets/img/image";
// Section2에서 slick을 이용해보았기에 Section3에서는 직접 슬라이더를 구현해봄

const Section3Container = styled.div`
    width: 1200px;
    height: 721px;
    margin: auto;
    padding-top: 85px;
    .event {
        display: block;
        margin: auto;
        width: 90px;
    }
    .list {
        width: 1200px;
        margin: auto;
        overflow: hidden;
        position: relative;
    }
    ul {
        display: flex;
        flex-direction: row;
        margin-top: 60px;
        width: 1200px;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        left: 0;
        transition: left 0.2s;
        li {
            width: 288px;
            margin: 0 7px;
            .image-wrap {
                width: 100%;
            }
            .text {
                padding-top: 20px;
                h3 {
                    font-size: 16px;
                    letter-spacing: -0.1em;
                    padding: 8px 0;
                    line-height: 20px;
                }
                p {
                    font-size: 12px;
                    letter-spacing: -0.1em;
                    margin: 11px 0;
                    color: #948780;
                }
            }
        }
    }

    h1 {
        font-size: 80px;
        line-height: 10px;
        text-align: center;
        cursor: pointer;
        letter-spacing: -8px;
        span {
        opacity: 0.3;
            &:hover {
                opacity: 1;
            }
        }
    }
`;
const Section3 = () => {

    const list = React.useRef();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:4000/section3');
                setData(response.data);
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패');
            }
        })();
    },[]);

    // 페이지 이동 버튼을 누를 때 dataset에 저장된 값만큼 style의 left값을 이동
    const onClick = React.useCallback((e) => {
        list.current.style.left = e.currentTarget.dataset.left;
    },[]);


    return (
        <Section3Container>
            <img src={Event} alt="BR Event" className="event" />
            <div className='list'>
                <ul ref={list}>
                    {data.map((v, i) => {
                        return (
                            <li key={i}>
                                <div className="image-wrap">
                                    <img src={v.img} alt={v.alt} />
                                </div>
                                <div className="text">
                                    <img src={v.event} alt="event" />
                                    <h3>{v.msg}</h3>
                                    <p>{v.date}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                </div>
                {/* 페이지 이동 버튼부분 */}
                <h1><span data-left='0px' onClick={onClick}>· </span><span data-left='-1210px' onClick={onClick}>· </span><span data-left='-2420px' onClick={onClick}>· </span><span data-left='-3630px' onClick={onClick}>· </span></h1>
        </Section3Container>
    );
};

export default Section3;
