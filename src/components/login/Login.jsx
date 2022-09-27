import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import SignUpPopup from '../popups/SignUpPopup'
import SignUp from '../signup/SignUp'
import "./login.css"

function Login(props) {

    const [trigger, setTrigger] = useState(false);

    return (
        <div className="container">
            <div className="one"></div>
            <div className="two">
                <div className="form-container">
                    <h2 className='welcome-back'>
                        Welcome Back :)
                    </h2>
                    <div>
                        <input
                            className="input-login"
                            type="text"
                            placeholder="Email"
                            value={props.username}
                            onChange={(e) => {
                                props.setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="input-login"
                            type="password"
                            placeholder="Password"
                            value={props.password}
                            onChange={(e) => {
                                props.setPassword(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <span
                    className="signin"
                    onClick={props.handleSubmit}
                >
                    Login
                </span>
                <div className="or">
                    <p><span className="or-span">or</span></p>
                </div>
                <div
                    className="new-account"
                    onClick={() => {
                        setTrigger(true);
                    }}
                >
                    Create new account
                </div>
                <SignUpPopup
                    trigger={trigger}
                    setTrigger={setTrigger}
                >
                    <SignUp
                        setTrigger={setTrigger}
                    >
                    </SignUp>
                </SignUpPopup>
            </div>
            <div className="three"></div>
            <ToastContainer />
        </div>
    )
}

export default Login