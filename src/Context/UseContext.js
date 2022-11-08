import React, { createContext, useState } from 'react';

export const AuthContext= createContext()

const UseContext = ({children}) => {

    const [user,setuser]=useState(null)
    const [loader,setLoader]=useState(true)


    const authInfo ={user,loader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;