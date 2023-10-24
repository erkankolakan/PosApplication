import { message } from "antd";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
//bir slicenin içindeki fonksiyonu kullanmak için useDispatch, initialState içindeki değişkenlere erişmek için de useSelector gerekli.

const ProductItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart({...item , quantity:1})) //-> temleri gönderirken her birinin içerisine quantit(miktar) değerin i 1 olarak gönder diyoruz.
    message.success("Ürün septe eklendi")
  }


  return (
      <div onClick={handleClick} className="products-item border hover:shadow-lg cursor-pointer transition-all select-none">
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
