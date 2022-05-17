import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Student = ({props}) => {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        (async () => {
            try {
                const response = await axios(`http://localhost:4000/student?deptno=${props}`);
                // const response = await axios(`http://localhost:4000/student`
                setData(response.data);
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패 (Student.js)');
            } finally {
                setLoading(false);
            }
        })();
        },500);
    }, [props]);

    console.log(data);


    return (
        <table border={1}>
            <Spinner visible={loading} />
            <thead align='center'>
            <tr>
                <th>학번</th>
                <th>이름</th>
                <th>아이디</th>
                <th>학년</th>
                <th>주민번호</th>
                <th>생년월일</th>
                <th>연락처</th>
                <th>키</th>
                <th>몸무게</th>
                <th>소속학과번호</th>
                <th>담당교수번호</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((v, i) => {
                return (
                    <tr align='center'>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.userid}</td>
                        <td>{v.grade}</td>
                        <td>{v.idnum.substring(0,6)}-*******</td>
                        <td>{v.birthdate.substring(0, 10)}</td>
                        <td>{v.tel}</td>
                        <td>{v.height}</td>
                        <td>{v.weight}</td>
                        <td>{v.deptno}</td>
                        <td>{v.profno}</td>

                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default Student;
