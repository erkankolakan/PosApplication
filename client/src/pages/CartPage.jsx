import Header from "../components/header/Header";
import { Button, Card, Input, Popconfirm, Space, Table } from "antd";
import { useRef, useState } from "react";
import CreateBill from "../components/carts/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined,SearchOutlined } from "@ant-design/icons";
import { decrase, deleteCart, increase } from "../redux/cartSlice";
import Highlighter from 'react-highlight-words';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const dispatch = useDispatch();


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
      ...getColumnSearchProps("title")
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category")

    },
    {
      title: "Ürün fiyatı",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price, //-> ürünleri fiyatına göre listememizi sağlayacak  
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
      key: "totalPrice",
      render: (text, record) => {
        //bu text pricenin değerini alıyor
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        //bu text pricenin değerini alıyor
        return (
          <Popconfirm //-> popconfirm oldukça iyi bir özellik
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
          scroll={{
            x:1200,
            y:300,
          }}
        />

        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72 ">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>
                {cart.total.toFixed(2) > 0 ? cart.total.toFixed(2) : 0}₺
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV %{cart.tax}</span>
              <span className="text-red-600">
                {" "}
                {(cart.tax * cart.total) / 100 > 0
                  ? `+ ${((cart.tax * cart.total) / 100).toFixed(2)}`
                  : 0}{" "}
                ₺
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Toplam</span>
              <span>{ (cart.total + (cart.tax * cart.total) / 100).toFixed(2)}₺</span>
            </div>

            <Button
              onClick={showModal}
              className="mt-4 w-full"
              type="primary"
              size="large"
              disabled={cart.cartItem.length === 0}
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
