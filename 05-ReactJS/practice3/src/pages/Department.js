import React from "react";

const Department = (props) => {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr align="center">
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {props.department.map((v, i) => {
                        return (
                            <tr align="center">
                                <td key={i}>{v.id}</td>
                                <td key={i + "a"}>{v.dname}</td>
                                <td key={i + "b"}>{v.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Department;
