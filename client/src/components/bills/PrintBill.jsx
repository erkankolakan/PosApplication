import { Button, Card, Form, Input, Modal, Select } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log("Received values of from:", values);
    }

  return (
    <>
      {/* onOk={handleOk} onCancel={handleCancel} -> bunlarda ek buttonlar */}
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
fatura
      </Modal>
    </>
  );
};
export default PrintBill;
