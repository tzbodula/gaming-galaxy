import { useCartDispatch, useCartState } from "../context/cart";

import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

import commerce from "../lib/commerce";




function CartItem({ id, name, quantity, line_total, image }) {
    const {setCart} = useCartDispatch()
    const handleUpdateCart = ({cart}) => setCart(cart)
    let router = useRouter()
    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart)

    const decrementQuantity = () => {
        quantity > 1 ? commerce.cart.update(id, {quantity: quantity - 1}).then(handleUpdateCart) :
        removeItem()
    }

    const incrementQuantity = () => commerce.cart.update(id, {quantity: quantity + 1}).then(handleUpdateCart)

    return (
        <div className="flex items-center hover:bg-nightsky/20   hover:border-sunset-pink transition-all -mx-8 px-6 py-5">
        <div className="flex w-2/5">
            <div className="xs:hidden xl:w-20">
                <Image className="h-24" src={image.url} alt="" width={1920} height={1080} />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{name}</span>
                <button onClick={removeItem} className="font-semibold hover:text-sunset-pink text-gray-500 text-xs">Remove</button>
            </div>
        </div>
        <div className="flex justify-center w-1/5">

            <button onClick={decrementQuantity}>
                <svg className="fill-current text-white mr-2 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </button>

            <input className="p-2 text-sm w-8 bg-nightsky text-white border-2 border-sunset-pink placeholder:text-white placeholder:italic text-center" type="text" value={quantity} />

            <button onClick={incrementQuantity}>
                <svg className="fill-current text-white ml-2 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </button>

        </div>
        <span className="text-center w-1/5 font-oxanium-semibold text-sm">{line_total.formatted_with_symbol}</span>
        <span className="text-center w-1/5 font-oxanium-semibold text-sm">{line_total.formatted_with_symbol}</span>
    </div>
    )
}


export default function CartPage() {
    const { line_items, subtotal, id } = useCartState()
    const isEmpty = line_items.length === 0
    const router = useRouter()
    console.log("Line Items", JSON.stringify(line_items))
    if (isEmpty) { 
        return <p className="mx-auto text-center py-64 font-oxanium-extrabold italic text-sunset-pink uppercase">Your cart is empty!</p>
    } 

    const particlesInit = useCallback(async (engine: Engine) => {

        await loadStarsPreset(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const options = {
        preset: "stars",
        background: {
            "opacity": 0
        }
    };

    function goToCheckout () {
        router.push({
            pathname: '/checkout',
            query: {cart: id}
        }, '/checkout');
    }

    return (
        <div className="mx-auto text-center">
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} className="xs:hidden xl:block" />
            <div className="container mx-auto ">
                <div className="grid grid-rows-2 grid-cols-1 xl:flex shadow-md">
                    <div className="xs:pt-8 xl:w-3/4 bg-transparent xl:px-10 xl:py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-oxanium-bold text-2xl uppercase italic">Shopping Cart</h1>
                            <h2 className="font-oxanium-semibold text-2xl text-sunset-pink">{line_items.length} {line_items.length > 1 ? "Items" : "Item" }</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-sunset-pink text-xs uppercase w-2/5 text-center">Product Name</h3>
                            <h3 className="font-semibold  text-sunset-pink text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold  text-sunset-pink text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold  text-sunset-pink text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
       

                        {line_items.map(item => <CartItem key={item.id} {...item} />)}

     

                        <a href="/create" className="flex font-oxanium-bold uppercase italic text-sunset-pink text-sm mt-10">

                            <svg className="fill-current mr-2 text-sunset-pink w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="xl:w-1/4 xl:px-8 xl:py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {line_items.length}</span>
                            <span className="font-semibold text-sm">{subtotal.formatted_with_symbol}</span>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-oxanium-extrabold text-sunset-pink italic inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full bg-nightsky text-white border-2 border-sunset-pink placeholder:text-white placeholder:italic" />
                        </div>
                        <button className="bg-nightsky w-1/2 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky">Apply</button>
                        <div className="border-t my-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{subtotal.formatted_with_symbol}</span>
                            </div>
                            <button onClick={goToCheckout} className="bg-nightsky w-full py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}