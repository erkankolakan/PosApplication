import { Button, Form, Input, Modal, message } from "antd";

const Add = ({
  isAddModalOpen,
  setIsisAddModalOpen,
  categories,
  setCategories,
}) => {
  const onFinish = async (values) => {
    // Bu işlev, formun gönderilmesi başarılı olduğunda çağrılır ve gönderilen form değerleri, values parametresi aracılığıyla bu işleve ulaşır. Yani, kullanıcı formu doldurup gönderdiğinde, values içinde formdaki girdilerin değerlerini içeren bir nesne alırsınız.
    try {
      const response = await fetch(
        "http://localhost:5000/api/categories/add-category",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (response.ok) {
        // İstek başarılı bir şekilde tamamlandı, burada işlemlerinizi gerçekleştirebilirsiniz.
        message.success("Kategori Eklendi");
        form.resetFields();
        setCategories([...categories, {
            _id: Math.random(),
            ...values
        }]);
      } else {
        message.warning("Kategori eklenemedi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => {
          setIsisAddModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategori ismi"
            rules={[
              { required: true, message: "Katagori alanı boş geçilemez" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Add;
