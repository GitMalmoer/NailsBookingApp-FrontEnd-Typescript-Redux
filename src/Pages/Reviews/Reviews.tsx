import React, {useEffect, useState} from 'react'
import "./reviews.css"
import { Post } from '../../Components/Reviews'
import { useGetPostsQuery } from '../../API/blogApi'
import postModel from '../../Interfaces/postModel';

function Reviews() {

	const {data,isLoading,isSuccess} = useGetPostsQuery(null);
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		if(!isLoading && data)
		{
			console.log(data);
			setPostList(data.result);
		}

	},[isLoading])

  return (
    <div>	
	<div className="container-fluid my-5">
		<div className="row">
			<div className="col-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="btn btn-sm btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div className="col-6">

				{/* <!--- Post Form Begins --> */}
                <section className="card" >
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
                                    <textarea className="form-control" autoComplete="off" id="message" rows={3} placeholder="What are you thinking..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div className="mt-2 text-end">
                        	<button type="submit" className="btn btn-primary">share</button>
                        </div>
                    </div>
                </section>
                {/* <!--- Post Form Ends --> */}

				{/* <!-- Post Begins --> */}
				{data && !isLoading ? <>{postList?.map((post : postModel) => {
					return <Post key={post.id} post = {post}/>
				})}</> : <>No posts</>}
                
                {/* <!-- Post Ends --> */}

				
			</div>
			<div className="col-3">
				<div className="card">
					<div className="card-body p-3">
						<h5 className="card-title m-0">Friends</h5>
						<div className="list-group list-group-flush">
							<a href="#" className="list-group-item list-group-item-action text-primary">
							Justo moto pani
							</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Harry consectetur</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Dobi leo risus</a>
							<a href="#" className="list-group-item list-group-item-action text-primary">Gadot facilisis in</a>
							<a href="#" className="btn btn-sm btn-primary">View All</a>
						</div>
					</div>
				</div>
				<div className="card mt-4">
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
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Reviews