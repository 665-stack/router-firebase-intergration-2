import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h3>Please Register!!</h3>
            <button className='thirdPartyLogin'>Google</button>
            <button className='thirdPartyLogin'>Facebook</button>
            <button className='thirdPartyLogin'>Github</button>
        </div>
    );
};

export default Register;