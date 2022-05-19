import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfessorAdd from "./pages/ProfessorAdd";
import ProfessorEdit from "./pages/ProfessorEdit";
import ProfessorList from "./pages/ProfessorList";

const App = () => {
    return (
        <div>
            <h1>Exam11</h1>
            <hr />
            <Routes>
                <Route path="/" element={<ProfessorList />} exact={true} />
                <Route path="/add" element={<ProfessorAdd />} />
                <Route path="/edit/:id" element={<ProfessorEdit />} />
            </Routes>
        </div>
    );
};

export default App;
