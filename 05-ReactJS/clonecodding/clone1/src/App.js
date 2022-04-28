import React from 'react';
import { Link, Routes, Route} from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import './assets/scss/common.scss'

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
