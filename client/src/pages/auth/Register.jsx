import { Button, Carousel, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
        setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        // Başarılı yanıt durumu (HTTP 200 OK)
        message.success("Kaydınız başarılı bir şekilde yapıldı");
        navigate("/login");
        setLoading(false)
      } else {
        // Hata yanıtı durumu
        const errorData = await res.json(); // Sunucudan gelen hata verisini al
        message.error(errorData); // Hata mesajını kullanıcıya göster
      }
    } catch (error) {
      message.error("Birşeyler yanlış gitti daha sonra tekrar deneyin"); // Hata mesajını kullanıcıya göster
      console.log(error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        {/* sol taraf */}
        <div className="xl:px-20 px-10 flex  flex-col w-full h-full justify-center relative">
          <h1 className=" text-center text-5xl font-semibold mb-2">LOGO</h1>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Kullanıcı Adı"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Lütfen bir kullanıcı adı giriniz. !",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email Adı"
              name="email"
              rules={[{ required: true, message: "Lütfen bir Email giriniz!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen bir şifre giriniz!" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Şifre Tekrar"
              name="passwordAgain"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Şifre Tekrar alanı boş bırakılamaz!",
                },
                {
                  required: true,
                  message: "Şifreler eşleşmiyor",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Şifreler eşleşmiyor"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full"
                loading={loading}
              >
                Kaydol
              </Button>
              {/* htmlType değerini belirmek zorundayız çünkü form ile veri göndereceğiz. Belirtmezsek normal bir buttondan farkı kalmaz. */}
            </Form.Item>
          </Form>
          <div className="text-center w-full absolute bottom-8 left-0 ">
            Bir hesabın var mı?
            <Link to={"/login"} className="text-blue-600 font-semibold">
              {" "}
              Şimdi giriş yap
            </Link>
          </div>
        </div>

        {/* sağ taraf */}
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            {/* Carousel -> silide */}
            <div className="w-full">
              <Carousel className="px-6" autoplay>
                <AuthCarousel
                  img="images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
