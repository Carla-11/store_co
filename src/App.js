import Productos from './components/Productos';
import NavBar from './components/NavBar';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Productos/>
      <Footer/>
    </div>
  );
}

export default App;
