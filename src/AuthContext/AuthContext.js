import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.confiq';
export const AuthProvider=createContext()
const auth=getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setloading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInuser=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name,image) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        } );
    }
    const signInWithgoogel=(provider)=>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth,currentUser=>{
            setloading(false)
            setUser(currentUser)

        });
        return ()=>unsubcribe()
    },[user])
    const logout = () => {
        
        return signOut(auth)
      }
    const AuthInfo={
        user,
        createUser,
        signInuser,
        updateUser,
        signInWithgoogel,
        logout,
        loading,
        setloading
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;