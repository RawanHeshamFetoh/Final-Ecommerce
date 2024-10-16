import React, { useEffect, useState } from 'react'
import ProductDetails from '../../components/ProductPage/ProductDetails';
import axios from 'axios';
import ProductTabs from '../../components/ProductPage/ProductTabs';
import styles from './productPage.module.css';
import ProductSlider from '../../components/slider/productSlider';
import ProductCard from "../../components/productCard/ProductCard";
import { useParams } from 'react-router-dom';



const ProductPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const fetchProducts = async () => {
        const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);

        const data = await response.data.data;
        console.log(response.data);
        console.log("response", response);
        setProducts(data);
        console.log("products", products);
    };





    useEffect(() => {
        fetchProducts();

    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <ProductDetails />
            </div>

            <div className="row">
                <ProductTabs />
            </div>
            <div className={styles.homeTopic}>
                <h1 >Similar Products You Like</h1>
                <div></div>
            </div>


            {/* هذا ال productSlider فيه مشكله و مش عارف اي هي */}
            {/* <div className='container'>
                <ProductSlider products={products} />
            </div> */}

            <div className="row img-fluid">
                <div className={`container ${styles.productsCollection}`}>

                    <div className={styles.productSellerContainer}>
                        <ProductCard
                            id={products._id}
                            className={styles.product}
                            title={products.title}
                            price={Math.round(products.price)}
                            rate={Math.round(products.rating)}
                            img={products.imageCover}
                        />
                    </div>



                </div>
            </div>


        </div>

    );
};

export default ProductPage;
