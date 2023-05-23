import React, { useState } from "react";
import messageImg from "../../Assets/inbox.svg";
import { useSendMessageMutation } from "../../API/questionApi";
import { inputHelper } from "../../Helper";
import { MiniLoader } from "../../Components/Common";
import apiResponse from "../../Interfaces/apiResponse";

function AskQuestion() {
  const [SendMessage] = useSendMessageMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [sucessMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [userInputMessage, setUserInputMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleUserInput = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const tempData = inputHelper(e,userInputMessage);
    setUserInputMessage(tempData);
    setErrorMessage([]);
    setSuccessMessage("");
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const response : apiResponse = await SendMessage({
      name: userInputMessage.name,
      email: userInputMessage.email,
      message: userInputMessage.message,
    });

    if(response.data)
    {
      setSuccessMessage("Your message has been sent");
    }
    else if (response?.error?.data?.errors)
    {
      const errorsArrays : string[] = Object.values(response.error.data.errors);

      const errors = [];
      for (const err of errorsArrays) {
        let currentError = err[0];
        errors.push(currentError);
      }
      
      setErrorMessage(errors);
    }
    setIsLoading(false);
  };

  return (
    <div className="row">
      <h1 className="text-center">Ask Me Anything!</h1>
      <div className="col-12 col-lg-4 col-md-6  offset-lg-2">
        <img src={messageImg} alt="" />
      </div>
      <div
        className="col-12 col-lg-4 col-md-6 p-5"
        style={{ textAlign: "left" }}
      >
        {" "}
        <form onSubmit={(e) => handleSubmit(e)} method="POST">
          <div className="field">
            <label className="label ">Name</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Ex. Jane Smith"
                name="name"
                onChange={(e) => handleUserInput(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="Ex. hello@arctheme.com"
                name="email"
                onChange={(e) => handleUserInput(e)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
              onChange={(e) => handleUserInput(e)}
                className="textarea"
                placeholder="Textarea"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <button
                type="submit"
                className="button submit-button is-link w-25"
                disabled = {isLoading}
              >
                {isLoading ? <MiniLoader/> : <span>Submit{'\u00A0'}<i className={` fas fa-paper-plane`}></i></span> }
              </button>
              {sucessMessage && <p className="text-success ms-1">{sucessMessage}</p>}
              {errorMessage && errorMessage.map((error,index) => {
                return <p className="text-danger m-0" key={index}>{error}</p>;
              })}
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
