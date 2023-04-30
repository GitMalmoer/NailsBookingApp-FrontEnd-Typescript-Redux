import { createSlice } from "@reduxjs/toolkit";
import React from 'react'
import { userModel } from "../../Interfaces";

export const emptyUserState : userModel = {
    Id: "",
    ConfirmedEmail:false,
    Email:"",
    LastName:"",
    Name:"",
    Role:"",
}

export const userAuthSlice = createSlice({
    name:"userAuth",
    initialState: emptyUserState,
    reducers:{
        setLoggedInUser:(state,action) => {
            state.Id = action.payload.Id;
            state.Name = action.payload.Name;
            state.LastName = action.payload.LastName;
            state.ConfirmedEmail = action.payload.ConfirmedEmail;
            state.Email = action.payload.Email;
            state.Role = action.payload.Role;
        },
    }
});

export const {setLoggedInUser} = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;