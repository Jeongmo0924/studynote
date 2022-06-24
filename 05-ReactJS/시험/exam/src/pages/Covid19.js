/**
 * @filename: Covid19.js
 * @description: 메뉴링크와 차트를 렌더링하는 페이지
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { covidGet } from "../slices/Covid19Slice";
import { useQueryString } from "../hooks/useQueryString";
import LineChartView from "../components/LineChartView";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import MenuLink from "../components/MenuLink";
import dayjs from "dayjs";

// 컴포넌트 최적화를 위한 memo
const Covid19 = memo(() => {
    // queryString에서 date_gte와 date_lte값을 받아옴
    const { date_gte, date_lte } = useQueryString();
    const { data, loading, error } = useSelector((state) => state.covid19);
    const dispatch = useDispatch();

    // action 파라미터로 date_gte는 그대로, date_lte는 하루를 더해서 설정함
    React.useEffect(() => {
        dispatch(covidGet({ date_gte: date_gte, date_lte: dayjs(date_lte).add(1, "d").format("YYYY-MM-DD") }));
    }, [dispatch, date_gte, date_lte]);

    return (
        <div>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView />
            ) : (
                // 데이터가 있다면, 링크를 띄우고 받아온 데이터를 LineChartView태그에 props로 전달함
                data && (
                    <>
                        <div>
                            <nav>
                                <MenuLink to={`/confirmed?date_gte=${date_gte}&date_lte=${date_lte}`}>일일확진자</MenuLink>
                                <MenuLink to={`/confirmed_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적확진자</MenuLink>
                                <MenuLink to={`/active?date_gte=${date_gte}&date_lte=${date_lte}`}>격리환자</MenuLink>
                                <MenuLink to={`/released?date_gte=${date_gte}&date_lte=${date_lte}`}>격리해제</MenuLink>
                                <MenuLink to={`/released_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적격리해제</MenuLink>
                                <MenuLink to={`/death?date_gte=${date_gte}&date_lte=${date_lte}`}>사망자</MenuLink>
                                <MenuLink to={`/death_acc?date_gte=${date_gte}&date_lte=${date_lte}`}>누적사망자</MenuLink>
                            </nav>
                        </div>

                        <div>
                            <LineChartView covid_data={data} />
                        </div>
                    </>
                )
            )}
        </div>
    );
});

export default Covid19;
