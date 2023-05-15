import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useConfirmEmailMutation } from "../../API/authApi";
import apiResponse from "../../Interfaces/apiResponse";

function ConfirmEmail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const userId = searchParams.get("user");
  const [confirmEmail] = useConfirmEmailMutation();
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleConfirmEmail = async () => {
    setSuccessMessage("");
    setErrorMessage("");
    if (token && userId) {
      const response: apiResponse = await confirmEmail({
        userId: userId,
        token: token,
      });

      if(response.data?.isSuccess)
      {
        setSuccessMessage("Email confirmed successfully");
      }
      else
      {
        setErrorMessage("There was an error during email confirmation. Click email in your link and try again.")
      }
    }
  };

  return (
    <div style={{ background: "#F2F6FA" }}>
      <div className="container p-3 d-flex justify-content-center">
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Email Confirmation</h5>
            <p className="card-text">
              Thank you for confirming your email. Click the button bellow.
            </p>
            {successMessage && <p className="text-success">{successMessage}</p>}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button className="btn btn-primary" onClick={() => handleConfirmEmail()}>
              Click here to confirm email
            </button>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;

//http://localhost:3000/confirmemail?token=hello&user=broooother
