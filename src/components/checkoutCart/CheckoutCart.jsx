import React from 'react'
import styles from './checkoutCart.module.css'

const CheckoutCart = ({ shippingCost ,img}) => {
    return (
        <div className={styles.shippingCart}>
            <div className={styles.cartItem}>
                <div>
                    <img src={require('../../assets/pr11.png')} alt='product' />
                    {/* <img src={img} alt='product' /> */}
                    <p>chair</p>
                </div>
                <p>2</p>
                <p>5000 $</p>
            </div>
            <div>
                <p>subtotal</p>
                <p>5000 $</p>
            </div>
            <div>
                <p>shipping</p>
                <p>{5000 + shippingCost}$</p>
            </div>
            <div>
                <p>total</p>
                <p>{5000 + shippingCost} $</p>
            </div>
        </div>
    )
}

export default CheckoutCart
