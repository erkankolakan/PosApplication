import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/bills' element={<BillPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
