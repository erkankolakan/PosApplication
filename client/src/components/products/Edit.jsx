import { Form, Modal, Table, Input, Button, message, Select } from "antd";
import { useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState();

  //-->> !! bu özellik oldukça güzeldir dorm değerini alıyorum formun olduğu yere koyuyoruz artık nereye koyduksak setFieldsValue sayesinde editingItem içinde gelen tüm değerleri alıyoruz ve form içindeki ilgili yerlere koyuyoruz!!!
  const [form] = Form.useForm();
  form.setFieldsValue(editingItem);

  useEffect(() => {
    (async () => {
      try {
        const productsAll = await fetch(
          "http://localhost:5000/api/products/get-all"
        );
        const data = await productsAll.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla güncellendi");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          } else return item;
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
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productId: record._id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Katagori başarıyla silindi");
        setProducts(
          products.filter((item) => {
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
      dataIndex: "title", //-> aşağıda dataSoruce de gödermiş olduğumuz ifadenin içindeki title değerlerini alır. _id dersek id numaralı çıkar.
      width: "8%",
      render: (_, record) => {
        //titler sıra sıra gelirken içindeki değeri ikinci paremetre ile herbir dönen itemi alıyoruz.
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img
            className="object-cover  w-full h-28"
            src={record.img}
            alt="resimler"
          />
        );
      },
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price", //-> dataSource içinde gönderdiğizmi Products verisinin içinden price değerini alıyor
      width: "8%",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        //record tüm satırın parametrelerini döndürür
        //-> renderin kendi aldığı değerler bunları her dönen değeri alırlar.
        return (
          <div className="flex gap-2">
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
            >
              Düzenle
            </Button>

            <Button onClick={() => deleteCategory(record)} type="link" danger>
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />

      <Modal
        title="Yeni Ürün Ekle"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          // initialValues={editingItem} --> normalde ant desing ile kolayce verileri defaultValue olarak tüm değeri girebiliriz
        >
          <Form.Item
            name="title"
            label="Ürün Adı"
            rules={[
              { required: true, message: "Ürün Adı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün adı giriniz." />
          </Form.Item>
          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün görseli giriniz." />
          </Form.Item>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[
              { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz." />
          </Form.Item>
          <Form.Item
            name="category"
            label="Kategori Seç"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
