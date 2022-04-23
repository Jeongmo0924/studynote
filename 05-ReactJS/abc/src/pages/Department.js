import React from "react";
import data from "./myschool";
import { useParams } from "react-router-dom";

const Department = () => {
    const { department } = data;
    console.log(department);

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
                    {department.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.dname}</td>
                                <td>{v.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Department;
