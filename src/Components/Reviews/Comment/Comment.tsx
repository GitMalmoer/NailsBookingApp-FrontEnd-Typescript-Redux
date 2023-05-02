import React from 'react'
import { userModel } from '../../../Interfaces';
import commentModel from '../../../Interfaces/commentModel';
import { useDeleteCommentMutation, useHandleLikeMutation } from '../../../API/blogApi';
import apiResponse from '../../../Interfaces/apiResponse';

interface Props {
    comment: commentModel,
    loggedInUser : userModel,
  }

function Comment(props : Props) {

   const [handleLike] = useHandleLikeMutation();
   const [deleteComment] = useDeleteCommentMutation();

    const fullName =
    props.comment?.applicationUserName +
    " " +
    props.comment?.applicationUserLastName;

  const calculateTimeAgo = () => {
    const datePosted: any =
      new Date().getTime() -
      new Date(props.comment?.createDateTime).getTime();
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
    const count = props.comment?.likes?.length;

    if (count > 0) {
      return count;
    } else {
      return 0;
    }
  };

    const handleLikeClick = async () => {
      if(props.loggedInUser.Id)
      {
        const response : apiResponse = await handleLike({
          applicationUserId: props.loggedInUser.Id,
          postId: 0,
          commentId: props.comment.id,
      });
      }
      else{
        console.log("You have to log in")
      }
  }

  const handleDeleteClick = async () => {
    if(props.loggedInUser.Id)
    {
      const response : apiResponse = await deleteComment({
        applicationUserId: props.loggedInUser.Id,
        commentId: props.comment.id,
      });
      console.log(response);
    }
  }


  return (
    <section key={props.comment.id} >
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
                        {props.comment.applicationUserId == props.loggedInUser.Id ? <><div>
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
                        </div></> : <></>}
                        
                      </div>
                      {/* <!-- comment header --> */}
                      {/* <!-- comment body --> */}
                      <div className="card-body p-0">
                        <p className="card-text h7 mb-1">
                          {props.comment?.commentContent}
                        </p>
                        <a style={{textDecoration:"none"}} onClick={() => handleLikeClick()} className="card-link small" >
                          <i className="far fa-thumbs-up"></i>{" "}
                          {calculateLikeCount()} Like
                        </a>
                      </div>
                    </div>
                  </section>
  )
}

export default Comment