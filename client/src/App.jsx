import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';
import CustomerPage from './pages/CustomerPage';
import StatisticPage from './pages/StatisticPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/bills' element={<BillPage/>} />
        <Route path='/customers' element={<CustomerPage/>} />
        <Route path='/statistic' element={<StatisticPage/>} />
        
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
