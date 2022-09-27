import React from 'react'
import { Routes, Route } from 'react-router-dom';
import State from './context/State';

import './App.css';
import Cart from './components/cart/Cart';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Home from './components/home/Home';
import OrderMedicine from './components/order medicine/OrderMedicine';
import Products from './components/products/Products';
import YourOrders from './components/your orders/YourOrders';
import PleaseLogin from './components/pages/PleaseLogin';
import 'react-toastify/dist/ReactToastify.css';
import Order from './components/order/Order';

function App() {

  return (

    <div className="app">
      <State>
        <Header />
        <Categories />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order-medicine' element={<OrderMedicine />} />
          <Route path='/upload' element={<OrderMedicine />} />
          <Route path='/yourorders' element={<YourOrders />} />
          <Route path='/error' element={<PleaseLogin />} />
          <Route path='/order' element={<Order />} />
          <Route path='/:category' element={<Products />} />
        </Routes>
      </State>
    </div>
  );
}

export default App;
