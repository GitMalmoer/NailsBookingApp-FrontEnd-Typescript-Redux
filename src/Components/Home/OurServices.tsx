import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./OurServices.css";
import { NavLink } from "react-router-dom";
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
    <div className="row px-5" id="ourServices">

      <h1 className="our-services-heading text-center">Our Services</h1>

      <div className="col-12 col-md-4 my-2 " data-aos="fade-left">
        <div className="card h-100">
          <img
            className="card-img-top"
            style={{ height:"55%", objectFit:"cover" }}
            src={pazy2}
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column justify-content-between">

            <div>
            <h5 className="card-title">Manicure long</h5>
            <p className="card-text">Longer nails on a tips or gel.</p>
            </div>

            <NavLink to="/pricing" className="btn btn-primary">
              Click Here For Full Offer
            </NavLink>
          </div>

        </div>
      </div>

      <div className="col-12 col-md-4 my-2" data-aos="fade-up">
        <div className="card h-100">
          <img
            className="card-img-top"
            style={{ height:"55%", objectFit:"cover" }}
            src={pazy3}
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
            <h5 className="card-title">Manicure hybrid</h5>
            <p className="card-text">
              Natural nails, with gel hybrid and beautiful design.
            </p>
            </div>

            <NavLink to="/pricing" className="btn btn-primary">
              Click Here For Full Offer
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 my-2" data-aos="fade-right">
        <div className="card h-100">
          <img
            className="card-img-top"
            style={{ height:"55%", objectFit:"cover"}}
            src={pedicure}
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
            <h5 className="card-title">Pedicure</h5>
            <p className="card-text">Basic gel pedicure with design.</p>
            </div>
            <NavLink to="/pricing" className="btn btn-primary">
              Click Here For Full Offer
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
