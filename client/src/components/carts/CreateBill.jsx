import { Modal } from "antd";

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  return (
    <>
      {/* onOk={handleOk} onCancel={handleCancel} -> bunlarda ek buttonlar */}
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => {setIsModalOpen(false);}}
        footer={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default CreateBill;
