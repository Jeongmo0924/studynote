import React from "react";
import myStyles from '../../assets/css/myStyle.module.css';

const StudentSub = (props) => {
    return props.sub.map((v, i) => {
        return (
            <tr align="center">
                <td className={`${myStyles.studentTd} ${myStyles.red}`}>{v.id}</td>
                <td className={`${myStyles.studentTd} ${myStyles.orange}`}>{v.name}</td>
                <td className={`${myStyles.studentTd} ${myStyles.yellow}`}>{v.userid}</td>
                <td className={`${myStyles.studentTd} ${myStyles.green}`}>{v.grade}</td>
                <td className={myStyles.studentTd}>{v.idnum.substring(0, 6) + "*******"}</td>
                <td className={`${myStyles.studentTd} ${myStyles.indigo}`}>{v.birthdate.substring(0, 10)}</td>
                <td className={`${myStyles.studentTd} ${myStyles.red}`}>{v.tel}</td>
                <td className={`${myStyles.studentTd} ${myStyles.orange}`}>{v.height}</td>
                <td className={`${myStyles.studentTd} ${myStyles.yellow}`}>{v.weight}</td>
                <td className={`${myStyles.studentTd} ${myStyles.green}`}>{v.deptno}</td>
                <td className={myStyles.studentTd}>{v.profno}</td>
            </tr>
        );
    });
};

export default StudentSub;
