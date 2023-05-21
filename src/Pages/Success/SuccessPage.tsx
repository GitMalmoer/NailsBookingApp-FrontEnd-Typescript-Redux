import React from "react";
import successimg from "../../Assets/undraw_order_confirmed_re_g0if.svg";
import { useNavigate, useParams } from "react-router-dom";

function SuccessPage() {
  const { message } = useParams<{ message?: string }>();
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3" style={{ height: "70%" }}>
        <div className="text-center">
          <h1 className="text-center">Success!</h1>
        {message && <p className="text-center">{message}</p> }  
        <button onClick={() => navigate("/")} className="btn btn-primary">Go Home</button>
        </div>
        <img src={successimg} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default SuccessPage;
