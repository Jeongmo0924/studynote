import React from "react";
import data from "./myschool";
import ProfessorSub from './components/ProfessorSub';

const Professor = () => {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr align="center">
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
                        <ProfessorSub sub={data.professor}/>
                </tbody>
            </table>
        </div>
    );
};

export default Professor;
