import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { firebaseApp } from "../configs/firebase";
import { getFirestore, setDoc ,doc} from "firebase/firestore";


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function registerUser(fullName: string , email: string, password: string ){
   try {
    //register user to authentication
    const userCredentail =  await createUserWithEmailAndPassword(auth,email,password);
    
    // save user profile to filestore
    await setDoc(doc(db,"users",userCredentail.user.uid),{
        fulltName: fullName,
        photoUrl:"https://th.bing.com/th/id/OIP.oAXW9xQb-nO5yYZ_3qWRnQAAAA?pid=ImgDet&rs=1",
        role: "member",
    })


    return userCredentail;

   } catch (error) {
      throw error;
   }
}