import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import {useSelector, useDispatch} from "react-redux"
import { deleteCart } from "../../redux/cartSlice";

const CartTotals = () => {

    const dispatch = useDispatch()
  

  const cart = useSelector((state) => state.cart)

  return (
    <div className="cart h-screen max-h-[calc(100vh_-_90px)] flex flex-col ">
      <h2 className="bg-blue-600 text-white text-center rounded-sm py-4 font-semibold">
        Sepetteki Ürünler
      </h2>
      <ul className=" cart-items p-2 flex flex-col gap-y-3 overflow-y-auto">
        {
          cart.cartItem.map((item) => (
            <li key={item._id} className="cart-item flex items-center justify-between">
            {/* Sol taraftaki içerik */}
            <img
              onClick={() => {dispatch(deleteCart(item))}} 
              src={item.img}
              className=" cursor-pointer w-16 h-16 object-cover rounded-sm"
              alt="urunler"
            />
            <div className="flexcol ml-2 w-full">
              <b>{item.title}</b> <br />
              <div>{item.price} x {item.quantity}</div>
            </div>
            <div className="flex items-baseline justify-around w-full">
              {/* Sağ taraftaki düğmeler */}
              <Button
                type="primary"
                className="w-full !rounded-full items-center justify-center flex"
                size="small"
                icon={<PlusCircleOutlined />}
              />
              <span className="font-semibold">{item.quantity}</span>
              <Button
                type="primary"
                className="w-full !rounded-full items-center justify-center flex"
                size="small"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
          ))
        }
      </ul>

      <div className="cart-totals mt-auto ">
        <div className="border-b border-t">
          <div className="flex justify-between p-4 ">
            <b>Ara Toplam</b>
            <span>{ (cart.total).toFixed(2)  }₺</span>
          </div>

          <div className="flex justify-between p-4 ">
            <b>KDV%8</b>
            <span className="text-red-700">{(cart.tax * cart.total) / 100 > 0 ? `+ ${((cart.tax * cart.total) / 100).toFixed(2)}` : 0  } ₺</span>
          </div>
        </div>
      </div>

      <div className="border-b mt-4">
        <div className="flex justify-between p-4 ">
          <b className="text-xl text-green-600">Genel Toplam</b>
          <span className="text-xl">{ (cart.total + (cart.tax * cart.total) / 100).toFixed(2) } ₺</span>
        </div>
      </div>

      <div className="py-4 px-2 ">
        <Button type="primary" className="w-full" size="large">
          Sipariş Oluştur
        </Button>
        <Button
          type="primary"
          danger
          className="w-full mt-2 "
          size="large"
          icon={<ClearOutlined />}
        >
          Temizle
        </Button>
      </div>
    </div>
  );
};

export default CartTotals;
