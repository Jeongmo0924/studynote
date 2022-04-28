import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Department from './pages/Department';
import Professor from './pages/Professor';
import Student from './pages/Student';
import Data from './pages/myschool'

function App() {
  return (
    <div>
      <h1>Exam3</h1>
      <nav>
        <Link to='./department'>학과목록</Link>&nbsp;|&nbsp;
        <Link to='./professor'>교수목록</Link>&nbsp;|&nbsp;
        <Link to='./student'>학생목록</Link>
      </nav>
      <hr />

      <Routes>
        <Route path='/department' element={<Department department={Data.department}/>} />
        <Route path='/professor' element={<Professor professor={Data.professor}/>} />
        <Route path='/student' element={<Student student={Data.student}/>} />
      </Routes>

    </div>
  );
}

export default App;
