import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import SelectAddress from "./SelectAddress";
import AddDeliveryAddressModal from "../Modals/ShoppingCartsModals/AddDeliveryAddressModal";
import { Button, Typography } from "@material-tailwind/react";
import ProductSummary from "./ProductSummary";

import emptyList from "../../assets/icons/empty-list.png";

const ShippingAddress = () => {
  const { user, userRefetch } = useContext(AuthContext);
  const [address, setAddress] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getAddress = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/address/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.data);
      });
  };

  useEffect(() => {
    getAddress();
  }, [user?._id]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-h-[600px] h-fit w-full overflow-auto">
      <div className="">
        <Typography className="uppercase font-bold">
          Shopping Address
        </Typography>

        <div className="">
          <div className="grid grid-cols-1 gap-4 w-full h-full">
            {address.length > 0 ? (
              address.map((address, i) => (
                <SelectAddress key={i} address={address} />
              ))
            ) : (
              <div className="flex justify-center items-center">
                <img className="w-72" src={emptyList} alt="" />
              </div>
            )}
          </div>
        </div>

        <Button
          onClick={() => setOpenModal(true)}
          className="w-full h-12 rounded-sm mt-4"
        >
          <h1 className="">+ Add New Address</h1>
        </Button>
      </div>

      <ProductSummary />

      {openModal && (
        <AddDeliveryAddressModal
          closeModal={setOpenModal}
          getAddress={getAddress}
        />
      )}
    </div>
  );
};

export default ShippingAddress;
