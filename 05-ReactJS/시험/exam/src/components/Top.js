/**
 * @filename: Top.js
 * @description: 상단의 페이지 타이틀과 날짜 선택 Form
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Form = styled.form`
    position: sticky;
    display: flex;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;
    margin-bottom: 20px;

    input,
    button {
        display: block;
        margin-right: 5px;
        font-size: 16px;
        padding: 0 10px;
        height: 30px;
    }

    button {
        width: 70px;
        flex: none;
    }
`;

// 컴포넌트 최적화를 위한 memo
const Top = memo(() => {
    const navigate = useNavigate();

    // 컴포넌트 최적화를 위한 useCallback
    const onSearchSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // input 태그에 입력된 값을 받아온다.
            const date_gte = e.target.date_gte.value;
            const date_lte = e.target.date_lte.value;

            // 시작날과 마지막날이 하나라도 결정되지 않았을 때는 이동하지 않는다.
            // 둘 다 존재할 경우 path파라미터는 첫 번째 탭인 일일확진자 confirmed를, queryString은 날짜값을 전달한다.
            date_gte && date_lte && navigate(`/confirmed?date_gte=${date_gte}&date_lte=${date_lte}`);
        },
        [navigate]
    );

    // asd

    return (
        <div>
            <h1>
                <a href="http://localhost:3000" style={{ textDecoration: "none", color: "black" }}>
                    Covid19 현황
                </a>
            </h1>
            <Form onSubmit={onSearchSubmit}>
                <input type="date" name="date_gte" />
                <input type="date" name="date_lte" />
                <button type="submit">검색</button>
            </Form>
        </div>
    );
});

export default Top;
