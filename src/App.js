import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Event from './components/Event';


function App(){
  return(
    <div>
      <Home />
      <Event />
    </div>
  )
};

export default App;
