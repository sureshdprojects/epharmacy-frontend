import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginPopUp from '../popups/LoginPopUp';

import "./header.css";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Login from '../login/Login';
import context from '../../context/Context';
import { toast } from 'react-toastify';


const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
}

function Header() {

    const userState = useContext(context);

    const [pincode, setPincode] = useState(500028);
    const [popup, setPopup] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    async function handleSubmit(e) {

        e.preventDefault();

        const userloginInfo = {
            email: username,
            password: password
        }

        const verificationInfo = await userState.verifyUser(userloginInfo);
        setUser(verificationInfo.user);

        if (verificationInfo.isCorrect) {
            toast.success('Login Successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                setPopup(false);
            }, 2000);
        } else {
            toast.error('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    function setLoginText() {
        if (user) {
            return <div>{user.name}</div>;

        } else {
            return <div>Login</div>;
        }
    }

    function loginClick() {
        if (!user) {
            setPopup(true)
        }
    }

    return (
        <div className='header-container' id="header">
            <div className='header'>
                <div className='company-name'>
                    <Link
                        to="/"
                        style={linkStyle}
                        id="ss"
                    >
                        E-Pharmacy
                    </Link>
                </div>
                <div className='search-container'>
                    <div className='location'>
                        <AddLocationAltIcon
                            className='location-icon'
                        />
                        <span className='pin'>{pincode}</span>
                        <ArrowDropDownIcon />
                    </div>
                    <div className='line'></div>
                    <div className='search'>
                        <input
                            id="search"
                            type="text"
                            name="q"
                            className="input-text"
                            autoComplete='off'
                            spellCheck="false"
                            autoCorrect="off"
                            autoCapitalize="off"
                            placeholder="Search for medicine &amp; wellness products…">
                        </input>
                    </div>
                </div>
                <div className='nav-options'>
                    <Link
                        to="/upload"
                        style={linkStyle}
                        className="absolute-center"
                    >
                        <UploadFileIcon />
                        &nbsp;
                        <span>Upload</span>
                    </Link>
                    <Link
                        to="/cart"
                        style={linkStyle}
                        className="absolute-center"
                    >
                        <AddShoppingCartIcon />
                        &nbsp;
                        <span>Cart</span>
                    </Link>
                    <div
                        className="absolute-center"
                        id='login'
                        style={{ color: "white", cursor: "pointer" }}
                        onClick={loginClick}
                    >
                        <AccountCircleIcon />
                        &nbsp;
                        {setLoginText()}
                    </div>
                    <LoginPopUp
                        trigger={popup}
                        setPopup={setPopup}
                    >
                        <Login
                            handleSubmit={handleSubmit}
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            setPopup={setPopup}
                        >
                        </Login>
                    </LoginPopUp>
                </div>
            </div>
        </div>
    )
}

export default Header