import React, { createContext, useEffect, useState,} from 'react';
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext= createContext()
export const auth= getAuth(app)

const UseContext = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setLoader]=useState(true)
  
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
 }
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
})
return ()=>{
    unsubscribe()
}

},[])

const logOut=()=>{
  return signOut(auth)
}
const updateprofile=(name)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
    })
}
// const passwordReset=(email)=>{
//     return sendPasswordResetEmail(auth,email)
// }

    const authInfo ={user,loader,createUser,signIn,logOut,updateprofile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;