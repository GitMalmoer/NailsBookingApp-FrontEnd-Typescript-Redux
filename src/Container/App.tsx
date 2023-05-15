import React, {useEffect, useState} from 'react';
import './App.css';
import Home from '../Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import BookAppointment from '../Pages/BookAppointment/BookAppointment';
import Header from '../Components/Layout/Header';
import OurServices from '../Components/Home/OurServices';
import Footer from '../Components/Layout/Footer';
import Login from '../Pages/LogIn/Login';
import Register from '../Pages/Register/Register';
import AskQuestion from '../Pages/AskQuestion/AskQuestion';
import Reviews from '../Pages/Reviews/Reviews';
import AdminPanel from '../Pages/AdminPanel/AdminPanel';
import NotFound from '../Pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Storage/Redux/store';
import { setLoggedInUser } from '../Storage/Redux/userAuthSlice';
import jwtDecode from 'jwt-decode';
import { userModel } from '../Interfaces';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import AccessDenied from '../Pages/AccessDenied/AccessDenied';
import Profile from '../Pages/Profile/Profile';
import MainLoader from '../Components/Common/MainLoader';
import ChangePassword from '../Pages/ChangePassword/ChangePassword';
import ConfirmEmail from '../Pages/ConfirmEmail/ConfirmEmail';
import Pricing from '../Pages/Pricing/Pricing';

function App() {
  const userData = useSelector((state:RootState) => state.userAuthStore);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const localStorageToken : any = localStorage.getItem("token");
    console.log("App has been rendered")
    if(localStorageToken)
    {
      const {ConfirmedEmail,Email,Id,LastName,Name,role} : userModel = jwtDecode(localStorageToken);
      dispatch(setLoggedInUser({ConfirmedEmail,Email,Id,LastName,Name,role}));
    }
    setIsLoading(false);
  },[])

  if (isLoading) {
    console.log("loading")
    return <div><MainLoader/></div>
  }

const smth = () => {
  console.log(userData);
}
  return (
    <div className="App">
    <Header />
      {/* <button style={{position:"absolute"}} onClick={() => smth()}>asdsa</button> */}
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/bookappointment" element={<BookAppointment />}></Route>
       <Route path='/test' element={<OurServices/>} /> 
       <Route path='/login' element={<Login/>} /> 
       <Route path='/register' element={<Register/>} /> 
       <Route path='/askquestion' element={<AskQuestion/>} /> 
       <Route path='/reviews' element={<Reviews/>} /> 
       <Route path='/pricing' element={<Pricing/>} /> 
       <Route path='/adminpanel' element={<AdminPanel/>} /> 
       <Route path='/profile' element={<Profile/>} /> 
       <Route path='/forgotpassword' element={<ForgotPassword/>} /> 
       <Route path='/resetpassword/token/:token?' element={<ResetPassword/>} /> 
       <Route path='/accessdenied' element={<AccessDenied/>} /> 
       <Route path='/changepassword' element={<ChangePassword/>} /> 
       <Route path='/confirmemail' element={<ConfirmEmail/>} /> 
       <Route path='*' element={<NotFound/>} /> 
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
