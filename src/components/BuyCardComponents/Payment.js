import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const Payment = () => {
  const currency = "USD";
  return (
    <div className="w-full overflow-auto">
      <div style={{ maxWidth: "750px", minHeight: "200px" }}>
        <PayPalScriptProvider
          options={{
            clientId: "test",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Payment;
