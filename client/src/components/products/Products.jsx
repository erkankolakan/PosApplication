import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);


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
            products.map((item) => {
                <div className="products-item border hover:shadow-lg cursor-pointer transition-all select-none">
                <div className="product-img">
                  <img
                    className="h-28 w-full border-b object-cover"
                    src={item.img}
                    alt=""
                  />
                  <div className="product-info flex flex-col border p-4">
                    <span className="font-semibold">{item.title}</span>
                    <span>{item.price}₺</span>
                  </div>
                </div>
              </div>;
            })
        }

    </div>
  );
};

export default Products;
