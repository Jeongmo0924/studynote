import React from "react";
import data from "./myschool";
import { useParams } from "react-router-dom";

const Student = () => {
    const { student } = data;
    for(const k of student){
        k.birthdate = k.birthdate.substring(0, 10);
        k.idnum = k.idnum.substring(0, 6) + '-*******';
        
    }
    const a = Object.values(student[0]);
    const b = Object.values(student[1]);
    const c = Object.values(student[2]);
    const d = Object.values(student[3]);
    const e = Object.values(student[4]);
    const f = Object.values(student[5]);
    const g = Object.values(student[6]);
    const h = Object.values(student[7]);
    const i = Object.values(student[8]);
    const j = Object.values(student[9]);
    const k = Object.values(student[10]);
    const l = Object.values(student[11]);
    const m = Object.values(student[12]);
    const n = Object.values(student[13]);
    const o = Object.values(student[14]);
    const p = Object.values(student[15]);

    return (
        <div>
            <table border="1">
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
                    <tr>
                        {a.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {b.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {c.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {d.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {e.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {f.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {g.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {h.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {i.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {j.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {k.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {l.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {m.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {n.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {o.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                    <tr>
                        {p.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Student;
