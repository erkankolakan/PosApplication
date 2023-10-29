import Header from "../components/header/Header";
import { Button, Card, Input, Space, Spin, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import PrintBill from "../components/bills/PrintBill";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';


//!!! eğer biz datayı beklerken yani billItem state nin için [] yapsak veya "" yapsak içnde değer var gibi algılar bu yüzden billItems değerini her zaman true döndürür  o yüzdende SPiner gözükmez

const BillPage = () => {
  const cart = useSelector((state) => state.cart);
  const [billItems, setBillItems] = useState();
  const [customer , setCustomer] = useState()

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
      ...getColumnSearchProps("customerName")
    },
    {
      title: "Telefon Numarası",
      dataIndex: "costomerPhoneNumber",
      key: "costomerPhoneNumber",
      ...getColumnSearchProps("costomerPhoneNumber")
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
      ...getColumnSearchProps("costomerPhoneNpaymentModeumber")
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      sorter: (a, b) => a.totalAmount - b.totalAmount, //-> ürünleri fiyatına göre listememizi sağlayacak  
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
      {
        billItems ? (
          <div className="px-6">
          <h1 className="text-4xl text-center font-semibold  mb-4">Faturalar</h1>
          <Table
            dataSource={billItems}
            columns={columns}
            bordered
            pagination={false}
            rowKey="_id"
            scroll={{
              x:1000,
              y:300
            }}
          />
        </div>
        ) : (
          <div className="flex justify-center items-center h-[70vh]">
            <Spin size="large" />
          </div>
        )
      }


      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer} />
    </>
  );
};

export default BillPage;
