import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { Button } from "@material-tailwind/react";

const Payment = ({ handleOrderByWallet }) => {
  const currency = "USD";
  return (
    <div className="w-full overflow-auto">
      <div className="max-w-[700px] w-full mx-auto">
        <Button
          onClick={() => handleOrderByWallet("wallet")}
          className="w-full h-14 rounded shadow-none bg-primary text-xl mb-4"
        >
          My Wallet
        </Button>
        <PayPalScriptProvider
          options={{
            clientId: "test",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper
            currency={currency}
            showSpinner={true}
            handleOrderByWallet={handleOrderByWallet}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Payment;
