/**
 * @filename: App.js
 * @description: 컴포넌트 렌더링
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from 'react';
// Reset.css 모듈 사용
import {Reset} from 'styled-reset';
import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';
// header 부분만 이미지 링크를 props로 전달해보았음
import data from './header_data';

const App = () => {
  return (
    <div>
      <Reset />
      <Header data={data.header}/>
      <Content />
      <Footer />
    </div>
  );
};

export default App;