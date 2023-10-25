import { Button, Card, Form, Input, Modal, Select, Spin, message } from "antd";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../../redux/cartSlice";


const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const onFinish =async (values) => {
      try {
        const res = await fetch("http://localhost:5000/api/bill/add-bill", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            subTotal: cart.total.toFixed(2),
            tax: ((cart.total +  cart.tax) / 100).toFixed(2),
            totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
            cartItems:cart.cartItem
          })
        
        },
        )
        if (res.status) { //-> eğer işlem başarılı bir şekilde gerçekleştiyse bu mesaj gider.
          message.success("Fatura oluşturuldu");
          dispatch(removeAll())
          setIsModalOpen(false)
          navigate("/bills")
        }
      } catch (error) { 
        message.error("Fatura oluştururken bir hata oluştu") 
        console.log(error);
      }
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
            label="Müşteri Adı"
            name={"customerName"}
            rules={[{ required: true, message: "müşteri adı boş bırakılamaz" }]}
          >
            <Input title="Müşteri Adı" placeholder="müşteri adı"></Input>
          </Form.Item>

          <Form.Item
            label="Telefon Numarası"
            name={"costomerPhoneNumber"}
            rules={[{ required: true, message: "Telefon numarası zorunlu" }]}>
            <Input
              title="Bir telefon numarası yazın"
              placeholder="müşteri adı"
              maxLength={11}
            ></Input>
          </Form.Item>

          <Form.Item
            label="Ödeme Yöntemi"
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
