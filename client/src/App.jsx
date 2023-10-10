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
      <div className="home px-6 flex justify-between gap-10  ">

        <div className="categories  max-h-[85vh] snap-proximity overflow-y-auto">
          <Categories/>
        </div>

        <div className="products flex-[8]">
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
