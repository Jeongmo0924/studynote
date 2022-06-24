/**
 * @filename: App.js
 * @description: 페이지 시작점
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React, { memo } from 'react';
import Top from './components/Top';
import Covid19 from './pages/Covid19';
import {Routes, Route} from 'react-router-dom';

// 컴포넌트 최적화를 위한 memo
const App = memo(() => {
  return (
    <div>
      <Top />
      <Routes>
        {/* path파라미터로 각 링크별 field를 설정 */}
        <Route path="/:field/*" element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;