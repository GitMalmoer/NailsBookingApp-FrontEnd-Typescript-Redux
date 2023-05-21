import React, {useEffect, useState} from 'react'
import "./reviews.css"
import { Post } from '../../Components/Reviews'
import { useCreatePostMutation, useGetPostsQuery } from '../../API/blogApi'
import postModel from '../../Interfaces/postModel';
import createPostModel from '../../Interfaces/createPostModel';
import apiResponse from '../../Interfaces/apiResponse';
import { useSelector } from 'react-redux';
import { RootState } from '../../Storage/Redux/store';
import { userModel } from '../../Interfaces';
import MainLoader from '../../Components/Common/MainLoader';


function Reviews() {

	const {data,isLoading,isSuccess} = useGetPostsQuery(null);
	const [postList, setPostList] = useState([]);
	const [createPost] = useCreatePostMutation();
	const [postContent, setPostContent] = useState("");
	const loggedInUser = useSelector((state : RootState) => state.userAuthStore);

	useEffect(() => {
		if(!isLoading && data)
		{
			setPostList(data.result);
			console.log(data.result);
		}
	},[isLoading,data])

	const handleChangePostContent = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
		setPostContent(e.target.value);
	}

	const handleCreatePost = async (e : React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(loggedInUser.Id)
		{
			const response :apiResponse = await createPost({
				applicationUserId :loggedInUser.Id,
				content :postContent,
			});
			console.log(response);
			if(response.data?.isSuccess)
			{
				setPostContent("");
			}
		}
		else
		{
			console.log("you need to log in");
		}
		
	}

  return (
    <div>	
	<div className="container-fluid my-5">
		<div className="row ">
			<div className="col-md-3 mb-3 mb-md-0">
				<div className="card ">
					<div className="card-body">
						<h5 className="card-title">Make a post</h5>
						<h6 className="card-subtitle mb-2 text-muted">A right place to ask</h6>
						<p className="card-text">Here you can leave a review, ask a question, or write whatever you have on your mind about our nail service!</p>
					</div>
				</div>
			</div>
			<div className="col-md-6">

				{/* <!--- Post Form Begins --> */}
                <section className="card" >
					<form onSubmit={(e) => handleCreatePost(e)}>
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-bs-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a Post</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="message">post</label>
                                    <textarea value={postContent} onChange={(e) => handleChangePostContent(e)} className="form-control" autoComplete="off" id="message" rows={3} placeholder="What are you thinking..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div className="mt-2 text-end">
                        	<button type='submit' className="btn btn-primary">share</button>
                        </div>
                    </div>
					</form>
                </section>
                {/* <!--- Post Form Ends --> */}

				{/* <!-- Post Begins --> */}
				{data && !isLoading ? <>{postList?.map((post : postModel) => {
					return <Post key={post.id} post = {post} loggedInUser = {loggedInUser}/>
				})}</> : <><MainLoader/></>}
                
                {/* <!-- Post Ends --> */}
			</div>
			<div className="col-3">
				<div className="card">
					<div className="card-body p-3">
						<h5 className="card-title m-0">Rules</h5>
						<div className="list-group list-group-flush">
							<a href="#" className="list-group-item list-group-item-action text-primary">
							Keep your questions simple!
							</a>
							<a className="list-group-item list-group-item-action text-primary">Be polite!</a>
							<a  className="list-group-item list-group-item-action text-primary">Don't give out personal information!</a>
							<a  className="list-group-item list-group-item-action text-primary border-bottom-0">No commercial posts!</a>
							<a  className="btn btn-sm btn-primary rounded-pill">Have fun!</a>
						</div>
					</div>
				</div>
				{/* <div className="card mt-4">
					<div className="card-body p-3">
						<h5 className="card-title m-0">Users</h5>
						<div className="list-group list-group-flush">
							<a href="#" className="list-group-item list-group-item-action text-primary">
							Cras justo odio
							</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Dapibus ac facilisis in</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Morbi leo risus</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Porta ac consectetur ac</a>
							<a href="#" className="btn btn-sm btn-primary">View All</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	</div>
</div>
  )
}

export default Reviews