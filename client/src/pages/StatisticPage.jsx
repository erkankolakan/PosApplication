import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl text-center font-semibold  mb-4">
          İstatistiklerim
        </h1>

        <div className="statistic-section">
          <h2 className="text-lg">
            Hoşgeldin
            <span className="text-xl text-green-700 font-semibold">Erkan</span>
          </h2>

          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard title={"Toplam Müşteri"} amount={"6"} img={"images/user.png"} />
            <StatisticCard title={"Toplam Kazanç"} amount={"660.96₺"} img={"images/money.png"}/>
            <StatisticCard title={"Toplam Satış"} amount={"6"} img={"images/sale.png"}/>
            <StatisticCard title={"Toplam Ürün"} amount={"28"} img={"images/product.png"}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatisticPage;