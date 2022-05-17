import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Professor = ({props}) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            (async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:4000/professor?deptno=${props}`);
                    setData(response.data);
                } catch (e) {
                    console.error(e);
                    alert('Ajax 연동 실패 (Professor.js)');
                } finally {
                    setLoading(false);
                }
            })();
        }, 500);
    }, [props]);


    return (
        <table border={1}>
            <Spinner visible={loading}/>
            <thead>
                <tr align='center'>
                    <th>교수번호</th>
                    <th>이름</th>
                    <th>아이디</th>
                    <th>직급</th>
                    <th>급여</th>
                    <th>입사일</th>
                    <th>보직수당</th>
                    <th>소속학과번호</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((v, i) => {
                return (
                    <tr key={i} align = 'center'>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.userid}</td>
                        <td>{v.position}</td>
                        <td>{v.sal}</td>
                        <td>{v.hiredate.substring(0,10)}</td>
                        <td>{v.comm}</td>
                        <td>{v.deptno}</td>
                    </tr>
                )
            })}
            </tbody>


        </table>
    );
};

export default Professor;
