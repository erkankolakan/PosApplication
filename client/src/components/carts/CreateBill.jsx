import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log("Received values of from:", values);
    }

  return (
    <>
      {/* onOk={handleOk} onCancel={handleCancel} -> bunlarda ek buttonlar */}
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Müşteri adı"
            name={"customerName"}
            rules={[{ required: true, message: "müşteri adı boş bırakılamaz" }]}
          >
            <Input title="Müşteri Adı" placeholder="müşteri adı"></Input>
          </Form.Item>

          <Form.Item
            label="Telefon Numarası"
            name={"phoneNumber"}
            rules={[{ required: true, message: "Telefon numarası zorunlu" }]}>
            <Input
              title="Bir telefon numarası yazın"
              placeholder="müşteri adı"
              maxLength={11}
            ></Input>
          </Form.Item>

          <Form.Item
            label="Müşteri adı"
            name={"paymentMode"}
            rules={[{ required: true, message: "ödeme yöntemi zorunlu" }]}>
            <Select placeholder="Bir ödeme yöntemi seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>

          <Card className=" ">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDC Toplam %8</span>
              <span className="text-red-600">+43.00₺</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Toplam</span>
              <span>592.00₺</span>
            </div>

            <div className="flex justify-end">
              <Button
                className="mt-4 "
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};
export default CreateBill;
