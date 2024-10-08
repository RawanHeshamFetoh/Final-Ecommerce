import {  Route, Routes, useLocation } from 'react-router-dom'
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

const AppRouter = () => {
    const location = useLocation();
    const noLayoutPaths = ['/login', '/signup', '/forget-password','/forget-password-reset'];

    return (
        <>
            {!noLayoutPaths.includes(location.pathname) && <NavBar />}
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/signup"  element={<SignUp/>} />
                <Route path="/contact-us"  element={<ContactUs/>} />
                <Route path="/forget-password"  element={<ForgetPassword/>} />

                <Route path='/forget-password-reset' element={<ResetPasswordForgetted/>}/>
                
                <Route path="/profile/:id"  element={<Profile/>} >
                    <Route index element={<UpdateProfile/>}/>
                    <Route path="reset-password" element={<ResetPassword/>}/>
                    <Route path="add-product" element={<AddProduct/>}/>
                </Route>
                <Route path="*" element={<p>not found</p>} />
            </Routes>
            {!noLayoutPaths.includes(location.pathname) && <Footer />}
        </>
    )
}

export default AppRouter
