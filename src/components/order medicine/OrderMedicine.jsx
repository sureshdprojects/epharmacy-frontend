import React, { useContext } from 'react'
import "./ordermedicine.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import context from '../../context/Context';
import { useNavigate } from 'react-router-dom';


const imageUrl = "https://www.howtogeek.com/wp-content/uploads/2021/06/whatsapp-logo-hero.jpeg?height=200p&trim=2,2,2,2";

const whatsappLink = "https://wa.me/919505010523"

function OrderMedicine() {

    const navigate = useNavigate();

    const user = useContext(context);
    const userLoggedIn = user.state.isLoggedIn;

    function handleUpload() {
        if (userLoggedIn) {
            console.log("upload functionality");
        } else {
            navigate("/error");
        }
    }

    return (
        <div className='ordermedicine'>
            <div className='attatch-prescription'>
                <h1>Attatch Prescription</h1>
            </div>
            <div className='order-box'>
                <div className='upload-prescription'>
                    <h3>Upload</h3>
                    <br></br>
                    <p>Please upload valid images of prescription from your doctor</p>
                    <br></br>
                    <div className="upload-button-box">
                        <CloudUploadIcon
                            sx={{ fontSize: 80 }}
                            color="action"
                            className='upload-icon'
                        />
                        <p>Upload Photo</p>
                    </div>
                </div>
                <div className='order-type'>
                    <p>Guide for valid Prescription...</p>
                    <br></br>
                    <img
                        src="https://www.1mg.com/images/online_consultation/validate_rx.svg"
                        alt="valid prescription"
                    >
                    </img>
                </div>
            </div>
            <div className='upload-and-whatsapp'>
                <div
                    className='upload'
                    onClick={handleUpload}
                >
                    Upload
                </div>
                |
                <div>
                    <a
                        href={whatsappLink}
                        target="_blank"

                    >
                        <img
                            src={imageUrl}
                            className="whatsapp"
                            alt="whatsapp-Image"
                        >
                        </img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OrderMedicine