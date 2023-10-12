import {  Button, Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

  return (
    <>

      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
        width={800}
      >
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto bg-white px-6">
                <article className="overflow-hidden">
                    <div className="logo my-6">
                        <h2 className="text-4xl font-semibold text-slate-700">LOGO</h2>
                    </div>
                    
                    <div className="bill-details">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="text-md text-slate-500">
                                <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                <p>Unwrapped</p>
                                <p>Fake Street 123</p>
                                <p>San Javier</p>
                                <p> CA 1234 </p>
                            </div>

                            <div className="text-md text-slate-500">
                                <p className="font-bold text-slate-700">Fatura</p>
                                <p>The Broing Company</p>
                                <p>Tesla Street 007</p>
                                <p>Frisco</p>
                                <p>CA 000</p>
                            </div>

                            <div className="text-md text-slate-500">
                                <div>
                                    <p className="font-bold text-slate-700">Fatura numarası:</p>
                                    <p>000041</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-700 mt-2">Veriliş Tarihi:</p>
                                    <p>02/03/2002</p>
                                </div>
                            </div>

                            <div className="text-md text-slate-500">
                                <div>
                                    <p className="font-bold text-slate-700">Şartlar:</p>
                                    <p>10 gün</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-700 mt-2">Vade:</p>
                                    <p>23/11/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bill-table-area">
                        <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 sm:table-cell md:pl-0 hidden ">Görsel</th>
                                    
                                    <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 sm:table-cell md:pl-0 hidden ">Başlık</th>
                                    
                                    <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 sm:table-cell md:pl-0 hidden ">Fiyat</th>

                                    <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 sm:table-cell md:pl-0 hidden ">Adet</th>

                                    <th scope="col" className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 sm:table-cell md:pl-0 hidden ">Toplam</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200">
                                    <td className="py-4 ">
                                        <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" className="w-12 h-12 rounded-sm object-cover" />
                                    </td>

                                    <td className="py-4 ">
                                        <span className="font-medium">Elma</span>
                                    </td>

                                    <td className="py-4  text-center">
                                        <span>5₺</span>
                                    </td>

                                    <td className="py-4  text-center">
                                        <span>1</span>
                                    </td>

                                    <td className="py-4  text-end">
                                        <span>5.00₺</span>
                                    </td>
                                </tr>

                                
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th className="text-right pt-4 font-normal " colSpan={4} scope="rows">Ara Toplam</th>

                                    <th className="text-right pt-4 font-normal " scope="rows">61₺</th>
                                </tr>

                                <tr>
                                    <th className="text-right pt-4 font-normal " colSpan={4} scope="rows">KDV</th>

                                    <th className="text-right pt-4 font-normal text-red-600" scope="rows">+4.88</th>
                                </tr>

                                <tr>
                                    <th className="text-right pt-4 font-normal " colSpan={4} scope="rows">Total</th>

                                    <th className="text-right pt-4 font-normal " scope="rows">65.88₺</th>
                                </tr>
                            </tfoot>
                        </table>


                        <div className="py-9 ">
                            <div className="border-t pt-9 border-slate-200">
                                <p className="font-light text-sm text-slate-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque beatae at nisi dolorem soluta sequi, nam minus! Iure modi quasi doloremque. Unde, ipsa tenetur earum consequuntur accusamus minima alias fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam autem, quam nobis doloremque fugiat facilis animi vitae assumenda? Temporibus aperiam doloremque autem alias praesentium voluptas totam soluta exercitationem natus.
                                </p>
                            </div>
                        </div>

                    </div>
                </article>
            </div>
        </section>

        <div className="flex justify-end mt-4">
            <Button type="primary" size="large">Yazdır</Button>
        </div>
      </Modal>


    </>
  );
};
export default PrintBill;
