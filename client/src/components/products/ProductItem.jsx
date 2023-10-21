const ProductItem = ({ item }) => {
  return (
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
      </div>
  );
};

export default ProductItem;
