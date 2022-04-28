import React from "react";
import GradeData from "../GradeData";
import PropTypes from 'prop-types';

const GradeItem = ({ name, grade, gender, kor, eng, math, sci }) => {
    let b = [];
    return GradeData.map((v, i) => {
        b = [];
        b.push(v.kor);
        b.push(v.eng);
        b.push(v.math);
        b.push(v.sci);
        let sum = 0;
        let avg = 0;
        let count = 0;
        for(let i = 0; i < b.length; i++) {
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
                <td>{v.name}</td>
                <td>{v.grade}</td>
                <td>{v.gender}</td>
                <td>{v.kor}</td>
                <td>{v.eng}</td>
                <td>{v.math}</td>
                <td>{v.sci}</td>
                <td>{parseInt(sum)}</td>
                <td>{parseInt(avg)}</td>
            </tr>
        );
    });
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
