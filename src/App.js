import React from 'react';
import './App.css';
import photo7 from './Images/photo7.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Details from './Components/Details';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${photo7})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: 'fixed'
    }}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Details/>}/>
        <Route path='/home' element={<Details/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
