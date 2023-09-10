import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './screen/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScren from './screen/HomeScreen';


function App() {
  

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MainPage/>}/>
            <Route path="/homesc" element={ <HomeScren/>}/>
          </Routes>
        </BrowserRouter>
       

      </div>
    </>
  );
}

export default App;
