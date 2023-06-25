import React from "react";
import ShoppingSingleCard from "./ShoppingSingleCard";
import { useSelector } from "react-redux";
import ProductSummary from "./ProductSummary";
import { useParams } from "react-router-dom";

const ShoppingCards = () => {
  const { buyProducts } = useSelector((state) => state.productSlice);
  const { addCartProducts } = useSelector((state) => state.controllerSlice);
  const { cardId } = useParams();
  const products = cardId ? buyProducts : addCartProducts;
  //   console.log(cardId);
  return (
    <>
      <section className="max-h-[600px] h-fit w-full overflow-auto">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-[#4CAF50] text-sm md:text-xl font-semibold">
            {buyProducts?.length} new item(s) have been added to your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-2 h-fit">
            {products &&
              products?.map((item, i) => (
                <ShoppingSingleCard key={i} data={item} />
              ))}
          </div>
          <ProductSummary />
        </div>
      </section>
    </>
  );
};

export default ShoppingCards;
