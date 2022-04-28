import React from "react";
import GradeData from "../GradeData";
import PropTypes from "prop-types";

const GradeItem = ({ name, grade, gender, kor, eng, math, sci }) => {
    console.log(name);
    GradeData.map((v, i) => {
        name = v.name;
        grade = v.grade;
        gender = v.gender;
        kor = v.kor;
        eng = v.eng;
        math = v.math;
        sci = v.sci;

        return (
            <tr>
                <td>{name}</td>
                <td>{grade}</td>
                <td>{gender}</td>
                <td>{kor}</td>
                <td>{eng}</td>
                <td>{math}</td>
                <td>{sci}</td>
                <td>{name}</td>
                <td>{name}</td>
            </tr>
        );
    });
};

GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sci: 0,
};

GradeItem.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    grade: PropTypes.number,
    kor: PropTypes.number,
    eng: PropTypes.number,
    math: PropTypes.number,
    sci: PropTypes.number,
};

export default GradeItem;
