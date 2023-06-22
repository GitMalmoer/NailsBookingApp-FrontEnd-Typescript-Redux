import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Typewriter from "typewriter-effect";
import "./Home.css";

import image from "../../Images/undraw_Camera_re_cnp4.svg";
import manicoure from "../../Assets/Manicoure/mani4.svg";
import map from "../../Assets/undraw_map_dark_re_36sy.svg";
import certification from "../../Assets/certification.svg";
import MainSection from "../../Components/Home/MainSection";
import OurServices from "../../Components/Home/OurServices";
import MapToNails from "../../Components/Map/MapToNails";
let KasiaPic = require("../../Assets/ImageCropped.jpeg");

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row" id="maincomponent">
        <MainSection />
      </div>

      <div className="container-md row pt-5">
        <div className="col-12 col-md-8 offset-md-4 col-lg-5 offset-lg-1 ">
          <div data-aos="fade-left" className="col-12">
            <figure className="image is-square">
              <img src={manicoure} alt="" />
            </figure>
          </div>
        </div>
        <div className="col-12 col-md-8 offset-md-4 col-lg-5 offset-lg-1 pt-5">
          <div data-aos="fade-down" className="col-12">
            <h1 className="titled mb-md-4 text-center text-lg-start">About Me</h1>
            <div className="mb-4 text-center text-lg-start">
              <img
                src={KasiaPic}
                style={{ borderRadius: "100%", maxWidth: "150px" }}
                alt=""
              />
            </div>
            <h2 className="subtitled subtitle ">
              Welcome to my world of nail care and beauty! I am Kate, a
              dedicated professional with an unyielding passion for manicures
              and pedicures. For the past five years, I have poured my heart and
              soul into perfecting my craft, and I am thrilled to share my
              journey with you.
            </h2>
          </div>
        </div>
      </div>

      {/* qualificatons section */}
      <div className="container-md row pt-5">
        {/* qualifications image */}
        <div
          data-aos="fade-left"
          className="col-12 col-md-8 offset-md-4 col-lg-5 offset-lg-1 p-5 order-md-2"
        >
          <figure className="image is-square">
            <img src={certification} alt="qualificationsImage" />
          </figure>
        </div>

        {/* qualifications text */}
        <div
          data-aos="fade-down"
          className="col-12 col-md-8 offset-md-4 col-lg-5 offset-lg-1 mt-5 pt-5 order-md-1"
        >
          <h1 className="titled mb-6 text-center">Qualifications</h1>
          <h2 className="subtitled subtitle">
            I attend regullary to nail making courses to keep my knowledge up to
            date with latest trends and techniques. With this knowledge you have
            warranty that you will leave my salon happy and satisfied.
          </h2>
        </div>
      </div>

      <OurServices />

      <div className="row p-3 p-lg-0 mt-0 mt-lg-5">
        {/* FIND US IN KARLSKOGA START */}
        <div
          data-aos="fade-right"
          className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-1 pt-5 text-center text-md-start"
        >
          <h1
            style={{ fontFamily: "Merriweather, serif" }}
            className="display-3"
          >
            Find us in Karlskoga!
          </h1>
          <h4 className="" style={{ color: "#4a4a4a" }}>
            We are located at Sandtorpsvägen 3A
          </h4>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Show Map
          </button>
        </div>
        {/* map svg */}
        <div
          data-aos="fade-down"
          className="col-8 offset-2 col-md-8 offset-md-2 col-lg-4 offset-lg-1 p-3 mt-3"
        >
          <figure>
            <img src={map} alt="" />
          </figure>
        </div>
        {/* map svg */}
        {/* FIND US IN KARLSKOGA END */}
      </div>


      {/* <!-- Modal --> */}
      <div className="row">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl w-100 ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Map
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <MapToNails />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="zoom-in-up" className="column is-8">
                <h1 className="title titled is-1 mb-6">
                  Nails that will
                  <Typewriter
                    options={{
                      strings: [
                        "Make You Beautiful",
                        "Boost Up Your Confidence!",
                        "Make You smile!",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>

                <h2 className="subtitle subtitled">Vi Sees!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
