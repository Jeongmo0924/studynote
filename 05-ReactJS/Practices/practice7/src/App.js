import React, { useReducer, useMemo, useCallback, useRef } from 'react';

function calculate(state, {num1, operator, num2}){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case 'root':
            return Math.sqrt(num1+num2);
        default: return 0;
    }
}

function App() {

    const a = useRef();
    const b = useRef();
    const c = useRef();
    const d = useRef();

    const [result, setResult] = useReducer(calculate, '');

    const onClick = useCallback(() => {
        setResult({
            num1: Number(a.current.value),
            operator: b.current.value,
            num2: Number(c.current.value)
        })
    }, []);

    React.useEffect(()=>{
        d.current.innerHTML = '결과값: ' + result;
    })

    const color = useMemo(() => {
        return result % 2 === 0 ? 'red' : 'green'
    })


    return (
        <div className="App">
            <h1>Calculater</h1>
            <hr />
            <input type='number' ref={a} />
            <select ref={b}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
                <option value='root'>√</option>
            </select>
            <input type='number' ref={c} />
            <button type='button' onClick={onClick}>결과보기</button>
            <div ref={d} style={{color: color, fontSize: '52px', fontWeight: 'bloder'}}></div>
        </div>
    );
}

export default App;
