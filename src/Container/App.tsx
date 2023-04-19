import React from 'react';
import './App.css';
import Home from '../Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import BookAppointment from '../Pages/BookAppointment/BookAppointment';
import Header from '../Components/Layout/Header';
import OurServices from '../Components/Home/OurServices';
import Footer from '../Components/Layout/Footer';
import Login from '../Pages/LogIn/Login';
import Register from '../Pages/Register/Register';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/bookappointment" element={<BookAppointment />}></Route>
       <Route path='/test' element={<OurServices/>} /> 
       <Route path='/login' element={<Login/>} /> 
       <Route path='/register' element={<Register/>} /> 
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
