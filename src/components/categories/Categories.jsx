import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./categories.css"

const imagePrefixLink = "https://drive.google.com/uc?export=view&id=";

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/getcategories")
            .then((response) => {
                setCategories(response.data.data);
            })
    }, []);

    return (
        <div className='categories' id='categories'>
            <div className='category-container'>
                {categories.map((category, index) => {
                    return (
                        <div
                            className='category'
                            key={index}
                        >
                            <img
                                src={imagePrefixLink + category.imageUrl}
                                alt="category"
                            />
                            <Link
                                to={"/" + category.categoryName}
                                className="link"
                            >
                                {category.categoryName}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Categories