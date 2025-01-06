import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const FormPaypal = ({ total }) => {
  const initialOptions = {
    clientId: "ARgFmizcTqV7HILDZCqdyEQThmEdyzoihRrf7sUw3zDk9US3SyLd6skFDgajV3KPONJkhziDU-3_-oMP",
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
      console.log(actions.order.capture());
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
