import React from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import Section from './components/Section';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;

