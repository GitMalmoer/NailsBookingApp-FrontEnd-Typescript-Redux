import React, {useState} from 'react'
import resetPasswordImg from "../../Assets/send_reset_password.svg";
import { useForgotUserPasswordMutation } from '../../API/authApi';
import apiResponse from '../../Interfaces/apiResponse';
import { useNavigate } from 'react-router-dom';
import { MiniLoader } from '../../Components/Common';

function ForgotPassword() {
const navigate = useNavigate();
const [forgotUserPassword] = useForgotUserPasswordMutation();
const [emailInput, setEmailInput] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [dataLoading, setDataLoading] = useState(false);

const handleEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    setErrorMessage("");
}

const handleForgotPassword = async (e : React.FormEvent<HTMLFormElement>) => {
  setDataLoading(true);
e.preventDefault();
const response : apiResponse = await forgotUserPassword({
    email: emailInput,
});

if (response.data?.isSuccess)
{
  navigate("/success/Email with reset password link has been sent.")
}
else
{
  setErrorMessage("Error Data provided is invalid");
}

console.log(response);
setDataLoading(false);
}

  return (
    <div className="py-4 px-3 px-md-0" style={{ background: "#F2F6FA" }}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card panel-default">
            <div className="card-body">
              <div className="text-center">
                <img
                  src={resetPasswordImg}
                  alt="car-key"
                ></img>
                <h2 className="text-center">Forgot Password?</h2>
                <p>
                  Provide us with an email and we will send you reset password
                  link
                </p>
                <form
                  id="register-form"
                  role="form"
                  autoComplete="off"
                  className="form"
                  onSubmit={(e) => handleForgotPassword(e)}
                >
                  <div className="col-md-6 offset-md-3 control has-icons-left">
                      <input
                        placeholder="Email"
                        className="input"
                        type="text"
                        value={emailInput}
                        onChange={(e) => handleEmailInput(e)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                  </div>
                  
                  <div className="p-3">
                  {dataLoading ? <MiniLoader/> : <button
                      className="btn btn-primary form-control w-25"
                      type="submit"
                    >Send</button> }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword