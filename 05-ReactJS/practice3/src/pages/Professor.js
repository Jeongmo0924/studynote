import React from "react";
import data from "./myschool";
import { useParams } from "react-router-dom";

const Professor = () => {
    const { professor } = data;
    for(const k of professor){
        k.hiredate = k.hiredate.substring(0, 10);
        
    }
    const a = Object.values(professor[0]);
    const b = Object.values(professor[1]);
    const c = Object.values(professor[2]);
    const d = Object.values(professor[3]);
    const e = Object.values(professor[4]);
    const f = Object.values(professor[5]);
    const g = Object.values(professor[6]);
    const h = Object.values(professor[7]);

    return (
        <div>
            <table border="1">
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
                </tbody>
            </table>
        </div>
    );
};

export default Professor;
