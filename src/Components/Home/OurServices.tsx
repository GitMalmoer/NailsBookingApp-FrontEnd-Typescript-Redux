import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./OurServices.css"
let pazy2 = require("../../Assets/pazy2.jpg");
let pazy3 = require("../../Assets/pazy3.jpg");
let pazy4 = require("../../Assets/pazy4.jpg");
let pazy5 = require("../../Assets/pazy5.jpg");
let pedicure = require("../../Assets/pedicure1.jpg");

function OurServices() {
    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div className="row px-5" >
        <h1 className="our-services-heading">Our Services</h1>
      <div className="col-12 col-md-4 my-2 " data-aos="fade-left">
        <div className="card" style={{ width: "18rem;" }}>
          <img className="card-img-top" style={{maxHeight:"292px",width:"auto"}} src={pazy2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Manicoure long</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 my-2" data-aos="fade-up">
        <div className="card" style={{ width: "18rem;" }}>
          <img className="card-img-top" style={{maxHeight:"292px",width:"auto"}} src={pazy3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Manicour hybrid</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 my-2" data-aos="fade-right">
        <div className="card" style={{width: "18rem;" }}>
          <img className="card-img-top" style={{maxHeight:"292px",width:"auto"}} src={pedicure} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Pedicure</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Click Here For Full Offer
            </a>
          </div>
        </div>
      </div>




    </div>

    
  );
}

export default OurServices;
