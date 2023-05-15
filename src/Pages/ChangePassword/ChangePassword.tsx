import React, { useState } from 'react'

import resetPasswordImg from "../../Assets/send_reset_password.svg";
import { inputHelper } from '../../Helper';
import { useChangeUserPasswordMutation } from '../../API/authApi';
import userMustBeLogged from '../../HOC/userMustBeLogged';
import apiResponse from '../../Interfaces/apiResponse';
import { useSelector } from 'react-redux';
import { RootState } from '../../Storage/Redux/store';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const emptyUserInput = {
        oldPassword:"",
        password:"",
        confirmPassword:"",
    }

    const [userInput, setUserInput] = useState({...emptyUserInput});
      const [changeUserPassword] = useChangeUserPasswordMutation();
      const [errorMessages, setErrorMessages] = useState<string[]>([])
      const [successMessage, setSuccessMessage] = useState("");
      const navigate = useNavigate();

      const userData = useSelector((state:RootState) => state.userAuthStore);

      const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const tempData = inputHelper(e,userInput);
        setUserInput(tempData);
        setErrorMessages([]);
        setSuccessMessage("");
      }

      const changePasswordClick = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response: apiResponse = await changeUserPassword({
          email: userData?.Email,
          oldPassword: userInput?.oldPassword,
          newPassword: userInput?.password,
          confirmNewPassword: userInput?.confirmPassword,
        });

        if(response.data?.isSuccess)
        {
            setSuccessMessage("Password changed sucessfully");
            setErrorMessages([]);
            // using spread operator to not modify original object - emptyUserInput object
            setUserInput({...emptyUserInput});
        }
        else if(response?.error?.data?.errors)
        {
            let errorsArray = [];
            let errors : string[] = Object.values(response?.error.data.errors)
            for(const err of errors)
            {
                let currentError = err[0] ?? "validation error"
                errorsArray.push(currentError);
            }
            setSuccessMessage("");
            setErrorMessages(errorsArray);
        }else if(response.error?.data?.errorMessages)
        {
            let errorArray = response.error?.data?.errorMessages;
            setErrorMessages(errorArray);
            setSuccessMessage("");
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
              <h2 className="text-center">change password</h2>
              <p>
                Here you will change your password
              </p>
              <form
                autoComplete="off"
                className="form"
                onSubmit={(e) => changePasswordClick(e)}
              >
                    <div className="col-md-6 offset-md-3 control has-icons-left mb-1">
                      <input
                        placeholder="Old Password"
                        className="input"
                        type="password"
                        value={userInput.oldPassword}
                        name='oldPassword'
                        onChange={(e) => handleUserInput(e)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                  </div>

                <div className="col-md-6 offset-md-3 control has-icons-left">
                    <input
                      placeholder="New Password"
                      className="input"
                      type="password"
                      value={userInput.password}
                      name='password'
                      onChange={(e) => handleUserInput(e)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                </div>

                <div className="col-md-6 offset-md-3 control has-icons-left mt-1">
                    <input
                      placeholder="Confirm New Password"
                      className="input"
                      type="password"
                      value={userInput.confirmPassword}
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
                    type='submit'
                  >Change</button>
                  <button 
                  className='btn btn-secondary ms-1'
                  type='button'
                  onClick={() => navigate("/profile")}>
                    Go back
                  </button>
                </div>

                <div >
                    {errorMessages && errorMessages.map((error,index) => {
                        return <p key={index} className='text-danger'>{error}</p>
                    })}
                </div>
                <div>
                    {successMessage && <p className='text-success'>{successMessage}</p>}
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

export default userMustBeLogged(ChangePassword);