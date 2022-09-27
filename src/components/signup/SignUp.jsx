import React, { useState } from 'react'
import "./signup.css"

import CloseIcon from '@mui/icons-material/Close';

function SignUp(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleCreateAccount(e) {

        e.preventDefault();

        if (password === confirmPassword) {
            const signupInfo = {
                name,
                email,
                mobileNumber,
                password
            }
            console.log(signupInfo);
        } else {
            console.log("error");
        }
    }


    return (
        <div className="signup-container">
            <div className='inner-signup-container'>
                <div
                    className='signup-close'
                    onClick={() => { props.setTrigger(false) }}
                >
                    <CloseIcon />
                </div>
                <div className='Register-heading'>
                    <h2>Register</h2>
                </div>
                <div className='name-container'>
                    <div>
                        <input
                            type="text"
                            className="signup-input"
                            placeholder='first name'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        >
                        </input>
                    </div>
                </div>
                <div>
                    <input
                        className="signup-input"
                        type="email"
                        placeholder='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    >
                    </input>
                </div>
                <div>
                    <input
                        className="signup-input"
                        type="text"
                        placeholder='mobile number'
                        value={mobileNumber}
                        onChange={(e) => {
                            setMobileNumber(e.target.value)
                        }}
                    >
                    </input>
                </div>
                <div>
                    <input
                        className="signup-input"
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    >
                    </input>
                </div>
                <div>
                    <input
                        className="signup-input"
                        type="password"
                        placeholder='confirm password'
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                    >
                    </input>
                </div>
                <div
                    className="create-account-btn absolute-center"
                    onClick={handleCreateAccount}
                >
                    Create Account
                </div>
            </div>
        </div>
    )
}

export default SignUp