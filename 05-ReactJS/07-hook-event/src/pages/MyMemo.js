import React from 'react';
import dayjs from 'dayjs';

const MyMemo = () => {
    // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
    React.useEffect(() => console.clear(), []);

    const day = dayjs();

    // 파라미터로 전달되는 단어의 길이를 반환하는 함수 --> 처리비용이 매우 큰 함수를 가정함
    const getLength = w => {
        console.log('getLength(%s) 호출됨! :::: %s', w, day.format('YY/MM/DD hh/mm/ss.ms'));
        return w.length;
    };

    // 처리할 단어들
    const words = ['City', 'Eye', 'Apple', 'Apple', 'Orange'];

    // 버튼이 눌려진 횟수
    const [myCount, setMyCount] = React.useState(0);

    // 배열의 탐색 위치
    const [myIndex, setMyIndex] = React.useState(0);

    // 출력할 글자
    const [myWord, setMyWord] = React.useState(words[myIndex]);

    const myLen = React.useMemo(() => {
        return getLength(myWord);
    }, [getLength, myWord]);
    return (
        <div>
            <h2>MyMemo</h2>
            <p>
                {myIndex}번째 단어 "{myWord}"의 길이 : {myLen}
            </p>
            <button
                onClick = {() => {
                    const next = (myIndex+1) % words.length;
                    setMyIndex(next);
                    setMyCount(myCount + 1);
                    setMyWord(words[next]);
                }}>
                버튼클릭({myCount})
            </button>
        </div>
    );
};

export default MyMemo;