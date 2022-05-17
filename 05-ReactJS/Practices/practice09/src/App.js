import React from 'react';
import Professor from './components/Professor';
import Spinner from './components/Spinner';
import Student from './components/Student';
import axios from 'axios';

function App() {
    const [data, setData] = React.useState([]);
    const [deptno, setDeptno] = React.useState(-1);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            (async () => {
                setLoading(true);
                try {
                    const response = await axios.get('http://localhost:4000/department');
                    setData(response.data);
                } catch (e) {
                    console.error(e);
                    alert('Ajax 통신오류 (App.js)');
                } finally {
                    setLoading(false);
                }
            })();
        }, 500)
    }, []);

    const onChange = React.useCallback((e) => {
        setDeptno(e.currentTarget.value);
    }, [])
    console.log(data);

    return (<div className="App">
        <Spinner visible={loading}/>
        <h1>Exam 09</h1>
        <hr/>
        <select onChange={onChange}>
            <option value='' selected>학과목록</option>
            {data.map((v, i) => {
                return (<option value={v.id} key={i}>{v.dname}</option>)
            })}
        </select>

        <h2>학생목록</h2>
        <Student props={deptno}/>
        <br/>
        <h2>교수목록</h2>
        <Professor props={deptno}/>
    </div>);
}

export default App;
