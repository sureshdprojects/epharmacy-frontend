import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PreviousOrders from '../your orders/previous orders/PreviousOrders';

function Home() {

    const navigate = useNavigate();

    function routeChange(url) {
        navigate("/" + url);
    }

    return (
        <div className='home'>
            <div
                className='home-category'
            >
                <div
                    className='order-medicine category-card'
                    onClick={() => {
                        routeChange("order-medicine");
                    }}
                >
                    <div className='cat-image-div'>
                        <img
                            className='cat-image'
                            src='https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg'
                            alt='medicine'
                        />
                    </div>
                    <div>
                        <h2>Order Medicine</h2>
                    </div>
                    <div className='arrow absolute-center'>
                        <ArrowCircleRightIcon
                            style={{ color: "#1abc9c" }}
                        />
                    </div>
                </div>
                <div
                    className='beauty-care category-card'
                    onClick={() => {
                        routeChange("Beauty&Care");
                    }}
                >
                    <div className='cat-image-div'>
                        <img
                            className='cat-image'
                            src='https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg'
                            alt='beauty'
                        />
                    </div>
                    <div>
                        <h2>Beauty & Care</h2>
                    </div>
                    <div className='arrow absolute-center'>
                        <ArrowCircleRightIcon
                            style={{ color: "#1abc9c" }}
                        />
                    </div>
                </div>
                <div
                    className='wellness category-card'
                    onClick={() => {
                        routeChange("Ayurvedic");
                    }}
                >
                    <div className='cat-image-div'>
                        <img
                            className='cat-image'
                            src='https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg'
                            alt='medicine'
                        />
                    </div>
                    <div>
                        <h2>Wellness</h2>
                    </div>
                    <div className='arrow absolute-center'>
                        <ArrowCircleRightIcon
                            style={{ color: "#1abc9c" }}
                        />
                    </div>
                </div>
            </div>
            {/* <PreviousOrders /> */}
        </div>
    )
}

export default Home