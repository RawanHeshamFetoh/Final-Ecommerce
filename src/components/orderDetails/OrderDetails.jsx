import React from 'react'
import styles from './orderDetails.module.css'
import Cookies from 'js-cookie'
import CheckoutCart from '../checkoutCart/CheckoutCart'
const OrderDetails = () => {
    const role = Cookies.get('role')
    return (
        <div className={`container ${styles.orderDetailsContainer} `} >

            <h2>Order Details</h2>
            <div className={`${role === 'seller' ? styles.sellerOrder : styles.userOrder}`}>
                {(role === 'seller' ) && 
                <div className={styles.orderDetails}>
                    <div>
                        <div><p>user name  </p><p> rawan</p> </div>
                        <div><p> email  </p><p> rawan@gmail.com </p> </div>
                        <div><p> phone  </p><p> 01112013685 </p> </div>
                    </div>
                    <div>
                        <div><p> Order ID </p><p> 123456</p> </div>
                        <div><p> Order Date </p><p> 2022-05-12</p> </div>
                        <div><p> Order Status </p><p> Pending</p> </div>
                    </div>
                    <div>
                        <div><p> details </p><p> 123 Main St</p> </div>
                        <div><p> City </p><p> New York</p> </div>
                        <div><p> Zip </p><p> 10001</p> </div>
                    </div>
                </div>}
                <CheckoutCart shippingCost={20} img={require('../../assets/pr11.png')} />
            </div>
        </div>
    )
}

export default OrderDetails
