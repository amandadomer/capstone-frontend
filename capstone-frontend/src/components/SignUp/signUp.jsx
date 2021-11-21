import React from 'react';
import opener from './opener-2.png'
import './signUp.css';
import NewAccount from '../NewAccount/newAccount';

function SignUp() {
    return (
        <div>
            <div class="row">
                <div class="col-6">
                    <img className="image" src={opener} />
                    
                </div>
                <div class="col-6 ">
                    <NewAccount/>
                </div>
            </div>
        </div>
    )
}

export default SignUp;