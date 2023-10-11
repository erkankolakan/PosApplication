import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
