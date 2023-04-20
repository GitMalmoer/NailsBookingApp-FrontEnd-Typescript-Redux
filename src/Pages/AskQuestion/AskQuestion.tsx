import React from "react";
import messageImg from "../../Assets/inbox.svg"

function AskQuestion() {
  return (
    <div className="row">
      <h1>Ask Me Anything!</h1>
      <div className="col-12 col-lg-4 col-md-6  offset-lg-2"><img src={messageImg} alt="" /></div>
      <div className="col-12 col-lg-4 col-md-6 p-5" style={{textAlign:"left"}}>
        {" "}
        <form action="https://formspree.io/email@example.com" method="POST">
          <div className="field">
            <label className="label ">Name</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Ex. Jane Smith"
                name="Name"
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
                name="Email"
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
                className="textarea"
                placeholder="Textarea"
                name="Message"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <button className="button submit-button is-link w-25">
                Submit&nbsp;&nbsp;
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
