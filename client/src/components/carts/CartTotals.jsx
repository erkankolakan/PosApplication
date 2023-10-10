import { Button } from 'antd'
import { ClearOutlined } from '@ant-design/icons';
const CartTotals = () => {
  return (
    <div className='cart h-screen max-h-[calc(100vh_-_90px)] flex flex-col '>
        <h2 className='bg-blue-600 text-white text-center rounded-sm py-4 font-semibold'>
            Sepetteki Ürünler
        </h2>

        <div className='cart-items bg-red-400'>
            <div className="cart-item"> cartItem</div>
        </div>

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
  )
}

export default CartTotals
