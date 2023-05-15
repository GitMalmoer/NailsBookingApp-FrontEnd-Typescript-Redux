import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Typewriter from "typewriter-effect";
import "./Home.css"

import image from "../../Images/undraw_Camera_re_cnp4.svg";
import manicoure from "../../Assets/Manicoure/mani4.svg";
import map from "../../Assets/undraw_map_dark_re_36sy.svg";
import certification from "../../Assets/certification.svg"
import MainSection from "../../Components/Home/MainSection";
import OurServices from "../../Components/Home/OurServices";
import MapToNails from "../../Components/Map/MapToNails";
let KasiaPic = require("../../Assets/ImageCropped.jpeg");

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="row" id="maincomponent">
        <MainSection />
      </div>

      <div className="container row pt-5">
        <div className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 ">
          <div data-aos="fade-left" className="col-12">
            <figure className="image is-square">
              <img src={manicoure} alt="" />
            </figure>
          </div>
        </div>
        <div className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 pt-5">
          <div data-aos="fade-down" className="col-12">
            <h1 className="titled mb-md-4">About Me</h1>
            <div className="mb-4">
              <img
                src={KasiaPic}
                style={{ borderRadius: "100%", maxWidth: "150px" }}
                alt=""
              />
            </div>
            <h2 className="subtitled subtitle">
              Welcome to my world of nail care and beauty! I am Kate, a
              dedicated professional with an unyielding passion for manicures
              and pedicures. For the past five years, I have poured my heart and
              soul into perfecting my craft, and I am thrilled to share my
              journey with you.
            </h2>
          </div>
        </div>
      </div>

      {/* <!-- Hero  product --> */}
      {/* <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div
                className="column
          is-10-mobile 
          is-10-tablet 
          is-5-desktop 
          is-5-widescreen 
          is-5-fullhd "
                data-aos="fade-down"
              >
                <h1 className="title titled is-1 mb-6">
                  Evolving business with technology
                </h1>
                <div className="buttons">
                  <button className="button is-yellow">
                    Esablished technical teams
                  </button>
                  <button className="button">Less-technical teams</button>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="column
          is-10-mobile 
          is-10-tablet 
          is-4-desktop 
          is-7-widescreen 
          is-4-fullhd is-offset-1-fullhd"
              >
                <figure className="image is-square">
                  <img src={image} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* qualificatons section */}

      <div className="container row pt-5">
        {/* qualifications image */}
        <div
          data-aos="fade-left"
          className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 p-5 order-md-2"
        >
          <figure className="image is-square">
            <img src={certification} alt="qualificationsImage" />
          </figure>
        </div>

        {/* qualifications text */}
        <div
          data-aos="fade-down"
          className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 mt-5 pt-5 order-md-1"
        >
          <h1 className="titled mb-6">Qualifications</h1>
          <h2 className="subtitled subtitle">
            I attend regullary to nail making courses to keep my knowledge up to
            date with latest trends and techniques. With this knowledge you have
            warranty that you will leave my salon happy and satisfied.
          </h2>
        </div>
      </div>

      <OurServices />

      <div className="row container p-5 mt-lg-5">
        <div
          data-aos="fade-right"
          className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 pt-5"
        >
          <h1 className="title titled is-1 ">Find us in Karlskoga!</h1>
          <h4 className="" style={{color:"#4a4a4a"}}>
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

        <div
          data-aos="fade-down"
          className="col-md-8 offset-md-4 col-lg-5 offset-lg-1 p-3 mt-3"
        >
          <figure >
            <img src={map} alt="" />
          </figure>
        </div>
      </div>

      {/* <div className="mapToNails" style={{height:"500px", width:"500px"}}>
      <MapToNails/>
      </div> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
            <div className="modal-body"><MapToNails/></div>
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
