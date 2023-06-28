import React, { useContext, useEffect, useState } from "react";
import AddDeliveryAddressModal from "../../components/Modals/ShoppingCartsModals/AddDeliveryAddressModal";
import ShoppingAddress from "../../components/DashboardComonents/PlaceOrder/ShoppingAddress";
import { AuthContext } from "../../ContextAPI/AuthProvider";

const MyShoppingAddress = () => {
  const { user, userRefetch } = useContext(AuthContext);
  const [allAddress, setAllAddress] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getAddress = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/address/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllAddress(data.data);
      });
  };

  useEffect(() => {
    getAddress();
  }, [user]);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <h1 className="text-primary font-bold text-left uppercase mt-2">
        Shopping Address
      </h1>

      <div className="">
        <button
          onClick={() => setOpenModal(true)}
          className="w-full h-14 flex justify-center items-center rounded-md text-black cursor-pointer my-4 bg-[#0029FF14] hover:bg-primary hover:text-white duration-300 "
        >
          <h1 className=" font-semibold">+ Add New Address</h1>
        </button>

        <div className="grid grid-cols-1 gap-4 w-full">
          {allAddress &&
            allAddress.map((address, i) => (
              <ShoppingAddress key={i} address={address} refetch={getAddress} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        {openModal && (
          <AddDeliveryAddressModal
            closeModal={closeModal}
            getAddress={getAddress}
          />
        )}
      </div>
    </div>
  );
};

export default MyShoppingAddress;
