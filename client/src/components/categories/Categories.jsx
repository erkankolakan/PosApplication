import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, message } from "antd";

const Categories = () => {
    const [isAddModalOpen, setIsisAddModalOpen] = useState(false);

    const [form] = Form.useForm();

    const onFinish = async (values) => {
    // Bu işlev, formun gönderilmesi başarılı olduğunda çağrılır ve gönderilen form değerleri, values parametresi aracılığıyla bu işleve ulaşır. Yani, kullanıcı formu doldurup gönderdiğinde, values içinde formdaki girdilerin değerlerini içeren bir nesne alırsınız.
        try {
              const response = await fetch("http://localhost:5000/api/categories/add-category" , {
                method:"POST",
                body: JSON.stringify(values),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            if (response.ok) {
              // İstek başarılı bir şekilde tamamlandı, burada işlemlerinizi gerçekleştirebilirsiniz.
              message.success("Kategori Eklendi")
              form.resetFields()
          } else {
            message.warning("Kategori eklenemedi")
          }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <ul className="flex  gap-4 text-lg md:flex-col py-2">
      <li className="category-item">
        <span>Tümü</span>
      </li>

      <li className="category-item">
        <span>Yiyecek</span>
      </li>

      <li className="category-item">
        <span>İçecek</span>
      </li>

      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li
        onClick={()=>{setIsisAddModalOpen(true)}}
        className="category-item !bg-purple-500 hover:opacity-70"
      >
        <PlusOutlined className="md:text-2xl" />
      </li>

      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => {
          setIsisAddModalOpen(false);
        }}
        footer={false}
      >

        <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item name="title" label="Kategori ismi" 
            rules={[{required:true, message:"Katagori alanı boş geçilemez"}]}>
                <Input/>
            </Form.Item>

            <Form.Item className="flex justify-end mb-0" >
                <Button  type="primary" htmlType="submit" >Oluştur</Button>
            </Form.Item>
        </Form>


      </Modal>
    </ul>
  );
};

export default Categories;
