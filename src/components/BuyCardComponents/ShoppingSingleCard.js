import React, { useContext, useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { setAddCartProducts } from "../../Slices/controllerSlice";
import { useDispatch } from "react-redux";

const ShoppingSingleCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const { cardId } = useParams();
  const dispatch = useDispatch();

  const handleGetAddCarts = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/addcart/user/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAddCartProducts(data));
      });
  };
  //   console.log(data);
  return (
    <div className="w-full h-fit flex justify-between gap-5 items-center border rounded-md p-2">
      <div className="flex justify-between items-center gap-4">
        <div>
          <img
            className="w-24 h-24"
            src={cardId ? data?.images[0] : data?.product.images[0]}
            alt=""
          />
        </div>
        <div className="text-left">
          <h1 className="text-black font-semibold  text-left">
            {cardId ? data?.title : data?.product?.title}
          </h1>
          <div>
            <p className="text-gray-500 text-xs">
              Shop:{" "}
              {cardId ? data?.storeId?.name : data?.product?.storeId?.name}
            </p>
            <p className="text-gray-500 text-xs">
              Type: {cardId ? data?.type : data?.product?.type}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <p className="text-gray-500">Price: </p>
            <h1 className="text-primary font-bold text-xl">
              ${cardId ? data?.price : data?.product?.price}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-black font-semibold mb-3">Quantity</h1>
        <h1 className="text-black font-semibold mb-3">1</h1>

        {!cardId && (
          <button
            onClick={() => setDeleteModal(true)}
            className="text-[#DB1A10] hover:text-rose-800 font-semibold underline cursor-pointer"
          >
            Remove
          </button>
        )}
      </div>
      <DeleteModal
        open={deleteModal}
        close={setDeleteModal}
        endpoint={`addcart/${user?._id}/${data?._id}`}
        refetch={handleGetAddCarts}
      />
    </div>
  );
};

export default ShoppingSingleCard;
