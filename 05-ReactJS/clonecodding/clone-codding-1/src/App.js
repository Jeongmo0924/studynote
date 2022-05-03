import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
