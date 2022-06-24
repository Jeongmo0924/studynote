/**
 * @filename: LineChartView.js
 * @description: 선 그래프 표시를 위한 컴포넌트
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartView = memo(({ covid_data }) => {
    
    // path파라미터를 받아옴
    const { field } = useParams();

    /** 그래프 옵션 */
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
    };

    const labels =
        covid_data &&
        covid_data.map((v) => {
            // json 데이터의 날짜값을 잘라서 차트에 사용
            return v.date.substring(0, 10);
        });

    /** chart에 표시될 데이터 (막대그래프용) */
    const data = {
        labels,
        datasets: [
            {
                label: "명",
                // path파라미터로 받아온 키워드를 이용하여 map함수로 해당하는 값을 받아옴
                data: covid_data && covid_data.map((v) => v[field]),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return <Line data={data} options={options} />;
});

export default LineChartView;
