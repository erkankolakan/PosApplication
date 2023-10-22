import { Button, Form, Input, Modal, Select, Spin, message } from "antd";
import { useState } from "react";

const Add = ({
  isAddModalOpen,
  setIsisAddModalOpen,
  categories,
  products,
  setProducts,
}) => {

  const [loading, setLoading] = useState(false); // Yükleme durumu için bir state tanımla

  const onFinish = async (values) => {
    try {
      setLoading(true); // Yükleme işlemi başladığında loading state'ini true yap
      const response = await fetch(
        "http://localhost:5000/api/products/add-product",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (response.ok) {
        message.success("Ürün başarılı bir şekilde eklendi");
        form.resetFields();
        setProducts([...products, { //-> ...products dememizin sebebi yenide değeri atarken eski değerleri unutma amk onları da la. Yeni değeri sayfada göstericez diyes eskisinden olmayalım amk.
            ...values,        //->> sen valueslerin hepsini gönre ama gönderirken gönderidiğin değerin data basede _id değerine random sayı at ki key hatası vermesin, price değeri de string geliyor o yüzden onu da atarken Number yap demiş oluyoruz.
            _id: Math.random(),
            price: Number(values.price)

        }]);
      } else {
        message.warning("Kategori eklenemedi");
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false); // İşlem tamamlandığında loading state'ini false yap
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Yeni Ürün Ekle"
        className="h-full"
        open={isAddModalOpen}
        onCancel={() => {
          setIsisAddModalOpen(false);
        }}
        footer={false}
      >
        {loading ? ( // Yükleme işlemi sırasında Spin bileşenini göster
          <Spin size="large" />
        ) : (
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Ürün adı"
            rules={[
              { required: true, message: "Ürün Adı alanı boş geçilemez" },
            ]}
          >
            <Input placeholder="Bir ürün adı giriniz" />
          </Form.Item>

          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli alanı boş geçilemez" },
            ]}
          >
            <Input placeholder="Bir ürün linki giriniz" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Ürün fiyatı"
            rules={[
              { required: true, message: "Ürün Fiyat alanı boş geçilemez" },
            ]}
          >
            <Input placeholder="Bir ürün fiyatı giriniz" />
          </Form.Item>

          <Form.Item
            className="w-full"

            name="category"
            label="Kategorisi"
            rules={[
              { required: true, message: "Kategori alanı boş geçilemez" },
            ]}
          >

            <Select
                showSearch
                placeholder="Bir Kategori Seç"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.title ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                (optionA?.title ?? '').toLowerCase().localeCompare((optionB?.title ?? '').toLowerCase())
                }
                options={[
                    ...categories.map((item) => ({
                        
                        value: item.title,
                        title: item.title,
                    })),
                ]}
            />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>

      )}
      </Modal>
    </>
  );
};

export default Add;
