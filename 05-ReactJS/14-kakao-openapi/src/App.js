import React, {memo} from 'react';
import Top from './components/Top';
import {Routes, Route} from 'react-router-dom';
import KakaoSearch from './pages/KakaoSearch';

const App = memo(() => {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/:api" element={<KakaoSearch/>}/>
      </Routes>
    </div>
  );
});

export default App;
