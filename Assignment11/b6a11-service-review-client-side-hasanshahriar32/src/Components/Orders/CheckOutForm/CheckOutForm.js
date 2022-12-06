import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
const CheckOutForm = ({ data }) => {
  const { price, name, email } = data;
  const [cardErr, setCardErr] = React.useState(null);
  const [cardSuccess, setCardSuccess] = React.useState(null);
  const [transationId, settransationId] = React.useState(null);
  const [payProcessing, setPayProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(" https://paradox-pet.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // console.log(data);
      });
  }, [price]);
  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // setPayProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardErr("");
    if (error) {
      setCardErr(error.message);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardErr(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      alert("Payment Successful");
      setCardSuccess("Payment Successful");
      settransationId(paymentIntent.id);
    } else {
      alert("Payment Failed");
    }
    //hide the form
    const form = document.getElementById("payment-form");
    form.style.display = "none";
  };

  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button
          pill="true"
          type="submit"
          className="m-3"
          disabled={!stripe || clientSecret || payProcessing}
        >
          Pay
        </Button>
      </form>
      <p className="text-red-400">{cardErr}</p>
      {cardSuccess && (
        <div>
          <p className="text-green-500">Payment Successful</p>
          <p className="text-green-400">Transaction Id: {transationId}</p>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
