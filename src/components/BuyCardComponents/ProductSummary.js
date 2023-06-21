import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductSummary = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="border-l p-4">
      <Typography>Order Summary</Typography>
      <div className="flex justify-between items-center mt-4">
        <Typography>Order Total</Typography>
        <Typography>${product?.price}</Typography>
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

      <div className="flex justify-between items-start gap-4 w-fit mt-4">
        <img
          className="h-32 w-60 object-cover"
          src={product?.images[0]}
          alt=""
        />
        <div className="flex-grow flex flex-col justify-between gap-4 h-full w-full">
          <div className="grid grid-cols-1 gap-1 h-fit w-full">
            <Typography variant="h5" className="font-bold">
              {product?.title}
            </Typography>
            <Typography variant="small" color="gray">
              Expected on: 30/06/2023
            </Typography>
          </div>
          <Typography variant="h4" color="pink" className="font-bold">
            ${product?.price}
          </Typography>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between items-center mt-4">
        <Typography>Total Payable</Typography>
        <Typography>${product?.price}</Typography>
      </div>

      <Button
        disabled
        className="bg-pink-500 w-full h-12 rounded-sm shadow-none mt-4"
      >
        Place Order
      </Button>
    </div>
  );
};

export default ProductSummary;
