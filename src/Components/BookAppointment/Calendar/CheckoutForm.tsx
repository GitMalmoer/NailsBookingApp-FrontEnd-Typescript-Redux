import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import createAppointment from "../../../Interfaces/createAppointmentModel";
import { useCreateAppointmentMutation } from "../../../API/bookingApi";
import apiResponse from "../../../Interfaces/apiResponse";
import { MiniLoader } from "../../Common";

interface props {
  clientSecret: string;
  createAppointmentData : createAppointment,
}

export default function CheckoutForm(props: props) {
  const { clientSecret, createAppointmentData } = props;
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState<null | string | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [createAppointment] = useCreateAppointmentMutation();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error,paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://nailsbookingapp.netlify.app/",
      },
      redirect: "if_required",
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else if(error) {
      setMessage("An unexpected error occurred.");
    }
    if(paymentIntent?.status === "succeeded")
    {
        const createResponse : apiResponse = await createAppointment(createAppointmentData);
        if(createResponse.error)
        {
            console.log(createResponse);
        }
        navigate("/success/You payment has been successfull!")
    }
    setIsLoading(false);
  };

  return (
    <div className="shadow card border-muted mb-3">
      <div className="card-body ">
      <h5 className="card-title">Payment</h5>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button
            className="btn btn-success w-100 mt-2"
            disabled={isLoading || !stripe || !elements}
            id="submit"
          >
              {isLoading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                "Pay now"
              )}
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
