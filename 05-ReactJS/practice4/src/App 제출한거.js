import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GradeItem from "./components/GradeItem";
import GradeData from "./GradeData";

function App() {
    return (
        <div className="App">
            <h1>성적표</h1>
            <hr />
            <table border="1px">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>학년</th>
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
                  <GradeItem name={GradeData[0].name} grade={GradeData[0].grade} gender={GradeData[0].gender} kor={GradeData[0].kor} eng={GradeData[0].eng} math={GradeData[0].math} sci={GradeData[0].sci} />
                  <GradeItem name={GradeData[1].name} grade={GradeData[1].grade} gender={GradeData[1].gender} kor={GradeData[1].kor} eng={GradeData[1].eng} math={GradeData[1].math} sci={GradeData[1].sci} />
                  <GradeItem name={GradeData[2].name} grade={GradeData[2].grade} gender={GradeData[2].gender} kor={GradeData[2].kor} eng={GradeData[2].eng} math={GradeData[2].math} sci={GradeData[2].sci} />
                  <GradeItem name={GradeData[3].name} grade={GradeData[3].grade} gender={GradeData[3].gender} kor={GradeData[3].kor} eng={GradeData[3].eng} math={GradeData[3].math} sci={GradeData[3].sci} />
                  <GradeItem name={GradeData[4].name} grade={GradeData[4].grade} gender={GradeData[4].gender} kor={GradeData[4].kor} eng={GradeData[4].eng} math={GradeData[4].math} sci={GradeData[4].sci} />

                </tbody>
            </table>
        </div>
    );
}

export default App;
