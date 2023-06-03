import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

interface props{
    clientSecret: string,
    stripePaymentIntentId : string,
}
function Payment(props:props) {
    const {clientSecret, stripePaymentIntentId} = props

    const stripePromise = loadStripe(
        "pk_test_51Mok3vJnc4zRNwWk5sc4K8wYLmuUfQ0BBRpJMrPMbPb7qy6xlD8eWB9oE0BqgowzFYlXKxQQvuawi1kOk45Wlowb00oHauQghc"
      );

      // const appearance = {
      //   theme: 'stripe',
      // };
      const options  = {
        clientSecret,
      };

  return (
    <div>
      {" "}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret = {clientSecret} />
        </Elements>
      )}
    </div>
  );
}

export default Payment