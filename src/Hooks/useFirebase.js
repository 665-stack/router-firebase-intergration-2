import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';

const auth = getAuth(app);
// providers
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSignout = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return (
        <div>

        </div>
    );
};

export default useFirebase;