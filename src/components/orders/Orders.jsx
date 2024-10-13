import React from 'react'
import styles from './order.module.css'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'
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
    const {id} = useParams()
    const navigate = useNavigate()
    const handleView =()=>{
        navigate(`/profile/${id}/order-details/123`)
    }
    
    return (
        <div className={` container ${styles.orders}`}>
            <h3>Orders</h3>
            <table>
                <tr>
                    <th>#</th>
                    {(role === 'seller') && <th><i className="fa-regular fa-user"></i>  user</th>}
                    <th> <i className="fa-regular fa-calendar-days"></i>  date </th>
                    <th> <i className="fa-regular fa-circle-check"></i>  status</th>
                    <th> <i className="fa-solid fa-location-dot"></i>  country</th>
                    <th> <i className="fa-solid fa-dollar-sign"></i>  total</th>
                </tr>
                <tr>
                    <td>1</td>
                    {(role === 'seller') &&
                        <td>
                            <span>user</span>
                            user@gmail.com
                        </td>}
                    <td>  2022-01-01 </td>
                    <td style={{ color: getStatusColor('pending') }}>  pending </td>
                    <td>  USA </td>
                    <td>  $100 </td>
                    <td>
                        <button className={styles.viewButton} onClick={handleView}>view</button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    {(role === 'seller') &&
                        <td>
                            <span>user</span>
                            user@gmail.com
                        </td>}
                    <td>  2022-01-01 </td>
                    <td style={{ color: getStatusColor('pending') }}>  pending </td>
                    <td>  USA </td>
                    <td>  $100 </td>
                    <td>
                        <button className={styles.viewButton} onClick={handleView}>view</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Orders
