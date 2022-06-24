/**
 * @filename: ErrorView.js
 * @description: 에러메시지 표시를 위한 컴포넌트
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from 'react';

const ErrorView = memo(({error}) => {
    return (
        <div>
            <h1>Oops~!!! {error.code} Error.</h1>
            <hr />
            <p>{error.message}</p>
        </div>
    );
});

export default ErrorView;