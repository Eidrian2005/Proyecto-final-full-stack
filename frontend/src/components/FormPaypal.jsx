import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const FormPaypal = ({ total }) => {
  const initialOptions = {
    clientId: "AafAivx3ce3upGwTAKJZ4rdmAWfhvIzvqkcGLM1Cvq-EcyaaZ5ekRouExH_iXGEHDdo3FAFLZB9iCJJ0",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency: "USD",
            value: total.toFixed(2), // Usar el total pasado como prop
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      alert("Pago Completado: " + details.payer.name.given_name);
    });
  };

  const onCancel = () => {
    alert("Pago Cancelado");
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "blue",
            shape: "rect",
            label: "paypal",
          }}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          onCancel={onCancel}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default FormPaypal;
