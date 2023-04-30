import React from "react";

function Comment() {
  return (
    <>
      {" "}
      {/* <!-- collapsed comments begins --> */}
      <div className="collapse" id="collapseExample">
        <div className="card border border-right-0 border-left-0 border-bottom-0 mt-1">
          {/* <!-- new comment form --> */}
          <section className="m-2">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Comment"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <a
                  className="text-decoration-none text-white btn btn-primary"
                  href="#"
                  role="button"
                >
                  Comment
                </a>
              </div>
            </form>
          </section>
          {/* <!-- comment card bgins --> */}
          <section>
            <div className="card p-2 m-1">
              {/* <!-- comment header --> */}
              <div className="d-flex">
                <div className="">
                  <a className="text-decoration-none" href="#">
                    <img
                      className="profile-pic"
                      src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                      width="40"
                      height="40"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="flex-grow-1">
                  <a
                    className="text-decoration-none text-capitalize h6 m-0"
                    href="#"
                  >
                    Tarzan
                  </a>
                  <p className="small m-0 text-muted">27 mins ago</p>
                </div>
                <div>
                  <div className="dropdown">
                    <a
                      className=""
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-chevron-down"></i>
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item text-primary" href="#">
                        Edit
                      </a>
                      <a className="dropdown-item text-primary" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- comment header --> */}
              {/* <!-- comment body --> */}
              <div className="card-body p-0">
                <p className="card-text h7 mb-1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="card-link small" href="#">
                  <i className="far fa-thumbs-up"></i> 20 Like
                </a>
              </div>
            </div>
          </section>
          {/* <!-- comment card ends --> */}
        </div>
      </div>
      {/* <!-- collapsed comments ends --> */}
    </>
  );
}

export default Comment;
