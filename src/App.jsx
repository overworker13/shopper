import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from './Component/navBar/NavBar.jsx'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import LoginSingup from './Pages/LoginSingup.jsx'
import Cart from './Pages/Cart.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category='men'/>}/>
        <Route path='/woman' element={<ShopCategory category='woman'/>}/>
        <Route path='/kids' element={<ShopCategory category='kids'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
        </Routes>
      </BrowserRouter>
    </div>)
}

export default App
