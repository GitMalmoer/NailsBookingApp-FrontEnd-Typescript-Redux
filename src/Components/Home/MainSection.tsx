import React from "react";
import "./MainSection.css";
import Typewriter from "typewriter-effect";

let pazy1 = require("../../Assets/pazywhite1.jpg");
let manicure1 = require("../../Assets/manicure1.jpg");
let leaf1 = require("../../Assets/Leaf-1.png");
let leaf2 = require("../../Assets/leaf-2.png");
let leaf3 = require("../../Assets/leaf-3.png");

function MainSection() {
  return (
    <div>
      <div className="firstSection row">
        <div className="MainContainer1 col-12 col-md-7 d-flex justify-content-center align-items-center">
          <div style={{ width: "70%", textAlign: "left" }}>
            <h1 className="text-slanted" style={{ fontSize: "4rem" }}>
              Give Your Nails
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Style",
                      "Love",
                      "A Treat",
                      "Power",
                      "Modern Look",
                      "Elegance",
                      "Beauty",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              vel ipsa explicabo minima iure saepe neque quaerat voluptatibus
              accusantium expedita?
            </p>

            <div className="firstSectionButtons">
              <a
                className="btn btn-primary me-2"
                style={{ borderRadius: 0 }}
                href="/bookappointment"
              >
                Book Appointment
              </a>
              <button
                className="btn btn-outline-primary"
                style={{ borderRadius: 0 }}
              >
                Our Service
              </button>
            </div>

            <div className="leaves">
              <img src={leaf1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 p-0 d-none d-md-block ">
          <div className="MainPicContainer">
            <img src={pazy1} alt="pazy" className="MainPic1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
