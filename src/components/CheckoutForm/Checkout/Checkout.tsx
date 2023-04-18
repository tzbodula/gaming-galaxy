import React, {useEffect, useState} from "react";
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import { ClassNames } from "@emotion/react";
import InformationForm from "../InformationForm";
import PaymentForm from "../PaymentForm";
import { useRouter } from "next/router";
import commerce from '../../../lib/commerce'
import Link from "next/link";
const steps = ['Your information', 'Payment details']

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const router = useRouter()
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [informationData, setInformationData] = useState({})
    
    useEffect(() => {
        const generateToken = async () => {
      
            try {
                const token = await commerce.checkout.generateToken(cart, {type: 'cart'});

                setCheckoutToken(token)
            } catch (error) {
                console.log("Error retriving token", error)
            }
        }

        generateToken()
    }, [cart])
    
    
        

    const nextStep = (data) => {
        setInformationData(data)
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    let Confirmation = () => (order.customer ? (
        <>
        <div>
          <h5 className="text-center mx-auto my-4 border-y-2 border-sunset-pink py-8">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}! <br></br><br></br>Please check your email for download information</h5>
          <Divider className="ml-4" />
          <h6 className="text-center mx-auto">Order ref: {order.customer_reference}</h6>
        </div>
        <br />
        <div className="mx-auto text-center">
            <Link href="/">Back to Home</Link>
        </div>
      </>
    ) : (
      <div className="flex justify-center items-center">
        <CircularProgress sx={{
            '.MuiCircularProgress-svg': {
                color: "#f2542d !important",
            },
            '.MuiCircularProgress-circle': {
                stroke: "#f2542d !important",
            }
        }} />
      </div>
    ));
    

    const Form = () => (activeStep === 0
        ? <InformationForm nextStep={nextStep}/>
        : <PaymentForm informationData={informationData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>);
    return (
        <>
            <div className="">
                <div className="pb-72">
                    <div className="bg-transparent mx-auto xl:w-1/2 w-3/4">
                        <h4 className="text-center font-oxanium-semibold uppercase italic text-3xl p-4">CHECKOUT</h4>
                        <Stepper activeStep={activeStep} >
                            {steps.map((step) => (
                                <Step key={step} sx={{
                                    '.MuiStepper-root': {
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    },
                                    '.MuiSvgIcon-root': {
                                        color: "#119da4",
                                    },
                                    '.Mui-completed': {
                                        color: "#f2542d !important",
                                    },
                                    '.MuiStepIcon-text': {
                                        fontFamily: "oxanium",
                                        fontWeight: "bold"
                                        
                                    },
                                    '.Mui-active': {
                                        color: "#f2542d !important",
                                    },
           
                                }}>
                                    <StepLabel sx={{
                                        '.MuiStepLabel-label': {
                                            color:'#ffffff !important',
                                            fontFamily: "oxanium",
                                        },
                                    }}>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout