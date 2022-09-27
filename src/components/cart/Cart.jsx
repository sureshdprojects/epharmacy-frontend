import React, { useContext, useEffect, useState } from 'react'
import context from "../../context/Context.jsx";
import "./cart.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Plus from '@mui/icons-material/AddBox';
import Minus from '@mui/icons-material/IndeterminateCheckBox';
import Order from '../order/Order.jsx';



function Cart() {

    const navigate = useNavigate();

    const user = useContext(context);
    const userLoggedIn = user.state.isLoggedIn;
    const userEmail = user.state.username;

    const [cartProducts, setCartProducts] = useState([]);
    const [cartValue, setCartValue] = useState(0);

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/error");
        } else {
            axios.get('http://localhost:8081/getcartproducts/' + userEmail)
                .then((response) => {
                    let cart = response.data.data.results;
                    if (cart !== null) {
                        setCartProducts(cart);
                        let totalCartValue = 0;
                        cart.forEach(cartProduct => {
                            totalCartValue += (cartProduct.quantity * cartProduct.price)
                        });
                        setCartValue(totalCartValue);
                    }
                })
        }
    }, []);

    function getUpdatedCart() {
        axios.get('http://localhost:8081/getcartproducts/' + userEmail)
            .then((response) => {
                let cart = response.data.data.results;
                if (cart !== null) {
                    setCartProducts(cart);
                    let totalCartValue = 0;
                    cart.forEach(cartProduct => {
                        totalCartValue += (cartProduct.quantity * cartProduct.price)
                    });
                    setCartValue(totalCartValue);
                }
            })
    }

    function handleRemove(cartProduct) {

        axios.post("http://localhost:8081/cartproduct", cartProduct)
            .then((response) => {
                if (response.data.data > 0) {
                    getUpdatedCart();
                } else {
                    console.log("something went wrong");
                }
            })
    }

    function quantityUpdate(incrementBy, productId) {
        const url = "http://localhost:8081/updatequantity/" + userEmail + "/" +
            productId + "/" + incrementBy;
        axios.get(url)
            .then((response) => {
                if (response.data.data === true) {
                    getUpdatedCart();
                }
            })
    }

    function order(totalCartValue) {
        const order = {
            email: userEmail,
            orderProducts: cartProducts,
            orderValue: totalCartValue
        }
        axios.post("http://localhost:8081/order", order)
            .then((response) => {
                if (response.data.data === true) {
                    navigate("/order")
                }

            })

    }

    return (<>{userLoggedIn &&
        < div className='cart' >
            <div className='cart-products'>
                {cartProducts.map((cartProduct, index) => {
                    return (
                        <div
                            className='cart-card'
                            key={index}
                        >
                            <div className='product-image-div'>
                                <img
                                    className='product-image'
                                    src={cartProduct.imageUrl}
                                    alt={cartProduct.name}
                                >
                                </img>
                            </div>
                            <div className='cart-product-info'>
                                <div className='title'>
                                    {cartProduct.name}
                                </div>
                                <div className="pack-size">
                                    {cartProduct.packSize}
                                </div>
                                <div className='quantity'>
                                    Quantity: &nbsp;
                                    {cartProduct.quantity > 1 &&
                                        <Minus
                                            className='icon-minus'
                                            onClick={() => {
                                                quantityUpdate(-1, cartProduct.productId)
                                            }}
                                        />}
                                    {cartProduct.quantity}
                                    <Plus
                                        className='icon-plus'
                                        onClick={() => {
                                            quantityUpdate(1, cartProduct.productId)
                                        }}
                                    />
                                </div>
                                <div className='price'>
                                    &#8377; {cartProduct.price}
                                    <div
                                        className='remove'
                                        onClick={() => {
                                            handleRemove(
                                                {
                                                    productId: cartProduct.productId,
                                                    quantity: cartProduct.quantity,
                                                    email: userEmail
                                                }
                                            )
                                        }}
                                    >Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {cartValue !== 0 ? <div className='cart-value'>
                <h3>Total Cart value</h3>
                <div className='line '></div>
                <h2>&#8377; {cartValue}</h2>
                <div
                    className='payment'
                    onClick={() => { order(cartValue) }}
                >
                    Proceed to Payment
                </div>
            </div> :
                <div className='empty-message'>Oops, your cart is empty!</div>
            }
        </div>}
    </>
    )

}

export default Cart