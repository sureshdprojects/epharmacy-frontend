import { useState } from "react";
import context from "./Context";
import axios from "axios";

function State(props) {

    const initialState = {
        username: "",
        userId: "",
        isLoggedIn: false
    }

    const [state, updateState] = useState(initialState);

    function updateUserState(email, idOfUser, status) {
        updateState({
            username: email,
            userId: idOfUser,
            isLoggedIn: status
        }
        )
    }

    let user;

    async function verifyUser(userloginInfo) {
        let isCorrect = false;
        await axios.post("http://localhost:8081/userlogin", userloginInfo)
            .then((response) => {

                if (response.data.status === 200) {

                    user = {
                        name: response.data.data.name,
                        email: response.data.data.email
                    }

                    updateUserState(response.data.data.email, response.data.data.userId, true);

                    //set to true if credentials are valid
                    //used to close login popup
                    isCorrect = true;
                }
            })

        return { user, isCorrect };
    }

    async function saveProductToCart(isLoggedIn, productToAdd) {
        let cartResponse = null;
        let url = 'http://localhost:8081/addproducttocart';

        await axios.post(url, productToAdd)
            .then((response) => {
                cartResponse = response.data.data;
            })

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(isLoggedIn)
        // };
        // await fetch(url, requestOptions)
        //     .then(response => {
        //         cartResponse = response.json();
        //     })

        return cartResponse;
    }

    return (
        <context.Provider value={{ state, verifyUser, saveProductToCart }}>
            {props.children}
        </context.Provider>
    )
}

export default State;