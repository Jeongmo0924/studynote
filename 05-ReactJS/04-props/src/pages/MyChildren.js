import React from 'react';
import MyChildrenSub from '../components/MyChildrenSub';
import Meta from '../components/Meta';

const MyChildren = () => {
    return (
        <div>
            <Meta title="MyChildren.js" description="여기는 MyChildren.js파일 입니다." url={window.location.href} />

            <h2>MyChildren</h2>

            {/* props전달시 문자열 이외의 데이터 타입은 {}로 묶어야 함 */}
            <MyChildrenSub width={400} height={100}><b>Hello World</b></MyChildrenSub>
            <MyChildrenSub width={300} height={80}>안녕 React</MyChildrenSub>
            <MyChildrenSub width={200} height={50} />
        </div>
    )
}

export default MyChildren;