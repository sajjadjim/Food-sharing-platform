import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const  [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
            // console.log('auth statechanged',currentUser)
            setUser(currentUser)
            setLoading(false)
            console.log('current user',currentUser)
        })
        return unSubscribe;
    },[])
    // console.log(user)

    const authInfo={
            loading,
            user,
            createUser,
            signInUser,
            logOut,
            signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;