import React, {useState, useRef} from 'react';
import '../assets/css/ValidationSample.css';

const ValidationSample = () => {
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    const handleButtonClick = (e) => {
        setClicked(true);
        setValidated(password === '0000');
        input.current.focus();
    }

    const input = useRef();

    return (
        <div>
            <input
                type='password'
                value={password}
                onChange={handleChange}
                className={clicked ? (validated ? 'success' : 'failure') : ''}
                ref={input}
            />
            <button onClick={handleButtonClick}>Validate</button>
        </div>
    );
};

export default ValidationSample;