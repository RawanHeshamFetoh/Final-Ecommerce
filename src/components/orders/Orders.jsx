import React, { useState } from 'react'
import styles from './order.module.css'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
const Orders = () => {
    let role = Cookies.get('role')
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return '#ED7A56';
            case 'cancelled':
                return 'red';
            case 'delivered':
                return 'green';
            default:
                return 'black'; // default color
        }
    };
    const { id } = useParams()
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    const userId = Cookies.get('userId')
    const handleView = (orderId) => {
        navigate(`/profile/${id}/order-details/${orderId}`)
    }
    const getOrder = async () => {
        const response = await axios.get(`http://localhost:3000/api/v1/orders/`, {
            withCredentials: true,
        });
        return response.data;
    }
    useQuery('get-order', getOrder, {

        onSuccess: (res) => {
            if (!role) {
                console.log(res.data)
                setOrders(res.data)
            } else {
                // const sellerorders= res.data.filter((order)=> order.cartItems.filter((item, i)=>{item.product.sellerId === userId}))
                // const sellerOrder = res.data.cartItems.filter((item)=>item.products.sellerId === userId)
                // const sellerOrders = res.data.map(order => ({
                //     ...order,
                //     cartItems: order.cartItems.filter(item => item.product.sellerId._id === userId)
                //   })).filter(order => order.cartItems.length > 0);
                const sellerOrders = res.data.map(order => ({
                    ...order,
                    cartItems: order.cartItems.filter(item =>
                        item.product && item.product.sellerId && item.product.sellerId._id === userId
                    )
                })).filter(order => order.cartItems.length > 0);
                setOrders(sellerOrders)
                // console.log(sellerOrders, "selll")
                // console.log(res.data)
                // console.log(sellerOrders)
            }
        },
        onError: (error) => {
            console.log(error)
        },
        // refetch every 5 minutes
    })
    const changeDate = (dateToChange) => {
        const date = new Date(dateToChange);

        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        return formattedDate
    }

    return (
        <div className={` container ${styles.orders}`}>
            <h3>Orders</h3>
            {
                orders ? (


                    <table>
                        <tr>
                            <th>#</th>
                            {(role === 'seller') && <th style={{ display: role === 'seller' ? 'inline-block' : 'none' }}><i className="fa-regular fa-user"></i>  user</th>}
                            <th> <i className="fa-regular fa-calendar-days"></i>  date </th>
                            <th> <i className="fa-regular fa-circle-check"></i>  status</th>
                            <th> <i className="fa-solid fa-location-dot"></i>  city</th>
                            <th> <i className="fa-solid fa-dollar-sign"></i>  total</th>
                        </tr>
                        {orders.map((order, i) => {
                            return (
                                <tr key={order._id}>
                                    <td>{i + 1}</td>
                                    {(role === 'seller') &&
                                        <td style={{ display: role === 'seller' ? 'inline-block' : 'none' }}>
                                            <span>{order.user.username}</span>
                                            {order.user.email}
                                        </td>
                                    }
                                    <td>  {changeDate(order.createdAt)} </td>
                                    <td style={{ color: getStatusColor('pending') }}>  pending </td>
                                    <td>  {order.shippingAddress.city} </td>
                                    <td>  {order.totalOrderPrice}$ </td>
                                    <td>
                                        <button className={styles.viewButton} onClick={() => handleView(order._id)}>view</button>
                                    </td>
                                </tr>
                            )
                        })}

                        
                    </table>
                )
                    : ("")}
        </div>
    )
}

export default Orders
