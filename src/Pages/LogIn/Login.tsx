import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { inputHelper } from "../../Helper";
import { useLoginUserMutation } from "../../API/authApi";
import apiResponse from "../../Interfaces/apiResponse";
import jwtDecode from "jwt-decode";
import { userModel } from "../../Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../../Storage/Redux/userAuthSlice";
import { RootState } from "../../Storage/Redux/store";
import { NavLink } from "react-router-dom";
import MainLoader from "../../Components/Common/MainLoader";
import { MiniLoader } from "../../Components/Common";
let logo = require("../../Assets/logotransp.png");

function Login() {
    let navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [loginUser] = useLoginUserMutation();
    const [isTyping,setIsTyping] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState({
      email:"",
      password:""
    });


    useEffect(()=>{
      // whenever user is typing clear error messages
      setErrorMessage("");
    },[isTyping == true])

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const tempData = inputHelper(e, userInput)
      setUserInput(tempData);
      setIsTyping(true);
    }

    const handleLogin = async (e:any) =>{
      setLoading(true);
      e.preventDefault();
      setIsTyping(false);
      const response : apiResponse = await loginUser({
        username:userInput.email,
        password:userInput.password
      });

      if(response.data)
      {
        const {token} = response.data.result;
        if(token)
        {
          localStorage.setItem("token",token);
          const {Id,Name,ConfirmedEmail,Email,LastName,role} :userModel = jwtDecode(token);
          dispatch(setLoggedInUser({
            Id,Name,ConfirmedEmail,Email,LastName,role
          }));
          navigate("/#mainsection");
        }
      }

      if(response.error)
      {
        let errorMessage = response.error.data.errorMessages[0];
        setErrorMessage(errorMessage);
      }
      setLoading(false);
    }

  return (
    <div className="login">
      {" "}
      <section className="hero is-success ">
        <div className="hero-body col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="text-center">
            <div className="">
              <div className="box">
                <figure className="avatar">
                  <img src={logo} style={{ width: "150px", height: "150px" }} />
                </figure>
                
                <form onSubmit={(e) => handleLogin(e)}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        onChange={(e) => handleUserInput(e)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                        name="password"
                        onChange={(e) => handleUserInput(e)}
                      />
                    </div>
                    <div>
                    <small className="text-danger">{errorMessage && errorMessage }</small>
                  </div>
                  </div>
                  <button
                    type="submit"
                    className="button is-block is-info is-large is-fullwidth"
                  >
                    {loading ? <><MiniLoader/></> : <>Login<i className="fa fa-sign-in" aria-hidden="true"></i></>} 
                  </button>
                  {/* hashlink is a solution to React Router's issue of not scrolling to #hash-fragments */}
                  <HashLink
                    className="button is-block is-primary is-large is-fullwidth mt-2"
                    to="/home/#maincomponent"
                  >
                    Go Back <i className="fa fa-home" aria-hidden="true"></i>
                  </HashLink>
                </form>
              </div>
              <p className="has-text-grey">
                <NavLink to="/register">Sign Up</NavLink> &nbsp;·&nbsp;
                <NavLink to="/forgotpassword">Forgot Password</NavLink> &nbsp;·&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
