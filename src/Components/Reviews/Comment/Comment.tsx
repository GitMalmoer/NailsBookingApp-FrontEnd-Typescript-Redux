import React, { useState } from "react";
import { userModel } from "../../../Interfaces";
import commentModel from "../../../Interfaces/commentModel";
import {
  useDeleteCommentMutation,
  useHandleLikeMutation,
  useUpdateCommentMutation,
} from "../../../API/blogApi";
import apiResponse from "../../../Interfaces/apiResponse";
import { inputHelper } from "../../../Helper";
import unknownProfile from "../../../Assets/unknownprofile.svg";
import toastNotify from "../../../Helper/toastNotify";

interface Props {
  comment: commentModel;
  loggedInUser: userModel;
}

function Comment(props: Props) {
  const [handleLike] = useHandleLikeMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [isEditingComment, setIsEditingComment] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userInput, setUserInput] = useState({
    editCommentInput: props?.comment?.commentContent,
  });

  const [updateComment] = useUpdateCommentMutation();

  const fullName =
    props.comment?.applicationUserName +
    " " +
    props.comment?.applicationUserLastName;

    let avatar = props.comment.applicationUserAvatarUri;

    if(!avatar)
    {
      avatar = unknownProfile;
    }

  const calculateTimeAgo = () => {
    const datePosted: any =
      new Date().getTime() - new Date(props.comment?.createDateTime).getTime();
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
    const count = props.comment?.likes?.length;

    if (count > 0) {
      return count;
    } else {
      return 0;
    }
  };

  const handleLikeClick = async () => {
    if (props.loggedInUser.Id) {
      const response: apiResponse = await handleLike({
        applicationUserId: props.loggedInUser.Id,
        postId: 0,
        commentId: props.comment.id,
      });
    } else {
      toastNotify("You must log in!","error");
    }
  };

  const handleDeleteClick = async () => {
    if (props.loggedInUser.Id) {
      const response: apiResponse = await deleteComment({
        applicationUserId: props.loggedInUser.Id,
        commentId: props.comment.id,
      });

      if(response.data?.isSuccess)
      {
        toastNotify("Comment Deleted!","success");
      }
      else
      {
        toastNotify("Error during comment delete!","error");
      }
    }
  };

  const handleEditInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const editCommentClick = () => {
    setIsEditingComment(true);
  };

  const handleEdit = async () => {
    if (userInput.editCommentInput.length >= 300) {
      setErrorMessage("Comment content cannot be longer than 300 letters.");
      toastNotify("Comment content cannot be longer than 300 letters!","error");
      return null;
    }

    const response: apiResponse = await updateComment({
      commentId: props.comment.id,
      applicationUserId: props.loggedInUser.Id,
      commentContent: userInput.editCommentInput,
    });
    if (response.data?.isSuccess) {
      setErrorMessage("");
      setIsEditingComment(false);
      toastNotify("Comment Edited!","success");
    } else {
      setErrorMessage("There was an error during comment update.");
      toastNotify("Error during comment update!","error");
    }
  };

  const handleCancelEdit = () => {
    setIsEditingComment(false);
    setErrorMessage("");
    setUserInput((state) => ({
      ...state,
      editCommentInput: props.comment.commentContent,
    }));
  };

  return (
    <section key={props.comment.id}>
      <div className="card p-2 m-1">
        {/* <!-- comment header --> */}
        <div className="d-flex">
          <div className="">
            <a className="text-decoration-none" href="#">
              <img
                className="profile-pic"
                src={avatar}
                style={{borderRadius:"50%"}}
                width="40"
                height="40"
                alt="profileImg"
              />
            </a>
          </div>
          <div className="flex-grow-1">
            <a className="text-decoration-none text-capitalize h6 m-0" href="#">
              {fullName}
            </a>
            <p className="small m-0 text-muted">{calculateTimeAgo()}</p>
          </div>
          {props.comment.applicationUserId == props.loggedInUser.Id ? (
            <>
              <div>
                <div className="dropdown">
                  <a
                    className=""
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
                      onClick={() => editCommentClick()}
                    >
                      Edit Comment
                    </a>
                    <a
                      className="dropdown-item text-primary"
                      onClick={() => handleDeleteClick()}
                    >
                      Delete Comment
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <!-- comment header --> */}
        {/* <!-- comment body --> */}
        <div className="card-body p-0">
          <div className="card-text h7 mb-1">
            {/* EDIT COMMENT SECTION */}
            {isEditingComment ? (
              <>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <textarea
                  onChange={(e) => handleEditInput(e)}
                  value={userInput.editCommentInput}
                  name="editCommentInput"
                  className="form-control"
                  placeholder="Edit comment"
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
              </>
            ) : (
              <>{props.comment?.commentContent}</>
            )}
            {/* END EDIT COMMENT SECTION END */}
          </div>
          <a
            style={{ textDecoration: "none" }}
            onClick={() => handleLikeClick()}
            className="card-link small"
          >
            <i className="far fa-thumbs-up"></i> {calculateLikeCount()} Like
          </a>
        </div>
      </div>
    </section>
  );
}

export default Comment;
