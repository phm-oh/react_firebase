import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { firebaseApp } from "../configs/firebase";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { Account } from "../app-types/account.type";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function registerUser(
  fullName: string,
  email: string,
  password: string
) {
  try {
    //register user to authentication
    const userCredentail = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // save user profile to filestore
    await setDoc(doc(db, "users", userCredentail.user.uid), {
      fulltName: fullName,
      photoUrl:
        "https://th.bing.com/th/id/OIP.oAXW9xQb-nO5yYZ_3qWRnQAAAA?pid=ImgDet&rs=1",
      role: "member",
    });

    return userCredentail;
  } catch (error) {
    throw error;
  }
}

export async function login(email: string, password: string) : Promise<UserCredential>{
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
}


export async function logout(): Promise<void>{
    await signOut(auth);
}

export async function getCurrentAccount(userId:string){
  const accountRef = doc(db,"users",userId);
  const docSnap =  await getDoc(accountRef);
  if(!docSnap.exists){
    return null;
  }

  let accTmp = docSnap.data() as Account;

  let acc: Account = {
    userId: userId,
    ...accTmp
  }

  return acc;


}
