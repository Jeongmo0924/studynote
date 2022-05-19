import React from 'react';
import Table from '../components/Table';
import Spinner from '../components/Spinner';
import useAxios from 'axios-hooks';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  
  &:hover {
    background-color: #06f2;
  }
`;
const ProfessorList = () => {
    // 화면에 표시할 교수 데이터를 저장하기 위한 변수
    const [prof, setProf] = React.useState([]);

    // 백엔드로부터 데이터 가져오기
    const [{data, loading, error}, refetch] = useAxios('http://localhost:4000/professor', { useCache: false });

    // ajax로딩이 완료되었을 때 실행될 hook
    React.useEffect(() => {
        setProf(data);
    },[data]);

    // 백엔드 삭제기능 매뉴얼로 선언해두기
    const [{loading2}, delProf] = useAxios({
        method: 'DELETE'
    }, {
        useCache: false,
        manual: true
    });


    // 삭제 버튼이 클릭되었을 때 실행할 이벤트 핸들러
    const onClick = (e) => {
        e.preventDefault();

        const current = e.target;

        const name = current.dataset.name;
        const position = current.dataset.position;
        const id = parseInt(current.dataset.id);

        if(window.confirm(`정말 ${name} ${position}의 정보를 삭제하시겠습니까?`)){
            (async () => {
                let json = null;
                try {
                    const response = await delProf({
                        url: `http://localhost:4000/professor/${id}`
                    });

                    json = response.data;
                } catch (e) {
                    console.error(e);
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
                }

                if(json !== null){
                    setProf((prof) => prof.filter((v, i) => v.id !== id));
                }
            })();
        }
    };


    return (
        <>
            <Spinner visible={loading || loading2}/>
            <nav>
            <TopLink to='/add'>교수 등록하기</TopLink>
            </nav>
            <hr />

            {error ? (
                <div>
                <h1>Oops~!! {error.code} Error.</h1>
                <hr />
                <p>{error.message}</p>
                </div>
            ): (
            <Table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>이름</th>
                    <th>아이디</th>
                    <th>직급</th>
                    <th>급여</th>
                    <th>입사일</th>
                    <th>보직수당</th>
                    <th>소속학과번호</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {prof && prof.map(({id, name, userid, position, sal, hiredate, comm, deptno}, i) => {
                    const hiredate2 = hiredate.substring(2, 10).replaceAll('-', '/');
                    return (
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{userid}</td>
                            <td>{position}</td>
                            {sal > 0 ? <td>{sal}만원</td> : <td></td>}
                            <td>{hiredate2}</td>
                            <td>{comm && `${comm}만원`}</td>
                            <td>{deptno}</td>
                            <td><NavLink to={`edit/${id}`}>수정하기</NavLink></td>
                            <td><a href='#!' data-id={id} data-name={name} data-position={position} onClick={onClick}>삭제하기</a></td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
            )}
        </>
    );
};

export default ProfessorList;
