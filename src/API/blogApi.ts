import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://localhost:7268/api/post/"}),
    tagTypes: ["Posts"],
    endpoints:(builder) => ({
        getPosts : builder.query({
            query: () => ({
                url:"getposts",
                method:"GET",
            }),
            providesTags: ["Posts"],
        }),
        getCommentsById: builder.query({
            query: (id) => ({
                url:`getcommentsbyid/${id}`,
                method: "GET",
            }),
        }),
        createPost: builder.mutation({
            query: (postBody) => ({
                url:"createpost",
                body: postBody,
                method:"POST",
                headers: { "content-type": "application/json" },
            }),
            invalidatesTags:["Posts"]
        }),
        handleLike: builder.mutation({
            query: (likeTarget) => ({
                url:"handlelike",
                body:likeTarget,
                method:"POST",
                headers: { "content-type": "application/json" },
            }),
            invalidatesTags:["Posts"]
        })
    })

})

export const {useGetPostsQuery, useGetCommentsByIdQuery, useCreatePostMutation, useHandleLikeMutation} = blogApi;


export default blogApi;