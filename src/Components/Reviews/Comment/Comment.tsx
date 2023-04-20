import React from "react";

function Comment() {
  return (
    <div>
      {/* <!-- Post Begins --> */}
      <section className="card mt-4">
        <div className="border p-2">
          <div
            className="dropdown"
            style={{ position: "absolute", right: "15px", top: "5px" }}
          >
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

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item text-primary" href="#">
                Edit whole post
              </a>
              <a className="dropdown-item text-primary" href="#">
                Delete whole post
              </a>
            </div>
          </div>
          {/* <!-- post header --> */}
          <div className="row">
            <div className="d-flex">
              <a className="text-decoration-none" href="#">
                <img
                  className=""
                  src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                  width="50"
                  height="50"
                  alt="..."
                />
              </a>

              <div className="flex-grow-1 pl-2">
                <a className="text-decoration-none" href="#">
                  <h2 className="text-capitalize h5 mb-0">Shushant Singh</h2>
                </a>
                <p className="small text-secondary m-0 mt-1">1 day ago</p>
              </div>
            </div>
          </div>

          {/* <!-- post body --> */}
          <div className="">
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
              erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus
              sol licitudin venenatis. Praesent et sem urna. Integer vitae
              lectus nis l. Fusce sapien ante, tristique efficitur lorem et,
              laoreet ornare lib ero. Nam fringilla leo orci. Vivamus semper
              quam nunc, sed ornare magna dignissim sed. Etiam interdum justo
              quis risus efficitur dictum. Nunc ut pulvinar quam. N unc mollis,
              est a dapibus dignissim, eros elit tempor diam, eu tempus quam
              felis eu velit.
            </p>
          </div>
          <hr className="my-1" />
          {/* <!-- post footer begins --> */}
          <footer className="">
            {/* <!-- post actions --> */}
            <div className="">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
                  <a className="small text-decoration-none" href="#">
                    <i className="far fa-thumbs-up"></i> 20 Like
                  </a>
                </li>
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0">
                  <a
                    className="small text-decoration-none"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fas fa-comment-alt"></i> 40 Comment
                  </a>
                </li>
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0 ">
                  <a className="small text-decoration-none" href="#">
                    <i className="fas fa-share"></i> 90 Share
                  </a>
                </li>
              </ul>
            </div>

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
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
          </footer>
          {/* <!-- post footer ends --> */}
        </div>
      </section>
      {/* <!-- Post Ends --> */}
    </div>
  );
}

export default Comment;
