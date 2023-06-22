import React from "react";
import payment from "../../Assets/Manicoure/mani2.svg";

function Pricing() {
  return (
    <div className="conatiner">
      <div className="row align-items-center">
      <div className="col-12 col-md-5 offset-md-1">
          <img src={payment}/>
        </div>
        <div className="col-12 col-md-5 offset-md-1 p-3 m-0 m-md-3">
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
                <td>Nail extension with regular polish</td>
              </tr>
              <tr>
                <th scope="row">450:-</th>
                <td>Nail extension with shellac</td>
              </tr>
              <tr>
                <th scope="row">400:-</th>
                <td>Nail reinforcement of natural nails with regular polish</td>
              </tr>
              <tr>
                <th scope="row">350:-</th>
                <td>Completion, refill with regular polish</td>
              </tr>
              <tr>
                <th scope="row">350:-</th>
                <td>Pedicure with regular polish</td>
              </tr>
              <tr>
                <th scope="row">100:-</th>
                <td>Nail repair</td>
              </tr>
              <tr>
                <th scope="row">30:-/st</th>
                <td>Decoration</td>
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
