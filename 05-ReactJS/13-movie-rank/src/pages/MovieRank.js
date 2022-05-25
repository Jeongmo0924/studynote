import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieRank } from "../slices/MovieRankSlice";
import dayjs from "dayjs";
import styled from "styled-components";

import Spinner from "../components/Spinner";
import Table from "../components/Table";
import useMountedRef from "../hooks/useMounterdRef";

import BarChartView from "../components/BarChartView";

// 그래프와 표를 배치하기 위한 flex-box
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .flex-item {
        flex-basis: 50%;
        box-sizing: border-box;
        padding: 10px;
    }
`;

const MovieRank = () => {
    const { data, loading, error } = useSelector((state) => state.movieRank);
    const dispatch = useDispatch();
    const [targetDt, setTargetDt] = React.useState(dayjs().add(-1, "d").format("YYYY-MM-DD"));

    React.useEffect(() => {
        dispatch(getMovieRank({ targetDt: targetDt.replaceAll("-", "") }));
    }, [dispatch, targetDt]);

    const onChange = React.useCallback((e) => {
        e.preventDefault();
        setTargetDt(e.target.value);
    }, []);

    // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    const mountedRef = useMountedRef();
    // 그래프에 전달할 데이터
    const [chartData, setChartData] = React.useState();

    // Ajax 연동 결과에서 그래프에 표시할 데이터만 추려내어 chartData 상태값에 반영한다.
    // Ajax는 컴포넌트가 화면에 마운트됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트 된 이후에 수행되어야만 한다.
    React.useEffect(() => {
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if(mountedRef.current) {
            const newData = {
                movieNm: [],
                audiCnt: []
            };

            data.boxOfficeResult.dailyBoxOfficeList.forEach((v, i) => {
                newData.movieNm.push(v.movieNm);
                newData.audiCnt.push(v.audiCnt);
            });

            setChartData(newData);
        }
    },[mountedRef, data]);

    return (
        <div>
            <Spinner visible={loading} />
            <h1>13-Redux-Movie-Rank</h1>
            <hr />
            <form>
                <label style={{ fontSize: "18px" }} HTMLfor="targetDt">
                    날짜 선택:{" "}
                </label>
                <input style={{ fontSize: "18px" }} type="date" id="targetDt" value={targetDt} placeholder="날짜 선택" onChange={onChange} />
            </form>
            <br />
            {error ? (
                <h1>Error~</h1>
            ) : (
                <Container>
                    <div className='flex-item'>
                        <BarChartView chartData={chartData} />
                    </div>
                    <div className='flex-item'>
                <Table>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>영화제목</th>
                            <th>관람객 수</th>
                            <th>매출액</th>
                            <th>누적 관람객 수</th>
                            <th>누적 매출액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.boxOfficeResult.dailyBoxOfficeList.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{v.rank}</td>
                                        <td>{v.movieNm}</td>
                                        <td>{Number(v.audiCnt).toLocaleString()}명</td>
                                        <td>{Number(v.salesAmt).toLocaleString()}원</td>
                                        <td>{Number(v.audiAcc).toLocaleString()}명</td>
                                        <td>{Number(v.salesAcc).toLocaleString()}원</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
                    </div>
                </Container>
            )}
        </div>
    );
};

export default MovieRank;
