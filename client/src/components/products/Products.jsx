import {useState } from "react";
import ProductItem from "./ProductItem";
import {PlusOutlined,EditOutlined } from '@ant-design/icons';
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({categories, filtered, products, setProducts }) => {
  const navigate = useNavigate()
  
  //modal
  const [isAddModalOpen, setIsisAddModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);





  return (
    <div className="products-wrapper gap-4 grid grid-cols-card">
      {
        filtered.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))
      }

      <div onClick={()=> {setIsisAddModalOpen(true)}} className="products-item border bg-purple-500 hover:shadow-lg cursor-pointer transition-all select-none flex items-center justify-center md:text-4xl text-2xl text-white hover:opacity-80 min-h-[188px]">
        <PlusOutlined />
      </div>


{/* burada navigate işlemini Link ile değilde useNavigate ile kullandım */}
      <div onClick={()=> {navigate("/products")}} className="products-item border bg-amber-500 hover:shadow-lg cursor-pointer transition-all select-none flex items-center justify-center md:text-4xl text-2xl text-white hover:opacity-80 min-h-[188px]">
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




