import React, { useEffect, useState } from "react";
import "./register.css";
import Typewriter from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import { inputHelper } from "../../Helper";
import { useRegisterUserMutation } from "../../API/authApi";
import apiResponse from "../../Interfaces/apiResponse";
import { useNavigate } from "react-router-dom";

const facts = [
  "Manicure comes from the Latin words for 'hand' and 'care.'",
  "Pedicure comes from the Latin words for 'foot' and 'care.'",
  "Egyptians created the first manicure tools.",
  "Michelle Ménard invented the first colored nail polish in the early 20th century.",
  "Pedicures can improve foot health.",
  "Popular nail shapes for women include round, square, oval, almond, and stiletto.",
  "Lee Redmond holds the world record for the longest fingernails ever recorded.",
  "Henna is used to decorate nails in some cultures.",
  "Gel and acrylic nail treatments provide a longer-lasting finish.",
  "Manicures and pedicures promote relaxation and reduce stress.",
  "Fish pedicures involve using Garra rufa fish to nibble away dead skin.",
  "Nail art is a popular trend in some countries.",
  "Massaging the hands and feet can improve circulation and relieve muscle tension.",
  "Manicures and pedicures can strengthen weak, brittle nails.",
  "Some nail products contain harmful chemicals.",
  "French manicures remain a classic, timeless look.",
  "Nail color was used to signify social status in ancient Greece and Rome.",
  "Manicures and pedicures can express individuality and creativity.",
  "Regular manicures and pedicures prevent foot and nail problems.",
  "Manicures and pedicures discourage nail biting.",
];
function Register() {
  const [text, flags] = useTypewriter({
    words: facts,
    loop: false,
    typeSpeed: 50,
    deleteSpeed: 40,
  });
  const { isDelete, isType, isDelay, isDone } = flags;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleRegister = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const response: apiResponse = await registerUser({
      email: userInput.email,
      name: userInput.name,
      lastName: userInput.lastName,
      confirmPassword: userInput.confirmPassword,
      password: userInput.password,
    });

    if (response?.data?.isSuccess) {
      navigate("/success/Register successfull. Activation link has been sent");
    } else if (response?.error?.data?.errors) {

      const errorsArrays = Object.keys(response.error.data.errors).map((key) => ({
        name: key,
        value: response.error.data.errors[key],
      }));

      const errors = [];
      for (const err of errorsArrays) {
        let currentError = err.value[0];
        errors.push(currentError);
      }

      setErrorMessage(errors);
    } else if (response?.error?.data?.errorMessages) {
      let currentError = response.error.data.errorMessages[0];
      setErrorMessage([currentError]);
    }

  };

  useEffect(() => {
    if (errorMessage) {
    }
  }, [errorMessage]);

  return (
    <div className="register-comp ">
      <section className="container py-5">
        <div className="col-lg-8 offset-lg-2 col-12 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-1">Did you know?</h1>
              <h2 className="subtitle colored is-4">
                There are some interesting facts about manicure:
              </h2>
              <p>{text}</p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">Sign up</h1>
              <p className="description">
                Be a member today!
              </p>
              <form onSubmit={(e) => handleRegister(e)}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => handleUserInput(e)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => handleUserInput(e)}
                      name="lastName"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => handleUserInput(e)}
                      name="email"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => handleUserInput(e)}
                      name="password"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      onChange={(e) => handleUserInput(e)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="button is-block is-primary is-fullwidth is-medium"
                >
                  Submit
                </button>
                <br />
                <small>
                  {errorMessage && errorMessage?.map((error,index) => {
                    return <div className="text-danger" key={index}>{error}</div>
                  })}
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;

{
  /* <div className="column is-8 is-offset-2">
            <br />
             <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-facebook"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-github"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="level-right">
            <small className="level-item" text-white-50>
              &copy; Super Cool Website. All Rights Reserved.
            </small>
          </div>
        </nav> 
          </div>*/
}
