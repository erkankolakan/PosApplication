import Header from "../components/header/Header";
import { Button, Card, Table } from "antd";
import { useEffect, useState } from "react";
import PrintBill from "../components/bills/PrintBill";
import { useSelector } from "react-redux";

const BillPage = () => {
  const cart = useSelector((state) => state.cart);
  const [billItems, setBillItems] = useState([]);
  const [customer , setCustomer] = useState()

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "costomerPhoneNumber",
      key: "costomerPhoneNumber",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      render: (text) => {
        return <span>{new Date(text).toLocaleDateString()}</span>;
      },
      key: "createdAt",
    },
    {
      title: "Ödeme Yönemi",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => {
        return <span>{text}₺</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, rounded) => {
        return (
          <Button
          type="link"
          onClick={() => {
            showModal();
            setCustomer(rounded);
          }}
          className="pl-0">
            Yazdır
          </Button>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bill/get-all");
        const data = await res.json();
        await setBillItems(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl text-center font-semibold  mb-4">Faturalar</h1>
        <Table
          dataSource={billItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1000,
            y:300
          }}
        />
      </div>

      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer} />
    </>
  );
};

export default BillPage;
