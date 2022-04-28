import React from "react";

const ProfessorSub = (props) => {
    return props.sub.map((v, i) => {
        return (
            <tr align="center">
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.position}</td>
                <td>{v.sal}</td>
                <td>{v.hiredate.substring(0, 10)}</td>
                <td>{v.comm}</td>
                <td>{v.deptno}</td>
            </tr>
        );
    });
};

export default ProfessorSub;
