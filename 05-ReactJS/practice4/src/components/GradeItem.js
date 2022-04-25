import React from "react";
import GradeData from "../GradeData";
import PropTypes from 'prop-types';


const GradeItem = ({ name, grade, gender, kor, eng, math, sci }) => {
    console.log(GradeData);
    let sum = kor + eng + math + sci;
    let avg = sum / 4;
        return (
            <tr align="center">
                <td>{name}</td>
                <td>{grade}</td>
                <td>{gender}</td>
                <td>{kor}</td>
                <td>{eng}</td>
                <td>{math}</td>
                <td>{sci}</td>
                <td><b>{parseInt(sum)}</b></td>
                <td><b>{parseInt(avg)}</b></td>
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
