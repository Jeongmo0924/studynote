import React from "react";

const DepartmentSub = (props) => {
    return props.sub.map((v, i) => {
        return (
            <tr align="center">
                <td key={i}>{v.id}</td>
                <td key={i + "a"}>{v.dname}</td>
                <td key={i + "b"}>{v.loc}</td>
            </tr>
        );
    });
};

export default DepartmentSub;