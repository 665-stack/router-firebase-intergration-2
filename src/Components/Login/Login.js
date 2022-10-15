import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css';

const auth = getAuth(app)
const Login = () => {
    const [handleGoogleSignIn,] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from.pathName || '/';

    const GoogleSignIn = () => {
        handleGoogleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })

    }

    return (
        <div className='login'>
            <h3>Please Login</h3>
            <button onClick={GoogleSignIn} className='thirdPartyLogin'>Google</button>
            <button className='thirdPartyLogin'>Facebook</button>
            <button className='thirdPartyLogin'>Github</button>

            <br />

            <span className='or-btn'>OR</span>

            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <button className='submit-btn' type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;