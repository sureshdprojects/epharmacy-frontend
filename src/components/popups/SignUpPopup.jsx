import React from 'react'
import "./signuppopup.css"

function SignUpPopup(props) {
    return (props.trigger ? (
        <div className='signuppopup'>
            {props.children}
        </div>) : ""
    )
}

export default SignUpPopup