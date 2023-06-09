import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentAccount } from "../../services/auth.service";


export const getCurrentAccountThunk = createAsyncThunk(
    "auth/getCurrentAccountThunk",
   async (userId: string )=>{
        try {

            const account = await getCurrentAccount(userId);
            return account;
            
        } catch (error) {
            throw error;
        }
    }
);