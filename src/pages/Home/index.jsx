import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import OffersCard from '../../components/offersCard/OffersCard';
import ProductCategoryType1 from '../../components/productCategoryType1/productCategoryType1';
import ProductCategoryType2 from '../../components/productCategoryType2/productCategoryType2';
import ReviewCard from '../../components/reviewCard/reviewCard';
import BlogCard from '../../components/blogCard/blogCard';
import ProductSlider from '../../components/slider/productSlider';

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    const data = await response.data.products;
    setProducts(data);
    console.log(products)
  };
  useEffect(() => {
    fetchProducts();

  }, []);
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={`${styles.headerText} `}>
            <h1>the best <br /> collection 2024</h1>
            <p>luxary fasionable clothing and stationery item </p>
            <button>shop now <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <img src={require("../../assets/header.PNG")} alt="" />
        </div>
      </header>
      {/* feature */}
      <div className={styles.feature}>
        <div className={styles.singleFeature}>
          <i class="fa-solid fa-truck"></i>
          <div>
            <p>free delivery</p>
            <p>for first 3 order</p>
          </div>
        </div>
        <div className={styles.singleFeature}>
          <i class="fa-regular fa-credit-card"></i>
          <div>
            <p>quick payment</p>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className={styles.singleFeature}>
          <i class="fa-regular fa-credit-card"></i>
          <div>
            <p>quick payment</p>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className={styles.singleFeature}>
          <i class="fa-solid fa-user-gear"></i>
          <div>
            <p>24/7 support</p>
            <p>ready support</p>
          </div>
        </div>
      </div>
      {/* top collection */}
      <div className={styles.homeTopic}>
        <h1 >our top collection</h1>
        <div></div>
      </div>
      <ul className={styles.changeCollection}>
        <li> <a href="#" className={styles.active}> best seller</a></li>
        <li> <a href="#"> trending</a></li>
        <li> <a href="#"> new arrival</a></li>
      </ul>
      <div className={`container ${styles.productsCollection}`}>
        {
          products.map((product, i) => (
            (i < 8) && (
              <ProductCard key={product.id} className={styles.product} title={product.title} price={Math.round(product.price)} rate={Math.round(product.rating)} img={product.thumbnail} />

            )
          ))
        }
      </div>
      {/* offers */}
      <div className={`${styles.offers} container`}>
        <OffersCard offerMonth={"decamber offer"} offer={"save uo to 30% off on all latest fashion"} offerTime={""} img={require("../../assets/of1-removebg-preview.png")} />

        <OffersCard offerMonth={"decamber offer"} offer={"30% off on all latest shose"} offerTime={"10_20_30"} img={require("../../assets/of1-removebg-preview.png")} />
      </div>

      {/* product categories */}
      <div className={styles.homeTopic}>
        <h1 >product categories</h1>
        <div></div>
      </div>
      <div className={`container ${styles.categories}`}>
        <ProductCategoryType1 img={require("../../assets/c1.png")} title={"smart phone new collection2024"} />

        <div className={`${styles.ProductCategoryType2}`}>
          <ProductCategoryType2 img={require("../../assets/c2.png")} title={"watch collection"}

            description={"good collection"} />
          <ProductCategoryType2 img={require("../../assets/c3.png")} title={"gallery collection"} description={"good collection"} />
        </div>

        <ProductCategoryType1 img={require("../../assets/c4.png")} title={"cosmatics products"} />
      </div>

      {/* slider */}
      <div className={styles.homeTopic}>
        <h1 >featured product</h1>
        <div></div>
      </div>
      <div className='container'>
        <ProductSlider products={products} />
      </div>


      {/* shopping online */}
      <div className={`${styles.shoppingOnline} container`}>
        <div className={styles.shoppingContent}>
          <h2 >shopping online</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequatur dolores ipsum ex officiis dolorem doloremque? Rerum quam expedita, sunt delectus minima, ab reprehenderit aut, temporibus quae sit molestiae blanditiis?</p>
          <div className={styles.downloadBtns}>
            <button>
              <img src={require("../../assets/google1-removebg-preview.png")} alt="google play" />
              <div>
                <p>get it on </p>
                <h6>google play</h6>
              </div>
            </button>
            <button>
              <i class="fa-brands fa-apple"></i>
              <div>
                <p>download on the </p>
                <h6>app store</h6>
              </div>
            </button>
          </div>
        </div>
        <img src={require("../../assets/of1-removebg-preview.png")} alt='shopping ' />
      </div>
      {/* reviews */}
      <div className={`container`}>
        <div id="Reviewcarousel" class="carousel carousel-fade slide" data-bs-ride="carousel">
          <div class={`carousel-indicators ${styles.indecator}`}>
            <button type="button" data-bs-target="#Reviewcarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#Reviewcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#Reviewcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
          {Array.from({ length: 3 }, (_, i) => (
          <div className={` ${styles.reviews} carousel-item ${i === 0 ? 'active' : ''}` } key={i}>
            <img src={require(`../../assets/p${i+1}.jpg`)} alt='person' className={styles.person} />
            <img src={require("../../assets/person.jpg")} alt='person' className={styles.fakePerson} />
            <div className={styles.reviewCard}>
              <div className={`${styles.homeTopic} 
            ${styles.reviewTopic}`}>
                <h1 >customer review</h1>
                <div></div>
              </div>
              <ReviewCard img={require(`../../assets/p${i+1}.jpg`)} name={"rawan fetoh"} comment={"good product"} rate={4} />
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
      {/* blog */}
      <div className={`${styles.blog} `}>
        <div className={styles.homeTopic}>
          <h1 >from the blog</h1>
          <div></div>
        </div>
        <div className={`container ${styles.blogContainer}`}>
          {Array.from({ length: 3 }, (_, i) => (
            <BlogCard key={i} img={require('../../assets/person.jpg')} date={"july 14 , 2024"} time={"03:30 PM"} blog={"Customers have praised its effectiveness, with one reviewer stating they are very satisfied."} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
