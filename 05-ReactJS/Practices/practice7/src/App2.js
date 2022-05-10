import React, { useReducer, useMemo, useCallback, useRef } from 'react';


function App() {

    const container = useRef();
    const first = useRef();
    const second = useRef();
    const operation = useRef();

    // 3. 입력받은 action값을 처리하여 result 값 리턴
    function calculate(state, action) {
        switch (action.operator) {
            case '+':
                return Number(action.firstNum) + Number(action.secondNum);
            case '-':
                return Number(action.firstNum) - Number(action.secondNum);
            case '*':
                return Number(action.firstNum) * Number(action.secondNum);
            case '/':
                return Number(action.firstNum) / Number(action.secondNum);
            default :
                return 0;
        }
    }

    // 1. 결과값으로 사용할 result 할당
    const [result, setResult] = useReducer(calculate, '');

    // 2. 버튼이 눌릴 때 setResult에 현재 입력값을 JSON 프로퍼티로 전달하는 함수 Callback처리
    const onClick = useCallback((e) => {
        setResult({
            firstNum: first.current.value,
            operator: operation.current.value,
            secondNum: second.current.value,
        });
    }, []);

    // 4. result 값이 변할 때마다 container에 출력
    React.useEffect(e => {
        container.current.innerHTML = result;
    }, [result]);

    // 5. result 값이 변할 때 마다 체크하여 색상 변화
    const color = useMemo(() => {
        return result % 2 === 0 ? 'red' : 'green';
    }, [result]);

    return (
        <div className="App">
            <h1>Exam07</h1>
            <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
            <hr/>
            <input type='number' ref={first} name='firstNum' />
            <select name='operation' ref={operation}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input type='number' ref={second} name='secondNum' />
            <button type='button' onClick={onClick}>결과보기</button>
            <div style={{color: color}} ref={container}></div>
        </div>
    );
}

export default App;

