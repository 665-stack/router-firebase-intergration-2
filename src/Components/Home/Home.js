import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css'

const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='home'>
            <p>Hey, fuckin <span className='userNameInHomepage'>{user ? user.displayName : 'Ghost'}!</span> Welcome.</p>
            <h3>Who we are? If you know, you know.</h3>
        </div>
    );
};

export default Home;