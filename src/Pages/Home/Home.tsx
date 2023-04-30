import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import "./Home.css"

import image from "../../Images/undraw_Camera_re_cnp4.svg";
import manicoure from "../../Assets/Manicoure/mani4.svg";
import map from "../../Assets/undraw_map_dark_re_36sy.svg";
import MainSection from "../../Components/Home/MainSection";
import OurServices from "../../Components/Home/OurServices";
let KasiaPic = require("../../Assets/ImageCropped.jpeg")


function Home() {
  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <div>
      <div  className="row" id="maincomponent">
    <MainSection/>
      </div>

      <div className="row"></div>

      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered">
              <div
                data-aos="fade-left"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
              >
                <figure className="image is-square">
                  <img src={manicoure}  alt="" />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              >
                <h1 className="titled ">
                  About Me
                </h1>
                <div className="mb-4"><img src={KasiaPic} style={{borderRadius:"100%", maxWidth:"150px"}} alt="" /></div>
                <h2 className="subtitled subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum cupiditate dolorum vitae dolores nesciunt totam magni
                  quas.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero del producto --> */}
      <section className="hero is-white is-fullheight" >
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
      </section>

      <section className="hero is-white is-fullheight" >
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered">
              <div
                data-aos="fade-left"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
              >
                <figure className="image is-square">
                  <img src={image}  alt="" />
                </figure>
              </div>
              <div
                data-aos="fade-down"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              >
                <h1 className="titled title is-1 mb-6">
                  About Us
                </h1>
                <h2 className="subtitled subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum cupiditate dolorum vitae dolores nesciunt totam magni
                  quas.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurServices/>

      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div
                data-aos="fade-right"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              >
                <h1 className="title titled is-1 mb-6">
                  Find us in Karlskoga!
                </h1>
                <h2 className="subtitle subtitled">
                We are located at Sandtorpsvägen 3A
                  <a href="" className="btn btn-primary text-white" style={{ borderRadius: 0 }}>Click Here To Show Map</a>
                </h2>
              </div>
              <div
                data-aos="fade-down"
                className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
              >
                <figure className="image is-square">
                  <img src={map}  alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div data-aos="zoom-in-up" className="column is-8">
                <h1 className="title titled is-1 mb-6">
                Nails that will
                  <Typewriter
                    options={{
                      strings: ["Make You Beautiful", "Boost Up Your Confidence!","Make You smile!"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>

                <h2 className="subtitle subtitled">
                  Vi Sees!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
