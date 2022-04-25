import React from "react";
import GradeData from "../GradeData";
import PropTypes from 'prop-types';

const GradeItem = ({ name, grade, gender, kor, eng, math, sci }) => {
    let b = [];
        b.push(name);
        b.push(grade);
        b.push(gender);
        b.push(kor);
        b.push(eng);
        b.push(math);
        b.push(sci);
        let sum = 0;
        let avg = 0;
        let count = 0;
        for(let i = 3; i < 7; i++) {
            if(typeof b[i] == 'number'){
                sum += b[i];
                count++;
                avg = sum/count;
            }
        }
        console.log(sum);
        console.log(b);

        return (
            <tr>
                <td>{b[0]}</td>
                <td>{b[1]}</td>
                <td>{b[2]}</td>
                <td>{b[3]}</td>
                <td>{b[4]}</td>
                <td>{b[5]}</td>
                <td>{b[6]}</td>
                <td>{sum}</td>
                <td>{avg.toFixed(2)}</td>
            </tr>
        );
    };

GradeItem.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    grade: PropTypes.number,
    kor: PropTypes.number,
    eng: PropTypes.number,
    math: PropTypes.number,
    sci: PropTypes.number
}

GradeItem.defaultProps ={
    kor: 0,
    eng: 0,
    math: 0,
    sci: 0
}

export default GradeItem;
