import { createSlice } from "@reduxjs/toolkit";
import { Account } from "../../app-types/account.type";
import { RootState } from "../store";


export type AuthState = {
    isAuthLoading: boolean;
    account: Account  ;
};

const initialState: AuthState = {
    isAuthLoading: true,
    account:{
        fullName: 'phanumet',
        
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {}
});


export const selectAuthState =(state:RootState) =>  state.authState


export default authSlice.reducer;