import React from 'react'
import styles from './productCard.module.css'
import style from '../productCardSeller/productCardSeller.module.css'
const ProductCard = ({ img, title, price, rate, priceAfterDisc }) => {
    return (
        <div className={style.productCard}>
            <div className={style.productCardImg}>
                <img src={img} alt={title} />
                <div className={style.productCardImgLayout}>
                    <div className={style.layout}></div>
                    <i className={`fa-regular fa-heart ${styles.heart}`}></i>
                    <div className={styles.productsBtn}>
                        <button>add to cart  <i class="fa-solid fa-arrow-right"></i></button>
                        <button>view product <i class="fa-regular fa-eye"></i></button>
                    </div>
                </div>
            </div>
            <div className={styles.productCardRate}>
                <i className={`fa-solid fa-star ${rate >= 1 ? styles.active : ''}`}></i>
                <i className={`fa-solid fa-star ${rate >= 2 ? styles.active : ''}`}></i>
                <i className={`fa-solid fa-star ${rate >= 3 ? styles.active : ''}`}></i>
                <i className={`fa-solid fa-star ${rate >= 4 ? styles.active : ''}`}></i>
                <i className={`fa-solid fa-star ${rate >= 5 ? styles.active : ''}`}></i>
            </div>
            <p className={styles.productTitle}>{title}</p>
            <div className={styles.productPrice}>
                <p style={{
                    textDecoration: price == priceAfterDisc || priceAfterDisc == 0 ? 'none' : 'lineThrought',
                    color: price == priceAfterDisc || priceAfterDisc == 0 ? 'black' : '#656565'
                }}>{ price} $</p>
                    
                  
            <p style={{ display: price == priceAfterDisc || priceAfterDisc == 0 ? 'none' : 'inline-block' }}>{priceAfterDisc} $</p>

        </div>
        </div >
    )
}

export default ProductCard
