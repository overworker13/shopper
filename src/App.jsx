import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from './Component/navBar/NavBar.jsx'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import LoginSingup from './Pages/LoginSingup.jsx'
import Cart from './Pages/Cart.jsx'
import Footer from "./Component/Footer/Footer"
import banner_kids from "./Component/Assets/banner_kids.png"
import banner_mens from "./Component/Assets/banner_mens.png"
import banner_women from "./Component/Assets/banner_women.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={banner_mens} category='men' />} />
          <Route path='/woman' element={<ShopCategory banner={banner_women} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSingup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>)
}

export default App
