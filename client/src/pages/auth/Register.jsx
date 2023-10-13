import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen'>
        <div className='flex justify-between h-full'>
            <div className='xl:px-20 px-10 flex  flex-col w-full h-full justify-center relative'> 
                <h1 className=' text-center text-5xl font-semibold mb-2'>LOGO</h1>
                <Form layout='vertical'>
                    <Form.Item
                        label="Kullanıcı Adı"
                        name="username"
                        rules={[{ required: true, message: 'Lütfen bir kullanıcı adı giriniz. !' }]}
                    >
                        <Input />
                    </Form.Item>

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

                    <Form.Item
                        label="Şifre Tekrar"
                        name="passwordAgain"
                        rules={[{ required: true, message: 'Şifre Tekrar alanı boş bırakılamaz!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary' size='large' className='w-full' >Kaydol</Button>
                        {/* htmlType değerini belirmek zorundayız çünkü form ile veri göndereceğiz. Belirtmezsek normal bir buttondan farkı kalmaz. */}
                    </Form.Item>
                </Form>
                <div className='text-center w-full absolute bottom-8 left-0 '>Bir hesabın var mı?
                    <Link to={"/login"} className='text-blue-600 font-semibold'> Şimdi giriş yap</Link>
                </div>
            </div>
            <div className='xl:w-4/6 min-w-[800px] '>right</div>
        </div>
    </div>

  )
}

export default Register
