import React from 'react'

function Footer() {
  return (
    <div>
        {/* <!-- Footer --> */}
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* <!-- Section: Social media --> */}
      
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section> */}


      {/* <!-- Section: Social media --> */}
    {/*  */}
      {/* <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start pt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}
    
            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
    
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>

            </div>
            {/* <!-- Grid column --> */}
    
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Karlskoga, Sandtorpsvägen 3A</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                kkmuk87@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> 072 833 42 26</p>
              {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}
    
      {/* <!-- Copyright --> */}
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" style={{textDecoration: "none"}} href="https://www.linkedin.com/in/marcin-junka-611b07263/"> Marcin Junka Fullstack Website Development</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    {/* <!-- Footer --> */}
    </div>
  )
}

export default Footer