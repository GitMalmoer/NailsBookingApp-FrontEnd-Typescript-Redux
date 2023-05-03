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
            providesTags: ["Posts"],
        }),
        createPost: builder.mutation({
            query: (postBody) => ({
                url:"createpost",
                body: postBody,
                method:"POST",
                headers: { "content-type": "application/json" },
            }),
            invalidatesTags:["Posts"],
        }),
        handleLike: builder.mutation({
            query: (likeTarget) => ({
                url:"handlelike",
                body:likeTarget,
                method:"POST",
                headers: { "content-type": "application/json" },
            }),
            invalidatesTags:["Posts"],
        }),
        addComment: builder.mutation({
            query: (commentBody) => ({
                url:"addcomment",
                body:commentBody,
                method:"POST",
                headers: {"content-type": "application/json"},
            }),
            invalidatesTags:["Posts"],
        }),
        deletePost: builder.mutation({
            query:(deleteBody) => ({
                url:"deletepost",
                body:deleteBody,
                method:"DELETE",
                headers: {"content-type": "application/json"},
            }),
            invalidatesTags:["Posts"],
        }),
        deleteComment: builder.mutation({
            query:(commentBody) => ({
                url:"deletecomment",
                body:commentBody,
                method:"DELETE",
                headers: {"content-type": "application/json"},
            }),
            invalidatesTags:["Posts"],
        }),
        updatePost: builder.mutation({
            query:(updatePostContent) => ({
                url:"updatepost",
                method:"PUT",
                headers: {"content-type": "application/json"},
                body:updatePostContent,
            }),
            invalidatesTags:["Posts"],
        }),
        updateComment: builder.mutation({
            query: (updateCommentContent) => ({
                url:"updatecomment",
                method:"PUT",
                headers: {"content-type": "application/json"},
                body:updateCommentContent,
            }),
            invalidatesTags:["Posts"],
        })
    })

})

export const {
  useGetPostsQuery,
  useGetCommentsByIdQuery,
  useCreatePostMutation,
  useHandleLikeMutation,
  useAddCommentMutation,
  useDeletePostMutation,
  useDeleteCommentMutation,
  useUpdatePostMutation,
  useUpdateCommentMutation,
} = blogApi;
export default blogApi;