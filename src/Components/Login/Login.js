import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <h3>Please Login</h3>
            <button className='thirdPartyLogin'>Google</button>
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