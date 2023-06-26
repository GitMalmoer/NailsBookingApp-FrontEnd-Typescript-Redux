import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useLoginUserWithGoogleMutation } from "../../API/authApi";
import googleLoginResponse from "../../Interfaces/googleLoginResponse";
import { apiResponse, userModel } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../Storage/Redux/userAuthSlice";
import { useNavigate } from "react-router-dom";
import toastNotify from "../../Helper/toastNotify";



function GoogleLoginBtn() {
  const [loginUserWithGoogle] = useLoginUserWithGoogleMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSuccess = async (credentialResponse: CredentialResponse) => {
    const userCredentials: googleLoginResponse = jwt_decode(
      credentialResponse.credential!
    );

    console.log(userCredentials);

    const response: apiResponse = await loginUserWithGoogle({
      email: userCredentials.email,
      firstName: userCredentials.given_name,
      lastName: userCredentials.family_name,
      emailConfirmed: userCredentials.email_verified,
      externalSubjectId: userCredentials.sub,
    });

    if (response.data) {
      const token = response.data.result;
      if (token) {
        localStorage.setItem("token", token);
        const { Id, Name, ConfirmedEmail, Email, LastName, role }: userModel =
        jwt_decode(token);
        dispatch(
          setLoggedInUser({
            Id,
            Name,
            ConfirmedEmail,
            Email,
            LastName,
            role,
          })
        );
        navigate("/#mainsection");
      }
      console.log(response);
    }
    else
    {
      console.log("Error xd")
      toastNotify("Error during Google Login - Try again.")
    }

  };

  return (
    <div className="mb-2 d-flex justify-content-center w-100">
      <GoogleLogin
        shape="pill"
        onSuccess={(credentialResponse) => {
          handleOnSuccess(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
}

export default GoogleLoginBtn;
