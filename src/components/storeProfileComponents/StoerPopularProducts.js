import React, { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";

const StoerPopularProducts = ({ storeId }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/product/popular/${storeId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.length > 0 &&
        products.map((product, i) => <ProductCard key={i} product={product} />)}
    </div>
  );
};

export default StoerPopularProducts;
