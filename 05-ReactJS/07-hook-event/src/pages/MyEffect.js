import React from 'react';
import yeoul from '../assets/img/yeoul.jpg';

const MyEffect = () => {
    // 이미지의 밝기를 위한 상태값
    const [myBrightness, setBrightness] = React.useState(100);

    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수
    const onMyResize = () => setMyWidth(window.innerWidth);

    /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨 */
    React.useEffect(() => {
        console.clear();
        console.log('[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능', new Date());
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, [])

    /** 이 컴포넌트가 화면에 막 등장할 때 + state, props값이 변경될 때마다 실행됨 */
    React.useEffect(() => {
        console.log('[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드될 때 + state, props중 하나라도 변경될 경우 처리되어야 할 기능', new Date());
    })
    
    /** 이 컴포넌트가 화면에 막 등장할 때 + 특정 state, props값이 변경될 때마다 실행됨 */
    React.useEffect(() => {
        console.log('[MyEffect3] %s ::: myBrightness값이 변경됨', new Date());
    }, [myBrightness]);

    /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 */
    React.useEffect(() => {
        return () => {
            console.log('[MyEffect4] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능', new Date());
        }
    })

    return (
        <div>
            <h2>MyEffect</h2>
            <h3>Window Width: {myWidth}</h3>

            <div>
                <input
                    type='range'
                    min='80'
                    max='120'
                    step='1'
                    value={myBrightness}
                    onChange={e => {
                        setBrightness(Number(e.currentTarget.value));
                    }}
                />
            </div>

            <img
                alt='Yeo-ul'
                src={yeoul}
                width='960'
                style={{
                    filter: 'brightness(' + myBrightness + '%)',
                }}
            />

        </div>
    );
};

export default MyEffect;