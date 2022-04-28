import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Mon from "./Mon";
import Tue from "./Tue";
import Wed from "./Wed";
import Thu from "./Thu";
import Fri from "./Fri";
import Sat from "./Sat";
import Sun from "./Sun";

const weather = () => {
    return (
        <div>
            <nav>
                <Link to="mon">월</Link>&nbsp;|&nbsp;
                <Link to="tue">화</Link>&nbsp;|&nbsp;
                <Link to="wed">수</Link>&nbsp;|&nbsp;
                <Link to="thu">목</Link>&nbsp;|&nbsp;
                <Link to="fri">금</Link>&nbsp;|&nbsp;
                <Link to="sat">토</Link>&nbsp;|&nbsp;
                <Link to="sun">일</Link>
            </nav>

            <Routes>
                <Route path="mon" element={<Mon/>} />
                <Route path="tue" element={<Tue/>} />
                <Route path="wed" element={<Wed/>} />
                <Route path="thu" element={<Thu/>} />
                <Route path="fri" element={<Fri/>} />
                <Route path="sat" element={<Sat/>} />
                <Route path="sun" element={<Sun/>} />
            </Routes>
        </div>
    );
};

export default weather;
