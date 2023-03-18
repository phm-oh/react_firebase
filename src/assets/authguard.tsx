
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { firebaseApp } from '../configs/firebase'
import DLayout from '../pages/dashboard/d-layout';

const Authguard = () => {

   const auth = getAuth(firebaseApp);
   const [account,setAccount] = React.useState<any>(null);

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
         if(user){
            
            setAccount(user);

         } else{
            setAccount(null);
         }
     });

     return () => unsubscribe();

   },[]);

   if(account == null){

       return <Navigate to="/login"/>
   }

  return <DLayout/>
}

export default Authguard