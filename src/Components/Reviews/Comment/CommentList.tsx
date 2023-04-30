import React, { useEffect, useState } from "react";
import { useGetCommentsByIdQuery, useHandleLikeMutation } from "../../../API/blogApi";
import commentModel from "../../../Interfaces/commentModel";
import { userModel } from "../../../Interfaces";
import apiResponse from "../../../Interfaces/apiResponse";

interface Props {
    postId: number,
    loggedInUser :userModel,
  }


function Comment(props: Props) {
  const { data, isLoading } = useGetCommentsByIdQuery(props.postId);
  const [commentsList, setCommentsList] = useState<commentModel[]>([]);
//   const [handleLike] = useHandleLikeMutation();

  useEffect(() => {
    if (!isLoading && data) {
      setCommentsList(data.result);
    }
  }, [isLoading,data]);

//   const handleLikeClick = async () => {
//     const response : apiResponse = await handleLike({
//         applicationUserId: props.loggedInUser.Id,
//         postId: 0,
//         commentId: 0,
//     });
//   }

  return (
    <>
      {" "}
      {/* <!-- collapsed comments begins --> */}
      <div className="collapse" id={`collapseExample${props.postId}`}>
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
          {/* MAP FUNCTION BEGINS  */}
          {commentsList &&
            commentsList.map((comment: commentModel) => {
              const fullName =
                comment?.applicationUserName +
                " " +
                comment?.applicationUserLastName;

              const calculateTimeAgo = () => {
                const datePosted: any =
                  new Date().getTime() -
                  new Date(comment?.createDateTime).getTime();
                const daysAgo: number = Math.floor(
                  datePosted / (24 * 60 * 60 * 1000)
                );
                const hoursAgo: number = Math.floor(
                  (datePosted % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
                );
                const minutesAgo: number = Math.floor(
                  (datePosted % (60 * 60 * 1000)) / (60 * 1000)
                );

                let timeAgo: string;
                if (daysAgo > 0) {
                  timeAgo = `${daysAgo} days ago`;
                } else if (hoursAgo > 0) {
                  timeAgo = `${hoursAgo}h ${minutesAgo}m ago`;
                } else {
                  timeAgo = `${minutesAgo}m ago`;
                }
                return timeAgo;
              };

              const calculateLikeCount = () => {
                const count = comment?.likes?.length;

                if (count > 0) {
                  return count;
                } else {
                  return 0;
                }
              };

              return (
                  <section key={comment.id} >
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
                            {fullName}
                          </a>
                          <p className="small m-0 text-muted">
                            {calculateTimeAgo()}
                          </p>
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
                              <a
                                className="dropdown-item text-primary"
                                href="#"
                              >
                                Edit
                              </a>
                              <a
                                className="dropdown-item text-primary"
                                href="#"
                              >
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
                          {comment?.commentContent}
                        </p>
                        <a onClick={() => handleLikeClick()} className="card-link small" href="#">
                          <i className="far fa-thumbs-up"></i>{" "}
                          {calculateLikeCount()} Like
                        </a>
                      </div>
                    </div>
                  </section>
              );
            })}
            {/* MAP FUNCTION ENDS  */}
          {/* <!-- comment card ends --> */}
        </div>
      </div>
      {/* <!-- collapsed comments ends --> */}
    </>
  );
}

export default Comment;
