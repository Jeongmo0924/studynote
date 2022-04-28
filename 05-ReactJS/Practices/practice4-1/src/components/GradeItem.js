import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({name, gender, kor, eng, math, sci}) => {
    console.log(name);
    const sum = parseInt(kor + eng + math + sci);
    const avg = parseInt(sum / 4);
    return (
        <tbody>
                    <tr align="center">
                        <th>{name}</th>
                        <td>{gender}</td>
                        <td>{kor}</td>
                        <td>{eng}</td>
                        <td>{math}</td>
                        <td>{sci}</td>
                        <th>{sum}</th>
                        <th>{avg}</th>
                    </tr>
        </tbody>
    );
}

GradeItem.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    kor : PropTypes.number,
    eng : PropTypes.number,
    sci : PropTypes.number,
    math : PropTypes.number,
}

GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    sci: 0,
    math: 0
}

export default GradeItem;