import React from "react";
import payment from "../../Assets/Manicoure/mani2.svg";

function Pricing() {
  return (
    <div className="conatiner">
      <div className="row align-items-center">
      <div className="col-12 col-md-5 offset-md-1">
          <img src={payment}/>
        </div>
        <div className="col-12 col-md-5 offset-md-1 p-3 m-3">
          {/* card start */}
          <table className="table table-bordered table-hover border">
            <thead>
              <tr>
                <th className="w-25">Price</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">400:-</th>
                <td>Nagelförlängning med vanlig lack</td>
              </tr>
              <tr>
                <th scope="row">450:-</th>
                <td>Nagelförlängning med shellac</td>
              </tr>
              <tr>
                <th scope="row">400:-</th>
                <td>Nagelförstarkning av egna naglar med vanlig lack</td>
              </tr>
              <tr>
                <th scope="row">350:-</th>
                <td>kompletering, påfyllning med vanlig lack</td>
              </tr>
              <tr>
                <th scope="row">350:-</th>
                <td>pedikyr med vanlig lack</td>
              </tr>
              <tr>
                <th scope="row">100:-</th>
                <td>lagning av nagel</td>
              </tr>
              <tr>
                <th scope="row">30:-/st</th>
                <td>dekoration</td>
              </tr>
            </tbody>
          </table>
          {/* card end */}
        </div>
       
      </div>
    </div>
  );
}

export default Pricing;
