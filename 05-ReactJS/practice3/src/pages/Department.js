import React from "react";
import data from "./myschool";
import { useParams } from "react-router-dom";

const Department = () => {
    const { department } = data;
    console.log(department);
    const a = Object.values(department[0]);
    const b = Object.values(department[1]);
    const c = Object.values(department[2]);
    const d = Object.values(department[3]);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
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
                </tbody>
            </table>
        </div>
    );
};

export default Department;
