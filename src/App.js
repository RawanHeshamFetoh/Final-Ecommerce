import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage/index.jsx';
import ProductCategory from './pages/ProductCategory/index.jsx';
import CartPage from './pages/Cart/index.jsx';


function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Router>
                <Header />
                <div className="flex-grow-1">
                    {/* Main content area */}
                    <Routes>
                        <Route path="/ProductPage" element={<ProductPage />} />
                        <Route path="/ProductCategory" element={<ProductCategory />} />
                        <Route path="/CartPage" element={<CartPage />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
