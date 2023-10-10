// icon
import { SearchOutlined,HomeOutlined,ShoppingCartOutlined,CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined } from '@ant-design/icons';

import { Input } from 'antd';

export default function Header() {
  return (
    <div className='border-b mb-6'>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <a href="/"><h2 className='text-2xl font-semibold md:text-4xl'>LOGO</h2></a>
            </div>
            <div className="header-search flex-1">
            <Input className='rounded-full max-w-[800px]' size="large" placeholder=" ürün ara..." prefix={<SearchOutlined />} />
            </div>
            <div className="menu-links flex justify-between items-center gap-8 ">
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <HomeOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Anasayfa</span>
                </a>
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <ShoppingCartOutlined className='md:text-2xl text-xl'/> 
                    <span className='md:text-xs  text-[10px]'>Sepet</span>
                </a>
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <CopyOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Fatura</span>
                </a>
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <UserOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Müşteriler</span>
                </a>
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <BarChartOutlined  className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>İstatistikler</span>
                </a>
                <a href={"/"} className='menu-link flex flex-col justify-center items-center'>
                    <LogoutOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Çıkış</span>
                </a>
            </div>
        </header>
    </div>
  )
}
