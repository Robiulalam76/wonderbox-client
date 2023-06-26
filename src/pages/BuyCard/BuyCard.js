import React, { useContext, useEffect, useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import ShippingAddress from "../../components/BuyCardComponents/ShippingAddress";
import Payment from "../../components/BuyCardComponents/Payment";
import PaymentSuccess from "../../components/BuyCardComponents/PaymentSuccess";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
import ShoppingCards from "../../components/BuyCardComponents/ShoppingCards";
import {
  setBuyProducts,
  setCards,
  setTotalPrice,
} from "../../Slices/productSlice";
import { setSelectedAddress } from "../../Slices/controllerSlice";

const BuyCard = () => {
  const { openToast, user, userRefetch } = useContext(AuthContext);
  const { selectedAddress, addCartProducts } = useSelector(
    (state) => state.controllerSlice
  );
  const { buyProducts, cards, totalPrice } = useSelector(
    (state) => state.productSlice
  );
  const product = useLoaderData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cardId } = useParams();
  const products = cardId ? buyProducts : addCartProducts;

  useEffect(() => {
    dispatch(setBuyProducts([product]));
  }, [product]);

  const generateCards = () => {
    if (currentIndex === 1 && !selectedAddress?._id) {
      openToast("error", "Please Select You Address");
      return;
    }
    setIsLoading(true);
    let cards = [];
    let totalPrice = 0;
    if (cardId) {
      for (let i = 0; i < products.length; i++) {
        const newCard = {
          product: products[i]?._id,
          title: products[i]?.title,
          user: user?._id,
          store: products[i]?.storeId._id,
          type: products[i]?.type,
          payType: "Online",
          price: products[i]?.price,
          address: selectedAddress._id,
        };

        if (products[i]?.type === "Wallet") {
          newCard["amount"] = products[i].amount;
        } else {
          newCard["features"] = products[i].features;
        }
        totalPrice = totalPrice + parseInt(products[i]?.price);
        cards.push(newCard);
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        const newCard = {
          product: products[i]?.product?._id,
          title: products[i]?.product?.title,
          user: user?._id,
          store: products[i]?.product?.storeId._id,
          amount: products[i]?.product?.discount,
          type: products[i]?.product?.type,
          payType: "Online",
          price: products[i]?.product?.price,
          address: selectedAddress._id,
        };

        if (products[i]?.product?.type === "Wallet") {
          newCard["amount"] = products[i]?.product.amount;
        } else {
          newCard["features"] = products[i]?.product.features;
        }
        totalPrice = totalPrice + parseInt(products[i]?.product?.price);
        cards.push(newCard);
      }
    }
    dispatch(setTotalPrice(totalPrice));
    dispatch(setCards(cards));
    setIsLoading(false);
    if (totalPrice && cards) {
      setCurrentIndex(2);
    }
  };

  const handleOrderByWallet = (wallet) => {
    setIsLoading(true);
    const newCards = {
      cards: cards,
    };
    if (wallet) {
      newCards.option = "wallet";
      if (totalPrice > user.wallet) {
        openToast(
          "error",
          `You cannot Purchase more than your ${user?.wallet} wallet balance!`
        );
        setIsLoading(false);
        return;
      }
    } else {
      newCards.option = "payment";
    }

    if (newCards) {
      fetch(`${process.env.REACT_APP_API_KEY}/api/card/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCards),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          userRefetch();
          dispatch(setSelectedAddress(null));
          setIsLoading(false);
          if (data) {
            userRefetch();
            navigate("/dashboard/orders");
          }
        });
    } else {
      openToast("error", "Something went wrong!");
      setIsLoading(false);
      return;
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const transitionClass =
    currentIndex === 0 ? "slide-in-left" : "slide-in-right";

  return (
    <div className="max-w-primary mx-auto py-4 px-4">
      <div className="w-full py-4 border rounded-xl px-4 h-fit">
        <div className="overflow-auto w-full h-full">
          {buyProducts?.length > 0 ? (
            <div className={transitionClass}>
              {currentIndex === 0 && <ShoppingCards />}
              {currentIndex === 1 && <ShippingAddress />}
              {currentIndex === 2 && (
                <Payment handleOrderByWallet={handleOrderByWallet} />
              )}
              {currentIndex === 3 && <PaymentSuccess />}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <h1>No Products</h1>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            className="rounded-sm shadow-none hover:shadow-none"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Prev
          </Button>
          {currentIndex === 1 ? (
            <Button
              className="rounded-sm shadow-none hover:shadow-none"
              onClick={() => generateCards()}
            >
              Place Order
            </Button>
          ) : (
            <>
              {currentIndex !== 2 && (
                <Button
                  className="rounded-sm shadow-none hover:shadow-none"
                  onClick={() => handleNext()}
                >
                  Next
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-md w-60 h-60 flex flex-col justify-center items-center gap-2">
            <Spinner className="w-24 h-24" />
            {/* <h1 className="text-center">Generate Cards</h1> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyCard;
