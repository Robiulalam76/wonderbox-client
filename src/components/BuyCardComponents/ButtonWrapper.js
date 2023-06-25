import { useContext, useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useNavigate } from "react-router-dom";

// This values are the props in the UI
const style = { layout: "vertical" };

const ButtonWrapper = ({ currency, showSpinner, handleOrderByWallet }) => {
  const { openToast, user } = useContext(AuthContext);
  const { totalPrice, cards } = useSelector((state) => state.productSlice);
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        disabled={false}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: totalPrice,
                  },
                },
              ],
            })
            .then((orderId) => {
              console.log("order id: ", orderId);
              // Your code here after creating the order
              return orderId;
            });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            handleOrderByWallet();
            console.log(data);
          });
        }}
      />
    </>
  );
};

export default ButtonWrapper;
