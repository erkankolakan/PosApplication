//components
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CartsTotals from "../components/carts/CartTotals";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  /*
JSON.stringify(values) kullanırsanız: Bu, JavaScript nesnesini JSON formatına dönüştürür ve sunucuya gönderilecek olan veriyi hazırlar.
response.json() kullanırsanız: Bu, sunucudan gelen yanıtın içeriğini JSON formatından JavaScript nesnesine dönüştürür.
*/
  return (
    <>
      <Header setSearch={setSearch} />
      {products && categories ? (
        <div className="home px-6 flex flex-col md:flex-row justify-between gap-10  md:pb-0 pb-16 ">
          <div className="categories  max-h-[85vh] snap-proximity overflow-y-auto">
            <Categories
              categories={categories}
              setCategories={setCategories}
              setFiltered={setFiltered}
              products={products}
            />
          </div>

          <div className="products flex-[8] h-[100vh] overflow-y-auto pb-0 md:pb-32">
            <Products
              categories={categories}
              filtered={filtered}
              products={products}
              setProducts={setProducts}
              search={search}
            />
          </div>

          <div className="cart-wraper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border-l">
            <div>
              <CartsTotals />
            </div>
          </div>
        </div>
      ) : (
        <div className="justify-center items-center flex  h-[70vh] w-full">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default HomePage;
