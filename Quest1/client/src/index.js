import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter, Redirect, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Cart from './Cart';
import ItemDetail from './ItemDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product' element={<ItemDetail />} />
          <Route element={<Login />} />
          {/* <Route exact path="/distributor" component={Admin} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);