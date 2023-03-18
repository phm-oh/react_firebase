
import CircularProgress from '@mui/material/CircularProgress';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { firebaseApp } from '../configs/firebase'
import DLayout from '../pages/dashboard/d-layout';
import { selectAuthState } from '../redux-toolkit/auth/auth-slice';
import { getCurrentAccountThunk } from '../redux-toolkit/auth/auth-thunk';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hook';

const Authguard = () => {

   const auth = getAuth(firebaseApp);
   // const [account,setAccount] = React.useState<any>(null);


   const { account,isAuthLoading } = useAppSelector(selectAuthState);
   const dispatch = useAppDispatch();
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
         if(user){
            dispatch(getCurrentAccountThunk(user.uid));

         } else{
            //ไม่ได้ login
         }
     });

     return () => unsubscribe();

   },[]);

   if(isAuthLoading === true){
         return <CircularProgress/>
   }

   if(account == null){

       return <Navigate to="/login"/>
   }

  return <DLayout/>
}

export default Authguard