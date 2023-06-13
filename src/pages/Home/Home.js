/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import FooterInbox from "../../components/HomeComponents/FooterInbox/FooterInbox";
import ProductRequirements from "../../components/HomeComponents/ProductRequirements/ProductRequirements";
import Product from "../Product/Product";
import VerifiedStores from "../../components/HomeComponents/VerifiedStores/VerifiedStores";
import Banner from "../../components/HomeComponents/Banner/Banner";
import LatestProducts from "../../components/HomeComponents/LatestProducts/LatestProducts";
import TopRankingProducts from "../../components/HomeComponents/TopRankingProducts/TopRankingProducts";

const Home = () => {
  return (
    <section className="bg-white">
      <div className="max-w-primary mx-auto px-4 pt-4">
        <Banner />
        <LatestProducts />
        {/* <Product /> */}
        <VerifiedStores />
        <TopRankingProducts />
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
