import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import heroImage from './assets/images/hero-bg.jpg';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundImage: `url(${heroImage})`}}> 
      <Header></Header>
      <main>
        <Portfolio></Portfolio>
        <About ></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
