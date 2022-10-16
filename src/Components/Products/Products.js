import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products.css'

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='products'>
            <h3>Hi <span className="userNameInProducts">{user ? user.displayName : "ghost"}</span>, you can find our product here. <br /> <span>So you can order them :) </span></h3>
        </div>
    );
};

export default Products;