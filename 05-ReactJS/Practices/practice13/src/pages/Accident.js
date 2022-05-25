import React, { memo } from "react";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { accidentGetList } from "../slices/AccidentSlice";
import styled from "styled-components";


    /** 드롭다운을 배치하기 위한 박스 */
    const SelectContainer = styled.div`
        position: sticky;
        top: 0;
        background-color: #fff;
        border-top: 1px solid #eee;
        padding: 10px 0;
        margin: 0;

        select {
            margin-right: 15px;
            font-size: 16px;
            padding: 5px 10px;
        }
    `;

const Accident = memo(() => {
    // slice에서 state 선택
    const { data, loading, error } = useSelector((state) => state.accident);
    const dispatch = useDispatch();

    // action으로 전달할 드롭다운 선택값을 상태값으로 지정
    const [year, setYear] = React.useState(-1);

    // year의 값이 0보다 클 때는 payload로 year를, 그렇지 않을 때는 payload없이 전달, year을 모니터링
    React.useEffect(() => {
        if (year > 0) {
            dispatch(accidentGetList(year));
        } else {
            dispatch(accidentGetList());
        }
    }, [dispatch, year]);

    // 합계를 저장할 변수
    let accSum = 0;
    let deaSum = 0;
    let injSum = 0;

    // 드롭다운이 선택되었을 때 그 값을 state에 적용하는 함수
    const onSelectChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;

        const newYear = current[current.selectedIndex].value;

        setYear(newYear);
    }, []);

    return (
        <div>
            <Spinner visible={loading} />

            {error ? (
                <div>
                    <h1>Oops~~!! {error.code} Error.</h1>
                    <hr />
                    <p>{error.message}</p>
                </div>
            ) : (
                <div>
                    <SelectContainer>
            <h1>EXAM 13</h1>
            <hr />
                        <select name="year" onChange={onSelectChange}>
                            <option value="">-- 년도 선택 --</option>
                            <option value="2005">2005년도</option>
                            <option value="2006">2006년도</option>
                            <option value="2007">2007년도</option>
                            <option value="2008">2008년도</option>
                            <option value="2009">2009년도</option>
                            <option value="2010">2010년도</option>
                            <option value="2011">2011년도</option>
                            <option value="2012">2012년도</option>
                            <option value="2013">2013년도</option>
                            <option value="2014">2014년도</option>
                            <option value="2015">2015년도</option>
                            <option value="2016">2016년도</option>
                            <option value="2017">2017년도</option>
                            <option value="2018">2018년도</option>
                        </select>
                    </SelectContainer>
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>년도</th>
                                <th>월</th>
                                <th>교통사고 건수</th>
                                <th>사망자 수</th>
                                <th>부상자 수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map(({ id, year, month, accident, death, injury }, i) => {
                                    accSum += accident;
                                    deaSum += death;
                                    injSum += injury;
                                    return (
                                        <tr key={i}>
                                            <td>{id}</td>
                                            <td>{year}년</td>
                                            <td>{month}월</td>
                                            <td>{accident.toLocaleString()}건</td>
                                            <td>{death.toLocaleString()}명</td>
                                            <td>{injury.toLocaleString()}명</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="3">합계</th>
                                <th>{accSum.toLocaleString()}건</th>
                                <th>{deaSum.toLocaleString()}명</th>
                                <th>{injSum.toLocaleString()}명</th>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            )}
        </div>
    );
});

export default Accident;
