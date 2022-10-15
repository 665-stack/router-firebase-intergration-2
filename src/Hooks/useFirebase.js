import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
// providers
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        handleGoogleSignIn,
        handleSignOut
    }
};

export default useFirebase;