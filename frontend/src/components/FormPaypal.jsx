import React from 'react'

import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"

const FormPaypal=()=> {



    const initianlOptions ={
        "clientId":"AafAivx3ce3upGwTAKJZ4rdmAWfhvIzvqkcGLM1Cvq-EcyaaZ5ekRouExH_iXGEHDdo3FAFLZB9iCJJ0",
         currency:"USD",
         intent:"capture"
    }
    const createOrder = (data,actions)=> {
          return actions.order.create({
            purchase_units:[
                {
                    amount:{
currency:"USD",
                        value:"700"
                    }
                }
            ]

        })
    }

    const onApprove = (data,actions)=> {
      return actions.order.capture().then(function(details){
        alert("Pago Completado" + details.payer.name.given_name)
      })
    }

    const onCancel = () => {
        alert("Pago Cancelado");
    };


  return (

    <div>
        <PayPalScriptProvider options={initianlOptions} >
<PayPalButtons
            
            style={{
                layout: "horizontal",
                color: "blue",
                shape:"rect",
                label: "paypal"
            }}
            createOrder={(data,actions)=>createOrder(data,actions)}
            onApprove={(data,actions)=> onApprove(data,actions)}
            onCancel={onCancel}
            />
            
        </PayPalScriptProvider>
    </div>
  )

}



export default FormPaypal