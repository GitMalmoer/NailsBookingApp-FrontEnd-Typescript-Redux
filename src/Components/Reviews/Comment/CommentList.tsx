import React, { useEffect, useState } from "react";
import { useAddCommentMutation, useGetCommentsByIdQuery, useHandleLikeMutation } from "../../../API/blogApi";
import commentModel from "../../../Interfaces/commentModel";
import { userModel } from "../../../Interfaces";
import apiResponse from "../../../Interfaces/apiResponse";
import Comment from "./Comment";
import toastNotify from "../../../Helper/toastNotify";

interface Props {
    postId: number,
    loggedInUser :userModel,
  }

function CommentList(props: Props) {
  const { data, isLoading } = useGetCommentsByIdQuery(props.postId);
  const [commentsList, setCommentsList] = useState<commentModel[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [addComment] = useAddCommentMutation();


  useEffect(() => {
    if (!isLoading && data) {
      setCommentsList(data.result);
    }
  }, [isLoading,data]);

  const handleCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  }

  const handleAddComment = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(props.loggedInUser.Id)
    {
      const response : apiResponse = await addComment({
        postId : props.postId,
        applicationUserId : props.loggedInUser.Id,
        commentContent: commentInput,
      });
      setCommentInput("");
    }
    else
    {
      toastNotify("You must log in!","error");
    }
 
  }

  return (
    <>
      {" "}
      {/* <!-- collapsed comments begins --> */}
      <div className="collapse" id={`collapseExample${props.postId}`}>
        <div className="card border border-right-0 border-left-0 border-bottom-0 mt-1">
          {/* <!-- new comment form --> */}
          <section className="m-2">
            <form onSubmit={(e) => handleAddComment(e)}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Comment"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={commentInput}
                  onChange={(e) => handleCommentInput(e)}
                />
                <button
                  className="text-decoration-none text-white btn btn-primary"
                  role="button"
                  type="submit"
                >
                  Comment
                </button>
              </div>
            </form>
          </section>
          {/* <!-- comment card bgins --> */}
          {/* MAP FUNCTION BEGINS  */}
          {commentsList &&
            commentsList.map((comment: commentModel) => {
              return <Comment key={comment.id} comment = {comment} loggedInUser = {props.loggedInUser}/>;
            })}
            {/* MAP FUNCTION ENDS  */}
          {/* <!-- comment card ends --> */}
        </div>
      </div>
      {/* <!-- collapsed comments ends --> */}
    </>
  );
}

export default CommentList;
