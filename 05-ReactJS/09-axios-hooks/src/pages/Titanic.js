/**
 * 타이타닉 탑승자 명단 조회
 */
import React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

// Axios 기능 제공 hook
import useAxios from "axios-hooks";

// 페이지의 마운트 여부를 확인하기 위한 custom hook
import useMountedRef from "../hooks/useMounterdRef";

/** 성별을 표시하기 위한 텍스트 라벨 */
const ColorText = styled.span`
    &:before {
        color: ${({ sex }) => (sex === "male" ? "#06f" : "#c0c")};
        content: "${({ sex }) => (sex === "male" ? "남자" : "여자")}";
        font-weight: 600;
    }
`;

/** 탑승지를 표시하기 위한 텍스트 라벨 */
const EmbarkedBox = styled.span`
    &:before {
        color: ${({ embarked }) => (embarked === "C" ? "#f60" : embarked === "Q" ? "#00f" : "#990")};
        content: "${({ embarked }) => (embarked === "C" ? "셰르부르" : embarked === "Q" ? "퀸즈타운" : "사우샘프턴")}";
        font-weight: 600;
    }
`;

/** 생존 여부를 표시하기 위한 텍스트 라벨 */
const SurvivedBox = styled.span`
    &:before {
        background-color: ${({ survived }) => (survived ? "#090" : "#e00")};
        content: "${({ survived }) => (survived ? "생존" : "사망")}";
        color: #fff;
        font-weight: 600;
    }
`;

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

// 접속할 backend의 URL
const URL = "http://localhost:4000/titanic";

