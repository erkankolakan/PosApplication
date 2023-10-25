import {  Button, Modal } from "antd";
import { useRef } from "react";
import {useReactToPrint} from "react-to-print"

const PrintBill = ({ isModalOpen, setIsModalOpen, customer }) => {

    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    }) 

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
        
        <section ref={componentRef} className="py-20 bg-black"> {/* referansaı bu kısımdan alıyoruz nerenin yazdırılmasını istiyorsak oranın kapsayıcısına erişiyoruz */}
            <div className="max-w-5xl mx-auto bg-white px-6">
                <article className="overflow-hidden">
                    <div className="logo my-6">
                        <h2 className="text-4xl font-semibold text-slate-700">LOGO</h2>
                    </div>
                    
                    <div className="bill-details">
                        <div className="grid sm:grid-cols-4 grid-cols-3 gap-4">
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
                                    <p>000{Math.floor(Math.random() * 100)}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-700 mt-2">Veriliş Tarihi:</p>
                                    <p>{customer?.createdAt.substring(0,10)}</p>
                                </div>
                            </div>

                            <div className="text-md sm:block hidden text-slate-500">
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
                                    <th scope="col" className="py-3.5  text-left text-sm font-normal text-slate-700  sm:table-cell md:pl-0 hidden ">Görsel</th>
                                    
                                    <th scope="col" className="py-3.5  text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden  ">Başlık</th>

                                    <th scope="col" colSpan={4} className="py-3.5  text-left text-sm font-normal text-slate-700 sm:hidden md:pl-0">Başlık</th>
                                    
                                    <th scope="col" className="py-3.5  text-center text-sm font-normal text-slate-700  sm:table-cell md:pl-0 hidden ">Fiyat</th> 

                                    <th scope="col" className="py-3.5  text-center text-sm font-normal text-slate-700  sm:table-cell md:pl-0 hidden ">Adet</th>

                                    <th scope="col" className="py-3.5  text-end text-sm font-normal text-slate-700   md:pl-0  ">Toplam</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                customer?.cartItems.map((item)=>(
                                    <tr className="border-b border-slate-200" key={item._id}>
                                    <td className="py-4 sm:table-cell hidden">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-12 h-12 object-cover"
                                    />
                                    </td>

                                    <td className="py-4 sm:table-cell hidden">
                                        <div className="flex flex-col">
                                            <span className="font-medium ">{item.title}</span>
                                            <span className="text-xs sm:hidden inline-block">Birim fiyatı {item.price}₺</span>
                                        </div>
                                    </td>

                                    <td className="py-4 sm:hidden" colSpan={4}>
                                        <div className="flex flex-col">
                                            <span className="font-medium ">Elma</span>
                                            <span className="text-xs sm:hidden inline-block">Birim fiyatı {item.price}₺</span>
                                        </div>
                                    </td>

                                    <td className="py-4  text-center sm:table-cell hidden">
                                        <span>{item.price}₺</span>
                                    </td>

                                    <td className="py-4  text-center sm:table-cell hidden">
                                        <span>{item.quantity}</span>
                                    </td>

                                    <td className="py-4  text-end">
                                        <span>{(item.quantity * item.price)}₺</span>
                                    </td>
                                </tr>
                                ))
                               }
                                
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th className="text-right pt-4 font-normal sm:table-cell hidden" colSpan={4} scope="rows">Ara Toplam</th>

                                    <th className="text-left pt-4 font-normal sm:hidden " colSpan={4}  scope="rows">Ara Toplam</th>


                                    <th className="text-right pt-4 font-normal " scope="rows">{(customer?.subTotal.toFixed(2))}₺</th>
                                </tr>

                                <tr>
                                    <th className="text-right pt-4 font-normal sm:table-cell hidden" colSpan={4} scope="rows">KDV</th>

                                    <th className="text-left pt-4 font-normal sm:hidden " colSpan={4}  scope="rows">KDV</th>

                                    <th className="text-right pt-4 font-normal text-red-600" scope="rows">+{customer?.tax}</th>
                                </tr>

                                <tr>
                                    <th className="text-right pt-4 font-normal sm:table-cell hidden" colSpan={4} scope="rows">Genel Toplam</th>
                                    <th className="text-left pt-4 font-normal sm:hidden " colSpan={4}  scope="rows">Genel Toplam</th>
                                    <th className="text-right pt-4 font-normal " scope="rows">{customer?.totalAmount}₺</th>
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
            <Button type="primary" size="large" onClick={handlePrint}>Yazdır</Button>
        </div>
      </Modal>


    </>
  );
};
export default PrintBill;
