import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// pages
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';
import CustomerPage from './pages/CustomerPage';
import StatisticPage from './pages/StatisticPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ProductPage from './components/products/ProductPage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const cart = useSelector((state) => state.cart)
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  , [cart])


  //bu işlemi her sayfada yapmaktansa herkesi kapsayan app.js de yapmak çokk daha mantıklı bu şekilde yapmazsak her sayfanın içinde setleme işlemi yapacaktık buna hiç gerek yok. Zaten tıkladıklarımız redux içindeki cartın içine gidiyor bizde burdan cart değişkenşnş alıp local storage kaydediyoruz.
  
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <RouteControl>
              <Home />
            </RouteControl>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteControl>
              <CartPage />
            </RouteControl>
          }
        />
        <Route
          path="/bills"
          element={
            <RouteControl>
              <BillPage />
            </RouteControl>
          }
        />
        <Route
          path="/customers"
          element={
            <RouteControl>
              <CustomerPage />
            </RouteControl>
          }
        />
        <Route
          path="/statistic"
          element={
            <RouteControl>
              <StatisticPage />
            </RouteControl>
          }
        />
        <Route
          path="/products"
          element={
            <RouteControl>
              <ProductPage />
            </RouteControl>
          }
        />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;



export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};