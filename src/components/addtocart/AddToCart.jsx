import React, { useContext, useState } from 'react'
import context from '../../context/Context'
import "./addtocart.css"
import { useNavigate } from 'react-router-dom';

function AddToCart(props) {

    const navigate = useNavigate();

    const user = useContext(context);

    function handleAddToCart() {
        if (!user.state.isLoggedIn) {
            navigate("/error");
        } else {
            const isLoggedIn = user.state.isLoggedIn.toString();
            const productToAdd = {
                email: user.state.username,
                productId: props.productId,
                quantity: 1
            }
            const response = user.saveProductToCart(isLoggedIn, productToAdd);

        }
    }

    return (
        <>
            <div
                className='addtocart'
                onClick={handleAddToCart}
            >
                Add to cart
            </div>
        </>
    )
}

export default AddToCart