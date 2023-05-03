import React from "react";
import { errorLogModel } from "../../Interfaces";
import { error } from "console";

interface Props{
    error :errorLogModel,
}

function ErrorDetailsModal(props: Props) {
  const time = new Date(props.error.logged).toLocaleTimeString();
  const date = new Date(props.error.logged).toLocaleDateString();
  const formatedDate = time + " " + date;

  return (
    <div>
      {" "}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${props.error.id}`}
      >
        Show Details
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`exampleModal${props.error.id}`}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Id: {props.error.id} Date: {formatedDate}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">

              <div className="col-10 offset-1">
                <div className="m-1" >
                    <span className="text-warning">Callsite:  </span><span>{props?.error?.callsite}</span>
                </div>

                <div className="m-1" >
                    <span className="text-warning">Id:  </span><span>{props?.error?.id}</span>
                </div>

                <div className="m-1" >
                    <span className="text-warning">Level:  </span><span>{props?.error?.level}</span>
                </div>

                <div className="m-1">
                    <span className="text-warning">Message:  </span><span>{props?.error?.message}</span>
                </div>

                <div className="m-3 border">
                    <span className="text-danger">Exception:  </span><span>{props?.error?.exception}</span>
                </div>
                </div>
              </div>
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
  );
}

export default ErrorDetailsModal;
