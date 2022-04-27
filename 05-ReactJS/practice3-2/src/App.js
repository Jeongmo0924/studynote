import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import DeptList from "./components/DeptList";
import Professor from "./components/Professor";
import Student from "./components/Student";
import Myschool from "./components/Myschool";

function App() {
    return (
        <div className="App">
            <h1>Exam3-2</h1>
            <nav></nav>
            <hr />
            <table border="1" cellPadding="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {Myschool.department.map((v, i) => {
                        return <DeptList id={v.id} dname={v.dname} loc={v.loc} />;
                    })}
                </tbody>
            </table>

            <hr />

            <table border="1" cellPadding="1">
                <thead>
                    <tr>
                        <th>교수번호</th>
                        <th>교수이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                    </tr>
                </thead>
                <tbody>
                    {Myschool.professor.map((v, i) => {
                        return (
                        <Professor 
                          id={v.id} 
                          name={v.name} 
                          userid={v.userid} 
                          position={v.position} 
                          sal={v.sal} 
                          hiredate={v.hiredate.substring(0, 10)} 
                          comm={v.comm} 
                          deptno={v.deptno}/>
                        );
                    })}
                </tbody>
            </table>

            <hr />

            <table border="1" cellPadding="1">
                <thead>
                    <tr>
                        <th>학생번호</th>
                        <th>학생이름</th>
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
                    {Myschool.student.map((v, i) => {
                        return (
                            <Student
                                id={v.id}
                                name={v.name}
                                userid={v.userid}
                                grade={v.grade}
                                idnum={v.idnum.substring(0, 6) + "-*******"}
                                birthdate={v.birthdate.substring(0, 10)}
                                tel={v.tel}
                                height={v.height}
                                weight={v.weight}
                                deptno={v.deptno}
                                profno={v.profno}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
