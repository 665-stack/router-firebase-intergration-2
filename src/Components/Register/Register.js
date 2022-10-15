import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h3>Please Register!!</h3>
            <form>
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <button className='submit-btn' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Register;