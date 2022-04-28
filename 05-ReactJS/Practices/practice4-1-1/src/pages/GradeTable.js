import React from "react";
import GradeData from "../GradeData";
import Meta from "../components/Meta";
import GradeItem from "../components/GradeItem";
import { useParams } from "react-router-dom";

const GradeTable = () => {
    const params = useParams();

    const grade = params.grade + '학년';
    console.debug(grade);

    return (
        <div>
            <Meta title={grade}/>
            <h2>{grade}</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {GradeData[grade].map((v, i) => {
                        return (
                            <GradeItem 
                                name={v.이름}
                                gender={v.성별}
                                kor={v.국어}
                                eng={v.영어}
                                math={v.수학}
                                sci={v.과학}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;
