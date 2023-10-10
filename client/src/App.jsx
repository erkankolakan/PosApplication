import React from 'react';


//components
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';


function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10  ">

        <div className="categories flex-1 max-h-[85vh] snap-proximity overflow-y-auto">
          <Categories/>
        </div>

        <div className="products flex-[8]">
          <Products/>
        </div>

        <div className="card">
          <div>card Totals</div>
        </div>

      </div>

    </>
  );
}

export default App;
