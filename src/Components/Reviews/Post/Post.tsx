import React, { useState } from "react";
import postModel from "../../../Interfaces/postModel";
import { time } from "console";
import CommentList from "../Comment/CommentList";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { userModel } from "../../../Interfaces";
import {
  useDeletePostMutation,
  useHandleLikeMutation,
} from "../../../API/blogApi";
import apiResponse from "../../../Interfaces/apiResponse";
import { useUpdatePostMutation } from "../../../API/blogApi";
import { inputHelper } from "../../../Helper";

interface Props {
  post: postModel;
  loggedInUser: userModel;
}

function Post(props: Props) {
  const fullName =
    props.post.applicationUserName + " " + props.post.applicationUserLastName;
  const postId: number = props?.post?.id;
  const [isEditing, setIsEditing] = useState(false);
  const [handleLike] = useHandleLikeMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [userInput, setUserInput] = useState({
    editInput: props?.post?.content,
  });

  const calculateTimeAgo = () => {
    const datePosted: any =
      new Date().getTime() - new Date(props.post.createDateTime).getTime();
    const daysAgo: number = Math.floor(datePosted / (24 * 60 * 60 * 1000));
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
    const likes = props?.post?.likes?.length;
    if (likes > 0) {
      return likes;
    } else {
      return 0;
    }
  };

  const calculateCommentsCount = () => {
    const comments = props?.post?.comments?.length;
    if (comments > 0) {
      return comments;
    } else {
      return 0;
    }
  };

  const handleLikeClick = async () => {
    if (props.loggedInUser.Id) {
      const response: apiResponse = await handleLike({
        applicationUserId: props.loggedInUser.Id,
        postId: props.post.id,
        commentId: 0,
      });
      console.log(response);
    } else {
      console.log("You have to log in");
    }
  };

  const handleDeleteclick = async () => {
    const response: apiResponse = await deletePost({
      applicationUserId: props.loggedInUser.Id,
      postId: props.post.id,
    });

    console.log(response);
  };

  const editInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleEditClick = async () => {
    setIsEditing(true);
  };

  const handleEdit = async () => {
    if (userInput.editInput.length >= 300) {
      setErrorMessage("Content cannot be longer than 300 letters.");
      return null;
    }
    const response: apiResponse = await updatePost({
      postId: postId,
      applicationUserId: props.loggedInUser.Id,
      content: userInput.editInput,
    });

    if (response.data?.isSuccess) {
      setIsEditing(false);
      setErrorMessage("");
      //setUserInput((state) => ({ ...state, editInput: "" }));
    } else {
      setErrorMessage("There was an error during post update");
    }

    console.log(response);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setErrorMessage("");
    setUserInput((state) => ({...state, editInput:props.post.content}));
  };

  return (
    <div>
      {/* <!-- Post Begins --> */}
      <section className="card mt-4">
        <div className="border p-2">
          {props.post.applicationUserId == props.loggedInUser.Id ? (
            <>
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a
                    className="dropdown-item text-primary"
                    onClick={() => handleEditClick()}
                  >
                    Edit whole post
                  </a>
                  <a
                    className="dropdown-item text-primary"
                    onClick={() => handleDeleteclick()}
                  >
                    Delete whole post
                  </a>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {/* <!-- post header --> */}
          <div className="row">
            <div className="d-flex">
              <a className="text-decoration-none">
                <img
                  className=""
                  src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                  width="50"
                  height="50"
                  alt="profileImg"
                />
              </a>

              <div className="flex-grow-1 pl-2">
                <a className="text-decoration-none">
                  <h2 className="text-capitalize h5 mb-0">{fullName}</h2>
                </a>
                <p className="small text-secondary m-0 mt-1">
                  {calculateTimeAgo()}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- post body --> */}
          <div className="">
            <div className="my-2">
              {/* IF IS EDITING */}
              {isEditing ? (
                <>
                  <div>
                    {errorMessage && (
                      <p className="text-danger">{errorMessage}</p>
                    )}
                    <textarea
                      className="form-control"
                      placeholder="Edit Content"
                      name="editInput"
                      value={userInput.editInput}
                      onChange={(e) => editInputChange(e)}
                    />
                    <div className="mt-1 d-flex justify-content-center">
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit()}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger ms-1"
                        onClick={() => handleCancelEdit()}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>{props.post.content}</>
              )}
              {/* END IF IS EDITING END */}
            </div>
          </div>
          <hr className="my-1" />
          {/* <!-- post footer begins --> */}
          <footer className="">
            {/* <!-- post actions --> */}
            <div className="">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
                  <a
                    onClick={() => handleLikeClick()}
                    className="small text-decoration-none"
                  >
                    <i className="far fa-thumbs-up"></i> {calculateLikeCount()}{" "}
                    Like
                  </a>
                </li>
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0">
                  <a
                    className="small text-decoration-none"
                    data-bs-toggle="collapse"
                    href={`#collapseExample${props.post.id}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`collapseExample${props.post.id}`}
                  >
                    <i className="fas fa-comment-alt"></i>{" "}
                    {calculateCommentsCount()} Comment
                  </a>
                </li>
                <li className="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0 ">
                  <a className="small text-decoration-none" href="#">
                    <i className="fas fa-share"></i> Share
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- collapsed comments begins --> */}
            <CommentList postId={postId} loggedInUser={props.loggedInUser} />
            {/* <!-- collapsed comments ends --> */}
          </footer>
          {/* <!-- post footer ends --> */}
        </div>
      </section>
      {/* <!-- Post Ends --> */}
    </div>
  );
}

export default Post;
