import React from 'react';


//components
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import CartsTotals from './components/carts/CartTotals';


function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10  md:pb-0 pb-16 ">

        <div className="categories  max-h-[85vh] snap-proximity overflow-y-auto">
          <Categories/>
        </div>

        <div className="products flex-[8] h-[100vh] overflow-y-auto pb-0 md:pb-32">
          <Products/>
        </div>

        <div className="cart-wraper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border-l">
          <div><CartsTotals/></div>
        </div>

      </div>

    </>
  );
}

export default App;