const Titanic = () => {
    // 탑승객 명단 목록을 Ajax로 가져온다.
    // --> 기본적으로 컴포넌트의 마운트와 동시에 자동 실행되어 응답 결과를 data에 저장한다.
    const [{ data, loading, error }, refetch] = useAxios(URL);
    const [{ loading2, error2 }, refetch2] = useAxios(
        {
            url: URL,
            method: "POST",
        },
        { manual: true }
    );

    // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
    const [state, setState] = React.useState({
        sex: "",
        embarked: "",
        survived: "",
    });

    // 이 컴포넌트가 하면에 마운트 되었는지를 확인하기 위한 hook
    const mountedRef = useMountedRef();

    /** state 상태값이 변경되었을 때 실행될 hook */
    React.useEffect(() => {
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if (mountedRef.current) {
            // 상태값 중에서 빈 값이 아닌 항목들을 옮겨담는다.
            const params = {};
            for (let key in state) {
                if (state[key]) {
                    params[key] = state[key];
                }
            }

            // Ajax 재요청
            refetch({
                params: params,
            });
        }
        // hook 함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
    }, [mountedRef, refetch, state]);

    /** 드롭다운 선택 변경시 호출되는 이벤트 */
    const onSelectChange = React.useCallback(
        (e) => {
            e.preventDefault();

            // 드롭다운의 입력값 취득
            const current = e.target;
            const key = current.name;
            const value = current[current.selectedIndex].value;

            // 기존의 상태값을 그대로 복사한 상태에서
            // 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
            const newState = { ...state, [key]: value };

            // 상태값 갱신
            setState(newState);

            // 갱신된 상태값 확인
            console.log(newState);

            // hook 함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야한다.
        },
        [state]
    );

    /** submit 버튼이 눌렸을 때 호출되는 이벤트 */
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;

        (async () => {
            try {
                await refetch2({
                    data: {
                        name: current.name.value,
                        sex: current.sex.value,
                        age: current.age.value,
                        sibsp: current.sibsp.value,
                        parch: 0,
                        pclass: current.pclass.value,
                        cabin: current.cabin.value,
                        ticket: current.ticket.value,
                        fare: current.fare.value,
                        embarked: current.embarked.value,
                        survived: current.survived.value,
                    },
                });
            } catch (e) {
                console.error(e);
            } finally {
                refetch();
            }
        })();

        current.name.value = "";
        current.sex.value = "";
        current.age.value = "";
        current.sibsp.value = "";
        current.pclass.value = "";
        current.cabin.value = "";
        current.ticket.value = "";
        current.fare.value = "";
        current.embarked.value = "";
        current.survived.value = "";
    }, []);

    /** 에러가 발생했다면 에러 메시지를 표시한다. */
    if (error) {
        console.error(error);

        // 컴포넌트 자체가 함수이고, 함수가 실행 도중 리턴을 하므로
        // 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다.

        return (
            <div>
                <h1>Oops~!! {error.code} Error.</h1>
                <hr />
                <p>{error.message}</p>
            </div>
        );
    }

    /** 메인 화면 구성 */
    return (
        <div>
            {/* 로딩바 */}
            <Spinner visible={loading} />

            <form onSubmit={onSubmit}>
                <label htmlFor='name' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>이름</label>
                | <input type="text" id='name' name="name" placeholder="승객이름" />
                <br />
                
                <label style={{textAlign:'center', display: 'inline-block', width: '80px'}}>성별</label>
                | <input type="radio" name="sex" value="male" checked />
                    남성
                    <input type="radio" name="sex" value="female" />
                    여성
                <br />
                <label htmlFor='age' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>나이</label>
                | <input type="number" id='age' name="age" min="1" max="100" placeholder="나이" />
                <br />
                <label htmlFor='sibsp' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>동승자수</label>
                | <input type="number" id='sibsp' name="sibsp" placeholder="동승자수" />
                <br />
                <label htmlFor='pclass' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>객실등급</label>
                | <input type="number" id='pclass' name="pclass" placeholder="객실등급" />
                <br />
                <label htmlFor='cabin' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>방 호수</label>
                | <input type="text" id='cabin' name="cabin" placeholder="방 호수" />
                <br />
                <label htmlFor='ticket' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>티켓번호</label>
                | <input type="text" id='ticket' name="ticket" placeholder="티켓번호" />
                <br />
                <label htmlFor='fare' style={{textAlign:'center', display: 'inline-block', width: '80px'}}>요금</label>
                | <input type="number" id='fare' name="fare" placeholder="요금" />
                <br />
                <label style={{textAlign:'center', display: 'inline-block', width: '80px'}}>탑승지</label>
                | <input type="radio" id='1' name="embarked" value="C" />
                    <label htmlFor='1'>셰르부르</label>
                    <input type="radio" id='2' name="embarked" value="Q" />
                    <label htmlFor='2'>퀸즈타운</label>
                    <input type="radio" id='3' name="embarked" value="S" />
                    <label htmlFor='3'>사우샘프턴</label>
                
                <br />
                <label style={{textAlign:'center', display: 'inline-block', width: '80px'}}>생존여부</label>
                <label>
                | <input type="radio" name="survived" value="true" />
                    생존
                </label>
                <label>
                    <input type="radio" name="survived" value="false" />
                    사망
                </label>
                <br />
                <button type="submit" style={{position:'relative', left:'80px', marginTop:'20px', padding:'10px', width: '100px'}}>추가</button>
            </form>

            {/* 검색조건 드롭다운 박스 */}
            <SelectContainer>
                <select name="sex" onChange={onSelectChange}>
                    <option value="">--성별 성택 --</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>

                <select name="embarked" onChange={onSelectChange}>
                    <option value="">-- 탑승지 선택 --</option>
                    <option value="C">셰르부르</option>
                    <option value="Q">퀸즈타운</option>
                    <option value="S">사우샘프턴</option>
                </select>

                <select name="survived" onChange={onSelectChange}>
                    <option value="">-- 생존여부 선택 --</option>
                    <option value="true">생존</option>
                    <option value="false">사망</option>
                </select>
            </SelectContainer>

            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동승자 수</th>
                        <th>객실등급</th>
                        <th>방 호수</th>
                        <th>티켓번호</th>
                        <th>요금</th>
                        <th>탑승지</th>
                        <th>생존여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map(({ id, name, survived, pclass, sex, age, sibsp, parch, ticket, fare, cabin, embarked }, i) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <ColorText sex={sex} />
                                    </td>
                                    <td>{age}</td>
                                    <td>{sibsp + parch}</td>
                                    <td>{pclass}등석</td>
                                    <td>{cabin}</td>
                                    <td>{ticket}</td>
                                    <td>{fare}</td>
                                    <td>
                                        <EmbarkedBox embarked={embarked} />
                                    </td>
                                    <td>
                                        <SurvivedBox survived={survived} />
                                    </td>
                                </tr>
                            );
                        })}
                    ;
                </tbody>
            </Table>
        </div>
    );
};

export default Titanic;
