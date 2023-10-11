import { Button } from 'antd';
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const CartTotals = () => {
  return (

<div className='cart h-screen max-h-[calc(100vh_-_90px)] flex flex-col '>
        <h2 className='bg-blue-600 text-white text-center rounded-sm py-4 font-semibold'>
            Sepetteki Ürünler
        </h2>
          <ul className=' cart-items p-2 flex flex-col gap-y-3 overflow-y-auto'>
                  <li className="cart-item flex items-center justify-between">
                    {/* Sol taraftaki içerik */}
                    <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover rounded-sm" alt="urunler" />
                    <div className="flexcol ml-2 w-full">
                      <b>Elma</b> <br />
                      <div>12₺ x 2</div>
                    </div>
                    <div className="flex items-baseline justify-around w-full">
                      {/* Sağ taraftaki düğmeler */}
                      <Button type="primary" className="w-full !rounded-full items-center justify-center flex" size="small" icon={<PlusCircleOutlined />} />
                      <span className="font-semibold">2</span>
                      <Button type="primary" className="w-full !rounded-full items-center justify-center flex" size="small" icon={<MinusCircleOutlined />} />
                    </div>
                  </li>
          </ul>
   
<div className="cart-totals mt-auto ">
<div className='border-b border-t'>
    <div className='flex justify-between p-4 '>
        <b>Ara Toplam</b>
        <span>99₺</span>
    </div>

    <div className='flex justify-between p-4 '>
        <b>KDV</b>
        <span className='text-red-700'>+7.92₺</span>
    </div>
</div>
</div>

<div className='border-b mt-4'>
<div className='flex justify-between p-4 '>
    <b className='text-xl text-green-600'>Genel Toplam</b>
    <span className='text-xl'>106.92₺</span>
</div>
</div>

<div className='py-4 px-2 '>
<Button type='primary' className='w-full' size='large' >Sipariş Oluştur</Button>
<Button type='primary' danger className='w-full mt-2 ' size='large' icon={<ClearOutlined/>} >Temizle</Button>
</div>

</div>


  );
};

export default CartTotals;