import React from "react";

const Thu = () => {
    const weather = {
        mon: ["맑음", "맑음"],
        tue: ["비", "맑음"],
        wed: ["맑음", "흐림"],
        thu: ["맑음", "흐림"],
        fri: ["흐림", "흐림"],
        sat: ["비", "맑음"],
        sun: ["맑음", "맑음"],
    };

    let today = [];

    for(const k in weather){
        if(k === "thu"){
            let day = weather[k];
            console.log(day);
            today = day;
        }
    }

    console.log(today);


    return (
        <div>
            <h2>오전</h2>
            <h3>{today[0]}</h3>
            <h2>오후</h2>
            <h3>{today[1]}</h3>
        </div>
    );
};

export default Thu;
