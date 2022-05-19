import React from "react";
import useAxios from "axios-hooks";
import useMountedRef from "./hooks/useMounterdRef";
import Table from "./components/Table";
import Spinner from "./components/Spinner";
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

const App = () => {
    // 선택된 select 값을 저장할 상태값
    const [state, setState] = React.useState("");

    // 마운트됨과 동시에 axios get
    const [{ data, loading, error }, refetch] = useAxios("http://localhost:4000/traffic_acc");

    // 드롭다운이 선택되었을 때 그 값을 state에 적용하는 함수
    const onSelectChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;

        const newState = current[current.selectedIndex].value;

        console.log(newState);
        setState(newState);
    }, []);

    const mountedRef = useMountedRef();

    // 사고건수, 사망자, 부상자의 합을 저장할 변수
    let accSum = 0;
    let deaSum = 0;
    let injSum = 0;

    // state값이 바뀌었을 때, 바뀐 값을 params로 전달하여 fetch함수를 실행
    React.useEffect(() => {
        if (mountedRef.current) {
            // refetch에 params로 전달할 변수
            const params = {};
            // -- 년도 선택 -- 을 골랐을 때는 params를 전달하지 않음
            if (state) {
                params["year"] = state;
            }
            refetch({
                params: params,
            });
        }
    }, [state, mountedRef, refetch]);

    // Ajax 통신이 실패했을 때 실행할 조건문
    if (error) {
        console.error(error);
        return (
            <div>
                <h1>Oops~! {error.code} Error!</h1>
                <hr />
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>EXAM 10</h1>
            <ht />

            <Spinner visible={loading} />
            <SelectContainer>
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
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{year}년</td>
                                    <td>{month}월</td>
                                    <td>{accident.toLocaleString("ko-KR")}건</td>
                                    <td>{death.toLocaleString("ko-KR")}명</td>
                                    <td>{injury.toLocaleString("ko-KR")}명</td>
                                </tr>
                            );
                        })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">합계</th>
                        <th>{accSum.toLocaleString("ko-KR")}건</th>
                        <th>{deaSum.toLocaleString("ko-KR")}명</th>
                        <th>{injSum.toLocaleString("ko-KR")}명</th>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default App;
