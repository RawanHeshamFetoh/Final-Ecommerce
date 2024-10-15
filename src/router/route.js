import { Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Login from '../pages/Login'
import ForgetPassword from '../pages/ForgetPassword'
import SignUp from '../pages/SignUp'
import ContactUs from '../pages/ContactUs'
import Profile from '../pages/Profile'
import UpdateProfile from '../components/UpdateProfile/UpdateProfile'
import ResetPassword from '../components/resetPassword/ResetPassword'
import AddProduct from '../components/addProduct/AddProduct'
import ResetPasswordForgetted from '../components/resetPasswordAfterForget/ResetPasswordForgetted'
import SellerProducts from '../components/SellerProducts/SellerProducts'
import PrivateRoute from '../components/privateRoute/PrivateRoute'
import ProductPage from '../pages/ProductPage'
import ProductCategory from '../pages/ProductCategory'
import CartPage from '../pages/Cart'
import UpdateProduct from '../components/updateProduct/UpdateProdct'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import WishlistPage from '../pages/WishlistPage'


const AppRouter = () => {
    const location = useLocation();
    const noLayoutPaths = ['/login', '/signup', '/forget-password', '/forget-password-reset',];
    const isProfileRoute = /^\/profile\/\d+/;
    const isNotFoundPage = location.pathname === '*';
    // const layoutPaths=['/contact-us' ,'/ProductCategory','/about']
    return (
        <>
            {!noLayoutPaths.includes(location.pathname) && !isProfileRoute.test(location.pathname) && location.pathname !== '*' && <NavBar />}
            {/* {layoutPaths.includes(location.pathname) || isProfileRoute.test(location.pathname)  || <NavBar />} */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/ProductPage/:_id" element={<ProductPage />} />
                <Route path="/ProductCategory" element={<ProductCategory/>} />
                <Route path="/CartPage" element={<CartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/WishlistPage" element={<WishlistPage />} />

                <Route path='/forget-password-reset' element={<ResetPasswordForgetted />} />
                {/* <Route element={<PrivateRoute/>}> */}

                <Route path="/profile/:id" element={<Profile />} >
                    <Route index element={<UpdateProfile />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="update-product/:productId" element={<UpdateProduct />} />
                    <Route path="seller-products" element={<SellerProducts />} />
                </Route>
                {/* </Route> */}
                <Route path="*" element={<NotFound/>} />
            </Routes>
            {/* {layoutPaths.includes(location.pathname) || isProfileRoute.test(location.pathname)  || <Footer />} */}
            {!noLayoutPaths.includes(location.pathname) && !isProfileRoute.test(location.pathname) && location.pathname !== '*' && <Footer />}
        </>
    )
}

export default AppRouter
