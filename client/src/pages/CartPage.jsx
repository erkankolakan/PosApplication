import Header from "../components/header/Header";
import { Button, Card, Popconfirm, Table } from "antd";
import { useState } from "react";
import CreateBill from "../components/carts/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { decrase, deleteCart, increase } from "../redux/cartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Ürün görseli",
      dataIndex: "img",
      key: "img",
      render: (text) => {
        return (
          <img
            src={text}
            className="w-20 h-20 object-cover rounded-sm"
            alt="urunler"
          />
        );
      },
    },
    {
      title: "Ürün adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        //bu text pricenin değerini alıyor
        return <span>{text.toFixed(2)}₺</span>;
      },
    },
    {
      title: "Ürün adeti",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        //bu text üsteki quntitiy değerini alıyor, record da tıkladığımızın bize getiriyor.
        return (
          <div className="flex items-baseline justify-around w-full">
            {/* Sağ taraftaki düğmeler */}
            <Button
              onClick={() => dispatch(increase(record))}
              type="primary"
              className="w-full !rounded-full items-center justify-center flex"
              size="small"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-semibold inline-block w-6 text-center">
              {text}
            </span>
            <Button
              onClick={() => dispatch(decrase(record))}
              type="primary"
              className="w-full !rounded-full items-center justify-center flex"
              size="small"
              icon={<MinusCircleOutlined />}
            />
          </div>
        );
      },
    },
    {
      //-> bu kolon diğerlerinden farklı olarak çalışıyor
      title: "Toplam fiyat",
      render: (text, record) => {
        //bu text pricenin değerini alıyor
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        //bu text pricenin değerini alıyor
        return (
          <Popconfirm  //-> popconfirm oldukça iyi bir özellik
            title="Ürünü silmek istediğinize eminmisiniz ?"
            onConfirm={() => dispatch(deleteCart(record))}
            okText="Evet"
            cancelText="Hayır"
          >
            <Button type="link" danger>
              Sil
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItem}
          columns={columns}
          bordered
          pagination={false}
        />

        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72 ">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDC Toplam %8</span>
              <span className="text-red-600">+43.00₺</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Toplam</span>
              <span>592.00₺</span>
            </div>

            <Button
              onClick={showModal}
              className="mt-4 w-full"
              type="primary"
              size="large"
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>

      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
