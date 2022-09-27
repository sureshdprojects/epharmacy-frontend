import React from 'react'
import "./loginpopup.css"

import CloseIcon from '@mui/icons-material/Close';

function LoginPopUp(props) {
    return (props.trigger ? (
        <div className='login-popup'>
            <div className='login-popup-innner'>
                <div
                    className='close'
                    onClick={() => { props.setPopup(false) }}
                >
                    <CloseIcon />
                </div>
                {props.children}
            </div>
        </div>) : ""
    )
}

export default LoginPopUp