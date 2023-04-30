import React from "react";
import postModel from "../../../Interfaces/postModel";
import { time } from "console";
import Comment from "../Comment/Comment";

interface Props {
  post: postModel;
}

function Post(props : Props) {
  console.log(props);

  const fullName = props.post.applicationUserName +" "+ props.post.applicationUserLastName;



  const calculateTimeAgo = () => {
    const datePosted : any = new Date().getTime() - new Date(props.post.createDateTime).getTime();
    const daysAgo: number = Math.floor(datePosted / (24 * 60 * 60 * 1000));
    const hoursAgo: number = Math.floor((datePosted % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutesAgo: number = Math.floor((datePosted % (60 * 60 * 1000)) / (60 * 1000));

    let timeAgo: string;
    if(daysAgo > 0)
    {
      timeAgo = `${daysAgo} days ago`;
    }
    else if(hoursAgo > 0)
    {
      timeAgo = `${hoursAgo}h ${minutesAgo}m ago`;
    }
    else
    {
      timeAgo = `${minutesAgo}m ago`;
    }
    return timeAgo;
  }

  const calculateLikeCount = () => {
    const likes = props?.post?.likes?.length;
    if(likes > 0)
    {
      return likes;
    }
    else
    {
      return 0;
    }
  }

  const calculateCommentsCount = () => {
    const comments = props?.post?.comments?.length;
    if(comments > 0)
    {
      return comments;
    }
    else
    {
      return 0;
    }
  }

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
                  <h2 className="text-capitalize h5 mb-0">{fullName}</h2>
                </a>
                <p className="small text-secondary m-0 mt-1">{calculateTimeAgo()}</p>
              </div>
            </div>
          </div>

          {/* <!-- post body --> */}
          <div className="">
            <p className="my-2">
              {props.post.content}
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
                    <i className="far fa-thumbs-up"></i> {calculateLikeCount()} Like
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
                    <i className="fas fa-comment-alt"></i> {calculateCommentsCount()} Comment
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
              <Comment/>
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
