import React from 'react';
// import logo from './logo.svg';
import './App.css';
import heroImage from './assets/images/hero-bg.jpg';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundImage: `url(${heroImage})`}}> 
      <Header></Header>
      <main>
        <About ></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
