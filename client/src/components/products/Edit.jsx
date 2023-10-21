import { Form, Modal, Table, Input, Button, message } from "antd";
import { useEffect, useState } from "react";

const Edit = ({
  isEditModalOpen,
  setIsEditModalOpen,
  setCategories,
  categories,
}) => {

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


  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Katagori başarıyla güncellendi");
      setCategories(
        categories.map((item) => {
            return item;
        })
      );
    } catch (error) {
      message.error("Birşyeler yanlış gitti");
      console.log(error);
    }
  };

  const deleteCategory = (record) => {
    if (window.confirm("Kategoriyi silmek istediğine emin misin?")) {
      try {
        fetch("http://localhost:5000/api/categories/delete-category", {
          method: "DELETE",
          body: JSON.stringify({ categoryId: record._id }), //-> api bizden categoryId değeri bekliyor ona tıkladığımız değerin id sini gönderiyoruz.
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Katagori başarıyla silindi");
        setCategories(
          categories.filter((item) => {
            if (item._id === record._id) {
              return false;
            } else {
              return true;
            }
          })
        );
      } catch (error) {
        message.error("Birşyeler yanlış gitti");
        console.log(error);
      }
    }
  };

  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",//-> aşağıda dataSoruce de gödermiş olduğumuz ifadenin içindeki title değerlerini alır. _id dersek id numaralı çıkar.
      width:"8%",
      render: (_, record) => {
        //titler sıra sıra gelirken içindeki değeri ikinci paremetre ile herbir dönen itemi alıyoruz.
          return <p>{record.title}</p>;
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img", 
      width:"4%",
      render: (_,record) =>{
        return (
            <img className="object-cover  w-full h-28" src={record.img} alt="resimler" />
        )
      }
    },
    {
        title: "Ürün Fiyatı",
        dataIndex: "price",  //-> dataSource içinde gönderdiğizmi Products verisinin içinden price değerini alıyor
        width:"8%",
    },
    {
        title: "Kategori",
        dataIndex: "category", 
        width:"8%",

    },
    {
      title: "Action",
      dataIndex: "action",
      width:"8%",
      render: (text, record) => {
        //record tüm satırın parametrelerini döndürür
        //-> renderin kendi aldığı değerler bunları her dönen değeri alırlar.

        return (
          <div className="flex gap-2">
            <Button
              type="link"
              className="pl-0"
            >
              Düzenle
            </Button>
            <Button onClick={() => deleteCategory(record)} type="link" danger>
              Sil
            </Button>
            <Button htmlType="submit" type="link" className="text-green-700">
              Kaydet
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Form onFinish={onFinish}>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={
            {
                x: 1000,
                y: 600
            }
        }
      />
    </Form>
  );
};

export default Edit;
