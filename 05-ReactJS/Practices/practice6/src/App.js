import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const AA = styled.div`
  font-family: 'White Rabbit', 'Terminal';
  color: #00ff00;
`


function App() {

    const container = useRef();
    const [rowNum, setRowNum] = useState(0);

    const InputOnChange = (e) => {
        setRowNum(e.currentTarget.value);
    }

    useEffect(() => {
        // 필드 초기화
        container.current.innerHTML = '';
        // 별찍기
        for (let i = 0; i < rowNum; i++) {
            for (let j = 0; j < i + 1; j++) {
                container.current.innerHTML += '*';
            }
            container.current.innerHTML += '<br />';
        }
    }, [rowNum]);   // 실행 요건 지정


    return (
        <AA>
            <h3>useState, useEffect, useRef를 사용한 별찍기 구현</h3>
            <hr/>
            <label htmlFor='rownum'>Number of Row: </label>
            <input id='rownum' type='number' value={rowNum} onChange={InputOnChange}/>
            <hr/>
            Wake up... Neo!
            <div ref={container}></div>
        </AA>
    );
}

export default App;
