import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";

const ProductSummary = () => {
  const { buyProducts } = useSelector((state) => state.productSlice);

  const total = buyProducts.reduce((sum, element) => {
    if (element && element.price) {
      return sum + element.price;
    }
    return sum;
  }, 0);

  return (
    <div className="border-l p-4 max-h-[600px] h-fit">
      <Typography>Order Summary</Typography>
      <div className="flex justify-between items-center mt-4">
        <Typography>Total Items</Typography>
        <Typography>{buyProducts?.length}</Typography>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Typography>Order Total</Typography>
        <Typography>${total}</Typography>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Typography>Delivery Charges</Typography>
        <Typography>$00</Typography>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="w-44 mt-1">
          <Typography>Delivery Charges</Typography>
        </div>
        <div className="border-b w-full h-2"></div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between items-center mt-4">
        <Typography>Total Payable</Typography>
        <Typography>${total}</Typography>
      </div>
    </div>
  );
};

export default ProductSummary;
