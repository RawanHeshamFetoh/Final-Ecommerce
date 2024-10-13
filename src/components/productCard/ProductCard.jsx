import React from "react";
import styles from "./productCard.module.css";
const ProductCard = ({ img, title, price, rate }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImg}>
        <img src={img} alt={title} />
        <div className={styles.productCardImgLayout}>
          <div className={styles.layout}></div>
          <i className={`fa-regular fa-heart ${styles.heart}`}></i>
          <div className={styles.productsBtn}>
            <button>
              add to cart <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button>
              view product <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productCardRate}>
        <i className={`fa-solid fa-star ${rate >= 1 ? styles.active : ""}`}></i>
        <i className={`fa-solid fa-star ${rate >= 2 ? styles.active : ""}`}></i>
        <i className={`fa-solid fa-star ${rate >= 3 ? styles.active : ""}`}></i>
        <i className={`fa-solid fa-star ${rate >= 4 ? styles.active : ""}`}></i>
        <i className={`fa-solid fa-star ${rate >= 5 ? styles.active : ""}`}></i>
      </div>
      <p className={styles.productTitle}>{title}</p>
      <div className={styles.productPrice}>
        <p>{price * 0.1 + price} $</p>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
