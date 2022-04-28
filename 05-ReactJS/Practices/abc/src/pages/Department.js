import React from "react";
import data from "./myschool";
import DepartmentSub from './components/DepartmentSub';

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
                    <DepartmentSub sub={data.department} />
                </tbody>
            </table>
        </div>
    );
};

export default Department;
