import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AddToCart from '../addtocart/AddToCart';
import "./products.css"



function Products() {

    let { category } = useParams();

    let urlPrefix = "http://localhost:8081/products/" + category + "/";

    const [subCategoryUrl, setSubCategoryUrl] = useState(urlPrefix);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setSubCategoryUrl(urlPrefix);
    }, [urlPrefix]);

    useEffect(() => {
        axios.get(subCategoryUrl)
            .then((response) => {
                setProducts(response.data.data);
            })
    }, [category, subCategoryUrl]);

    useEffect(() => {
        axios.get("http://localhost:8081/" + category + "/subcategories")
            .then((response) => {
                let subCategoriesArray = response.data.data.subCategories;
                subCategoriesArray.unshift("All");
                setSubCategories(subCategoriesArray);
            })
    }, [category]);

    function setEndPoint(subCategory) {
        if (subCategory === "All") {
            setSubCategoryUrl(urlPrefix);
        } else
            setSubCategoryUrl(urlPrefix + subCategory);
    }

    return (
        <div className='medicine-container'>
            <div className='medicine-category-space'></div>
            <div className='medicine-category'>
                <h3>Categories</h3>
                <div className='line'></div>
                <div>
                    {subCategories.map((subCategory, index) => {
                        return (
                            <div
                                className='sub-category'
                                key={index}
                                onClick={() => { setEndPoint(subCategory) }}
                            >
                                {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='medicine'>
                {products.map((product, index) => {
                    return (
                        <div
                            className='card'
                            key={index}
                        >
                            <div className='product-image-div'>
                                <img
                                    className='product-image'
                                    src={product.imageUrl}
                                    alt={product.name}
                                >
                                </img>
                            </div>
                            <div className='title'>
                                {product.name.slice(0, 21) + "..."}
                            </div>
                            <div className="pack-size">
                                {product.packSize}
                            </div>
                            {/* <div className='rating'>
                                {product.rating}
                            </div> */}
                            <div className='price'>
                                &#8377; {product.price}
                            </div>
                            <AddToCart
                                productId={product.productId}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;