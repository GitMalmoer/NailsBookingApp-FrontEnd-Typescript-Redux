import React, { useState } from 'react'
import resetPasswordImg from "../../Assets/send_reset_password.svg";
import { useLocation } from 'react-router-dom';
import { useResetUserPasswordMutation } from '../../API/authApi';
import apiResponse from '../../Interfaces/apiResponse';
import { inputHelper } from '../../Helper';


function ResetPassword() {
   const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const [resetPassword] = useResetUserPasswordMutation();

  const [userInput, setUserInput] = useState({
    email:"",
    password:"",
    confirmPassword:"",
  });

  const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e,userInput);
    setUserInput(tempData);
  }

  const resetPasswordClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(token)
    {
      const response : apiResponse = await resetPassword({
        password: userInput.password,
        confirmPassword: userInput.confirmPassword,
        token: token,
        email: userInput.email,
      });
      console.log(response);
    }
  }

  return (
    <div className=" py-4" style={{ background: "#F2F6FA" }}>
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card panel-default">
          <div className="card-body">
            <div className="text-center">
              <img
                src={resetPasswordImg}
                alt="lockImg"
              ></img>
              <h2 className="text-center">Reset password</h2>
              <p>
                Here you will reset your password
              </p>
              <form
                id="register-form"
                autoComplete="off"
                className="form"
                onSubmit={(e) => resetPasswordClick(e)}
              >
                    <div className="col-md-6 offset-md-3 control has-icons-left mb-1">
                      <input
                        placeholder="Email"
                        className="input"
                        type="text"
                        name='email'
                        onChange={(e) => handleUserInput(e)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                  </div>

                <div className="col-md-6 offset-md-3 control has-icons-left">
                    <input
                      placeholder="Password"
                      className="input"
                      type="password"
                      name='password'
                      onChange={(e) => handleUserInput(e)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                </div>

                <div className="col-md-6 offset-md-3 control has-icons-left mt-1">
                    <input
                      placeholder="Confirm Password"
                      className="input"
                      type="password"
                      name='confirmPassword'
                      onChange={(e) => handleUserInput(e)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                </div>
                
                <div className="p-3">
                  <button
                    className="btn btn-primary form-control w-25"
                  >Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResetPassword