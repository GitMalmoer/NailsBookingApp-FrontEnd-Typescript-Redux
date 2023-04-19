import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
let logo = require("../../Assets/logotransp.png");

function Login() {
    let navigate = useNavigate();

  return (
    <div className="login">
      {" "}
      <section className="hero is-success ">
        <div className="hero-body col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4" >
          <div className="text-center">
            <div className="">
              <h3 className="p-0 m-0 text-black" style={{fontWeight:600}}>Login</h3>
              <hr className="login-hr" />
              <p className="subtitle m-0 p-0 has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <figure className="avatar">
                  <img src={logo} style={{ width: "150px", height: "150px" }} />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">
                    Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>

                  <HashLink className="button is-block is-primary is-large is-fullwidth mt-2" to="/home/#maincomponent">
                    Go Back <i className="fa fa-home" aria-hidden="true"></i>
                  </HashLink>
                </form>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
