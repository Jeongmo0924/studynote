import React from "react";
import data from "./myschool";
import StudentSub from './components/StudentSub';

import myStyles from '../assets/css/myStyle.module.css';

const Student = () => {
    const { student } = data;

    return (
        <div className={myStyles.studentBg}>
            <table border="1" className={myStyles.studentTable}>
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
                    <StudentSub sub={data.student}/>
                </tbody>
            </table>
        </div>
    );
};

export default Student;
