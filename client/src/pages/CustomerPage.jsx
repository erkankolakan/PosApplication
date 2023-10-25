import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import {Table } from "antd";


const CustomerPage = () => {

  const [billItems, setBillItems] = useState([]);

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
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
          return <span>{new Date(text).toLocaleDateString()}</span>;
        },

    },
  ];



  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl text-center font-semibold  mb-4">Müşterilerim</h1>

        <Table 
        scroll={{
          x:1000,
          y:300
        }}
        dataSource={billItems} columns={columns} bordered pagination={false} />

      </div>


    </>
    
  );
};

export default CustomerPage;
