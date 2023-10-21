import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import {PlusOutlined,EditOutlined } from '@ant-design/icons';
import Add from "./Add";

const Products = ({categories}) => {

  const [products, setProducts] = useState([]);
  
  //modal
  const [isAddModalOpen, setIsisAddModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  useEffect(() =>{
    (async() => {
        try {
            const productsAll = await fetch("http://localhost:5000/api/products/get-all")
            const  data = await productsAll.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    })();
  },[])

  return (
    <div className="products-wrapper gap-4 grid grid-cols-card">
      {
        products.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))
      }

      <div onClick={()=> {setIsisAddModalOpen(true)}} className="products-item border bg-purple-500 hover:shadow-lg cursor-pointer transition-all select-none flex items-center justify-center md:text-4xl text-2xl text-white hover:opacity-80 min-h-[188px]">
        <PlusOutlined />
      </div>


      <div className="products-item border bg-amber-500 hover:shadow-lg cursor-pointer transition-all select-none flex items-center justify-center md:text-4xl text-2xl text-white hover:opacity-80 min-h-[188px]">
        <EditOutlined />
      </div>


      <Add
        isAddModalOpen={isAddModalOpen}
        setIsisAddModalOpen={setIsisAddModalOpen}
        categories={categories}
        setProducts={setProducts}
        products={products}
      />





    </div>
  );
};

export default Products;




