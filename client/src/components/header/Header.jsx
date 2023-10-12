// icon
import { SearchOutlined,HomeOutlined,ShoppingCartOutlined,CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined } from '@ant-design/icons';

import {Link} from "react-router-dom"

import { Badge, Input } from 'antd';

const Header = () => {
  return (
<div className='border-b mb-6'>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <Link to="/"><h2 className='text-2xl font-semibold md:text-4xl'>LOGO</h2></Link>
{/* tailwindcss de md: yazarkan 768px ve üstünde olacakları söylemiş oluyoruz. */}
            </div>

            <div className="header-search flex flex-1 justify-center">
            <Input className='rounded-full max-w-[800px]' size="large" placeholder=" ürün ara..." prefix={<SearchOutlined />} />
            </div>

            <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-3 ">
                <Link to={"/"} className='menu-link flex flex-col justify-center  hover:text-[#40a9ff] transition-all  items-center'>
                    <HomeOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Anasayfa</span>
                </Link>
                <Badge count={5} offset={[0,1]} className='md:flex hidden'>
                    <Link to={"/cart"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                            <ShoppingCartOutlined className='md:text-2xl text-xl'/> 
                            <span className='md:text-xs  text-[10px]'>Sepet</span>
                    </Link>
                </Badge>
                <Link to={"/"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                    <CopyOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Fatura</span>
                </Link>
                <Link to={"/"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                    <UserOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Müşteriler</span>
                </Link>
                <Link to={"/"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                    <BarChartOutlined  className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>İstatistikler</span>
                </Link>
                <Link to={"/"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                    <LogoutOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs  text-[10px]'>Çıkış</span>
                </Link>
            </div>


            <Badge count={5} offset={[0,1]} className='md:hidden flex'>
                    <Link to={"/"} className='menu-link flex flex-col justify-center hover:text-[#40a9ff] transition-all   items-center'>
                            <ShoppingCartOutlined className='text-2xl '/> 
                            <span className='md:text-xs  text-[10px]'>Sepet</span>
                    </Link>
                </Badge>


        </header>
    </div>
  )
}

export default Header
