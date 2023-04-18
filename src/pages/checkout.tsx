import { useRouter } from 'next/router'
import Checkout from '../components/CheckoutForm/Checkout/Checkout'
import { useCartDispatch } from '../context/cart'
import commerce from '../lib/commerce'

import { useState } from 'react'

const CheckoutPage = () => {
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const {setCart} = useCartDispatch()

  const router = useRouter()
  const cart = router.query.cart
  const refreshCart = async () => {
    commerce.cart.empty().then((response) => console.log("Cart Sucessfully Emptied"));
  }

  const handleCheckout = async(checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  return (
    <Checkout cart={cart} order={order} onCaptureCheckout={handleCheckout} error={errorMessage}/>
  )
}

export default CheckoutPage