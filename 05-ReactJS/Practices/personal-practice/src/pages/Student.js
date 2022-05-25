import React, { memo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {studentList, studentPost} from '../slices/StudentSlice';

const Student = memo(() => {

    const {data, loading, error} = useSelector((state) => state.student);
    const dispatch = useDispatch();

    // 추가할 학생 data
    const [newStudent, setNewStudent] = React.useState({
        name: '',
        userid: '',
        grade: '',
        idnum: '',
        birthdate: '',
        tel: '',
        height: '',
        weight: '',
        deptno: '',
        profno: '',
    });

    React.useEffect(() => {
        dispatch(studentList());
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();

        const current = e.target;
        let json = {};

        json.name = current.name.value;
        json.userid = current.userid.value;
        json.grade = current.grade.value;
        json.idnum = current.idnum.value;
        json.birthdate = current.birthdate.value;
        json.tel = current.tel.value;
        json.height = current.height.value;
        json.weight = current.weight.value;
        json.deptno = current.deptno.value;
        json.profno = current.profno.value;
        
        setNewStudent(json);

        if(json !== null){
        // dispatch(studentPost(newStudent));
        console.log(json)
        }
    }

    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmit}>
                <input type='text' name='name' placeholder='name' />
                <input type='text' name='userid' placeholder='userid' />
                <input type='text' name='grade' placeholder='grade' />
                <input type='text' name='idnum' placeholder='idnum' />
                <input type='text' name='birthdate' placeholder='birthdate' />
                <input type='text' name='tel' placeholder='tel' />
                <input type='text' name='height' placeholder='height' />
                <input type='text' name='weight' placeholder='weight' />
                <input type='text' name='deptno' placeholder='deptno' />
                <input type='text' name='profno' placeholder='profno' />
                <button type='submit'>추가하기</button>
            </form>
            <table border='1'>
                <thead>
                    <tr align='center'>
                        <th>id</th>
                        <th>name</th>
                        <th>userid</th>
                        <th>grade</th>
                        <th>idnum</th>
                        <th>birthdate</th>
                        <th>tel</th>
                        <th>height</th>
                        <th>weight</th>
                        <th>deptno</th>
                        <th>profno</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(({id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno}, i) => {
                        return (
                            <tr align='center' key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{userid}</td>
                                <td>{grade}</td>
                                <td>{idnum.substring(0,6)}-*******</td>
                                <td>{birthdate.substring(0,10)}</td>
                                <td>{tel}</td>
                                <td>{height}</td>
                                <td>{weight}</td>
                                <td>{deptno}</td>
                                <td>{profno}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
});

export default Student;