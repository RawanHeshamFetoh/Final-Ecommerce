import React from 'react'
import styles from '../productCard/productCard.module.css'
import style from './productCardSeller.module.css'
const ProductCardSeller = ({ imageCover, title, price, ratingsAverage, priceAfterDisc, id }) => {
    console.log("price af",priceAfterDisc)
    console.log("price ",price)
    return (


        <div>
            <div className={style.productCard}>
                <div className={style.productCardImg}>
                    <img src={imageCover} alt={title} />
                    <div className={style.productCardImgLayout}>
                        <div className={style.layout}></div>
                        <i className={`fa-regular fa-heart ${style.heart}`}></i>
                        <div className={style.productsBtn}>
                            <button>update  <i class="fa-solid fa-arrow-right"></i></button>
                            <button>view product <i class="fa-regular fa-eye"></i></button>
                            <button>delet product <i class="fa-regular fa-eye"></i></button>
                        </div>
                    </div>
                </div>
                <div className={styles.productCardRate}>
                    <i className={`fa-solid fa-star ${ratingsAverage >= 1 ? styles.active : ''}`}></i>
                    <i className={`fa-solid fa-star ${ratingsAverage >= 2 ? styles.active : ''}`}></i>
                    <i className={`fa-solid fa-star ${ratingsAverage >= 3 ? styles.active : ''}`}></i>
                    <i className={`fa-solid fa-star ${ratingsAverage >= 4 ? styles.active : ''}`}></i>
                    <i className={`fa-solid fa-star ${ratingsAverage >= 5 ? styles.active : ''}`}></i>
                </div>
                <p className={styles.productTitle}>{title}</p>
                <div className={styles.productPrice}>
                    {/* {
                        (price !== priceAfterDisc) && (<p>{priceAfterDisc} $</p>)
                    } */}
                    
                    <p>{price}$</p>
                    <p>{priceAfterDisc} $</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSeller
// import React from 'react'
// import styles from '../productCard/productCard.module.css'
// const ProductCardSeller = ({ imageCover, title, price, ratingsAverage ,priceAfterDisc ,id    }) => {
//     return (
//         <div className={styles.productCard}>
//             <div className={styles.productCardImg}>
//                 <img src={imageCover} alt={title} />
//                 <div className={styles.productCardImgLayout}>
//                     <div className={styles.layout}></div>
//                     <i className={`fa-regular fa-heart ${styles.heart}`}></i>
//                     <div className={styles.productsBtn}>
//                     <button>add to cart  <i class="fa-solid fa-arrow-right"></i></button>
//                     <button>view product <i class="fa-regular fa-eye"></i></button>
//                     </div>
//                 </div>
//             </div>
//                 <div className={styles.productCardRate}>
//                     <i className={`fa-solid fa-star ${ratingsAverage >= 1 ? styles.active : ''}`}></i>
//                     <i className={`fa-solid fa-star ${ratingsAverage >= 2 ? styles.active : ''}`}></i>
//                     <i className={`fa-solid fa-star ${ratingsAverage >= 3 ? styles.active : ''}`}></i>
//                     <i className={`fa-solid fa-star ${ratingsAverage >= 4 ? styles.active : ''}`}></i>
//                     <i className={`fa-solid fa-star ${ratingsAverage >= 5 ? styles.active : ''}`}></i>
//                 </div>
//                 <p className={styles.productTitle}>{title}</p>
//                 <div className={styles.productPrice}>
//                     {
//                         (price !== priceAfterDisc)&&(<p>{priceAfterDisc} $</p>)
//                     }
//                     <p>{price}$</p>
//                 </div>
//         </div>
//     )
// }

// export default ProductCardSeller

