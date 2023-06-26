import React from "react";
import FooterInbox from "../../components/HomeComponents/FooterInbox/FooterInbox";
import ProductRequirements from "../../components/HomeComponents/ProductRequirements/ProductRequirements";
import VerifiedStores from "../../components/HomeComponents/VerifiedStores/VerifiedStores";
import Banner from "../../components/HomeComponents/Banner/Banner";
import LatestProducts from "../../components/HomeComponents/LatestProducts/LatestProducts";
import TopRankingProducts from "../../components/HomeComponents/TopRankingProducts/TopRankingProducts";
import PopularProducts from "../../components/HomeComponents/PopularProducts/PopularProducts";

const Home = () => {
  const lik = process.env.REACT_APP_API_KEY;
  console.log(lik);
  return (
    <section className="bg-[#fafcfd]">
      <div className="max-w-primary mx-auto px-4 pt-4">
        <Banner />
        <LatestProducts />
        {/* <Product /> */}
        <VerifiedStores />
        <TopRankingProducts />
        <PopularProducts />
        <ProductRequirements />
      </div>

      <div className="bg-[#3432FF]">
        <div className="max-w-primary mx-auto px-4">
          <FooterInbox />
        </div>
      </div>
    </section>
  );
};

export default Home;
