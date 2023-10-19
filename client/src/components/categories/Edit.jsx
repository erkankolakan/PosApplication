import { Form, Modal, Table, Input, Button, message } from "antd";
import { useState } from "react";


const Edit = ({isEditModalOpen, setIsEditModalOpen, setCategories, categories}) => {
  const [editingRow, setEditingRow] = useState({});

  const onFinish = (values) =>{
    try {
      console.log("values", values);
      console.log("editingRow", editingRow);
      fetch("http://localhost:5000/api/categories/update-category",
      {
        method: "PUT",
        body: JSON.stringify({...values, categoryId: editingRow._id}),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      message.success("Katagori başarıyla güncellendi")
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return {
              ...item,
              ...values
            };
          } else {
            return item;
          }
        }
      )
        )
    } catch (error) {
      message.warning("Birşyeler yanlış gitti")
      console.log(error);
    }
  }

  const columns = [
    {
      title: "Kategori",
      dataIndex: "title", //-> aşağıda dataSoruce de gödermiş olduğumuz ifadenin içindeki title değerlerini alır. _id dersek id numaralı çıkar.
      render: (_, record) => {
        //ikinci paremetre herbir dönen itemi döndürüyor.
        if (record._id === editingRow._id) {
          return (
            <Form.Item name="title" className="mb-0">
              <Input  defaultValue={record.title} />
              {/* title yerine dönen değerin id sini de yazdırabiliriz. */}
            </Form.Item>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        //record tüm satırın parametrelerini döndürür
        //-> renderin kendi aldığı değerler bunları her dönen değeri alırlar.

        return (
          <div className="flex gap-2">
            <Button type="link" onClick={() => setEditingRow(record)} className="pl-0">
              Düzenle
            </Button>
            <Button type="link" danger >Sil</Button>
            <Button htmlType="submit" type="link" className="text-green-700" >
              Kaydet
            </Button>
          </div>
        );
      },
    },
  ];



  return (
    <Modal
      title="Kategori Düzenle"
      open={isEditModalOpen}
      onCancel={() => {
        setIsEditModalOpen(false);
      }}
      footer={false}
    >
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default Edit;
