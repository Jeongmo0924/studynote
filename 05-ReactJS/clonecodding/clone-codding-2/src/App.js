import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
