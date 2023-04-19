import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import "./Home.css"

import image from "../../Images/undraw_Camera_re_cnp4.svg";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* <!-- NavBar va a todo lo ancho --> */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt=""
            />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">WHY?</a>

            <a className="navbar-item">BUY</a>

            <a className="navbar-item">ILLUSTRATION SERIES</a>

            <a className="navbar-item">EXCLUSIVE ILLUSTRATIONS</a>
          </div>
        </div>
      </nav>

      {/* <!-- Hero del producto --> */}
      <section className="hero is-white is-fullheight">
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
                  absurd illustrations that make sense
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
                  absurd illustrations that make sense
                </h1>
                <h2 className="subtitle subtitled">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum cupiditate dolorum vitae dolores nesciunt totam magni
                  quas.
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
                  <img src={image}  alt="" />
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
                  <Typewriter
                    options={{
                      strings: ["Best Welders ", "In the world"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>

                <h2 className="subtitle subtitled">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum cupiditate dolorum vitae dolores nesciunt totam magni
                  quas. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.
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
