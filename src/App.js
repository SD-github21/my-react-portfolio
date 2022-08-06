import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import heroImage from './assets/images/hero-bg.jpg';

import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundImage: `url(${heroImage})`}}> 
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
