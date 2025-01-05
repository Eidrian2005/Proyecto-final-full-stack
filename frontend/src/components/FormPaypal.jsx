import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // Importamos los componentes de PayPal

const FormPaypal = ({ total }) => {
  // Configuración inicial para PayPal
  const initialOptions = {
    clientId: "AafAivx3ce3upGwTAKJZ4rdmAWfhvIzvqkcGLM1Cvq-EcyaaZ5ekRouExH_iXGEHDdo3FAFLZB9iCJJ0", // ID del cliente (este es de prueba o producción)
    currency: "USD", // Moneda en la que se hará el pago
    intent: "capture", // Tipo de pago (captura inmediata)
  };

  // Función para crear el pedido
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency: "USD", // Moneda del pedido
            value: total.toFixed(2), // Total a pagar, redondeado a 2 decimales
          },
        },
      ],
    });
  };

  // Función que se ejecuta cuando el pago es aprobado
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Mostramos un mensaje con el nombre del comprador
      alert("Pago Completado: " + details.payer.name.given_name);
    });
  };

  // Función que se ejecuta si el usuario cancela el pago
  const onCancel = () => {
    alert("Pago Cancelado"); // Avisamos que el pago fue cancelado
  };

  return (
    <div>
      {/* Proveedor de PayPal, necesario para que funcione */}
      <PayPalScriptProvider options={initialOptions}>
        {/* Botones de PayPal */}
        <PayPalButtons
          style={{
            layout: "horizontal", // Diseño horizontal de los botones
            color: "blue", // Color del botón
            shape: "rect", // Forma rectangular
            label: "paypal", // Texto del botón
          }}
          createOrder={(data, actions) => createOrder(data, actions)} // Lógica para crear el pedido
          onApprove={(data, actions) => onApprove(data, actions)} // Lógica cuando el pago es exitoso
          onCancel={onCancel} // Lógica cuando el pago es cancelado
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default FormPaypal;
