import React from 'react'
import { Divider } from '@mui/material'
import {Elements, CardElement, PaymentElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe } from '@stripe/stripe-js'
import Review from './Review'



const PaymentForm = ({checkoutToken, backStep, informationData, onCaptureCheckout, nextStep}) => {

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC)

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({type: 'card', card: cardElement});

    if(error) {
      console.log("Error creating payment method: ", error)
    } else {
      let phoneNumber = ""
      let userDiscord = ""

      if (informationData.phoneNumber == null || informationData.phoneNumber == "") {
        phoneNumber = "Not provided"
      } else {
        phoneNumber = informationData.phoneNumber
      }

      if (informationData.discord == null || informationData.discord == "") {
        userDiscord = "Not provided"
      } else {
        userDiscord = informationData.userDiscord
      }

      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: 
        { 
          firstname: informationData.firstName, 
          lastname: informationData.lastName, 
          email: informationData.email, 
          brand: informationData.brandName,
          phone: phoneNumber,
          discord: userDiscord
        },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      }

      onCaptureCheckout(checkoutToken.id, orderData)

      nextStep();
    }
  }




  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <Divider/>
      <h6 className='my-5 mx-auto text-center'>Payment Method</h6>
      <Elements stripe={stripePromise}>
        <ElementsConsumer> 
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement className='bg-cloudy-day/90 border-2 border-sunset-pink hover:border-cloudy-day transition-all font-oxanium-medium text-cloudy-day p-5 mb-4 w-full'/>
              <div className='flex justify-between'>
              <button onClick={backStep} className="bg-nightsky w-fit px-4 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky mr-4">Back</button>
              <button type="submit" disabled={!stripe} className="bg-nightsky w-fit px-4 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky">
                Pay { checkoutToken.live.subtotal.formatted_with_symbol}
              </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>

    </>
  )
}

export default PaymentForm