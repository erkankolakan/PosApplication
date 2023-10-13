import { Button, Carousel, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const Login = () => {
  return (
    <div className='h-screen'>
        <div className='flex justify-between h-full'>
{/* sol taraf */}
            <div className='xl:px-20 px-10 flex  flex-col w-full h-full justify-center relative'> 
                <h1 className=' text-center text-5xl font-semibold mb-2'>LOGO</h1>
                <Form layout='vertical'>
                    <Form.Item
                        label="Email Adı"
                        name="email"
                        rules={[{ required: true, message: 'Lütfen bir Email giriniz!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Şifre"
                        name="password"
                        rules={[{ required: true, message: 'Lütfen bir şifre giriniz!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item name={"remember"} valuePropName='checked'>
                        <div className='flex justify-between items-center'>
                            <Checkbox>Beni hatırla</Checkbox>
                            <p>Şifreni unuttum</p>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary' size='large' className='w-full' >Giriş Yap</Button>
                        {/* htmlType değerini belirmek zorundayız çünkü form ile veri göndereceğiz. Belirtmezsek normal bir buttondan farkı kalmaz. */}
                    </Form.Item>
                </Form>
                <div className='text-center w-full absolute bottom-8 left-0 '>Bir hesabın yok mu?
                    <Link to={"/register"} className='text-blue-600 font-semibold'> Şimdi kaydol ol</Link>
                </div>
            </div>
            
{/* sağ taraf */}
    <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full'>
        <div className='w-full h-full flex items-center'>
            {/* Carousel -> silide */}
            <div className='w-full'>
                <Carousel className='px-6' autoplay>
                    <AuthCarousel img="images/responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk"/>
                    <AuthCarousel img="images/statistic.svg" title="İstatistikler" desc="Geniş Tutulan İstatistikler"/>
                    <AuthCarousel img="images/customer.svg" title="Müşteri Memnuniyeti" desc="Deneyim Sonunda Üründen Memnun Müşteriler"/>
                    <AuthCarousel img="images/admin.svg" title="Yönetici Paneli" desc="Tek Yerden Yönetim"/>
                </Carousel>
            </div>
        </div>
    </div>





        </div>
    </div>

  )
}

export default Login
