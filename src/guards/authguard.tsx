
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { firebaseApp } from '../configs/firebase'
import DLayout from '../pages/dashboard/d-layout';
import { selectAuthState } from '../redux-toolkit/auth/auth-slice';
import { useAppSelector } from '../redux-toolkit/hook';

const Authguard = () => {

   const auth = getAuth(firebaseApp);
   // const [account,setAccount] = React.useState<any>(null);


   const { account } = useAppSelector(selectAuthState)

   // useEffect(()=>{
   //  const unsubscribe = onAuthStateChanged(auth,(user)=>{
   //       if(user){
            
   //          setAccount(user);

   //       } else{
   //          setAccount(null);
   //       }
   //   });

   //   return () => unsubscribe();

   // },[]);



   if(account == null){

       return <Navigate to="/login"/>
   }

  return <DLayout/>
}

export default Authguard