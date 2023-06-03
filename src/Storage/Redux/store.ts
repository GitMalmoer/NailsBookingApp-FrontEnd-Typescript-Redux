import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../API";
import { userAuthReducer } from "./userAuthSlice";
import questionApi from "../../API/questionApi";
import blogApi from "../../API/blogApi";
import logsApi from "../../API/logsApi";
import bookingApi from "../../API/bookingApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath] : authApi.reducer,
    [questionApi.reducerPath] : questionApi.reducer,
    [blogApi.reducerPath] : blogApi.reducer,
    [logsApi.reducerPath] : logsApi.reducer,
    [bookingApi.reducerPath] : bookingApi.reducer,
    userAuthStore : userAuthReducer,
    
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(authApi.middleware).concat(questionApi.middleware).concat(blogApi.middleware).concat(logsApi.middleware).concat(bookingApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export default store;
