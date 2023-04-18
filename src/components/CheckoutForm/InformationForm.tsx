import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid } from '@mui/material'
import {useForm, FormProvider} from 'react-hook-form'
import { useRouter } from 'next/router'
import FormInput from './CustomTextField'

const InformationForm = ({nextStep}) => {
  let router = useRouter()

  const goToCart = () => {
    router.push('/cart')
  }

  const methods = useForm();

  return (
    <div className='text-sunset-pink'>
        <FormProvider {...methods}>
            <form className='mt-6' onSubmit={methods.handleSubmit((data) => nextStep({...data}))}>
              <Grid container spacing={3}>
                <FormInput required name='firstName' label='First Name' placeholder="Please provide your preferred first name"/>
                <FormInput required name='lastName' label='Last Name' placeholder="Please provide your legal last name"/>
                <FormInput required name='brandName' label='Brand Name' placeholder="Please provide your brand's name for personalization"/>
                <FormInput required name='email' label='Email' placeholder="We'll send your personal items to this email when they are ready"/>
                <FormInput required={false} name='discord' label='Discord' placeholder="We'll message you on discord when your personal items are ready"/>
                <FormInput required={false} name='phoneNumber' label='Phone Number' placeholder="We'll text you at this number when your personal items are ready"/>
              </Grid>
              <br/>
              <div className='flex justify-between'>
              <button onClick={goToCart} className="bg-nightsky w-fit py-2 px-4 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky mr-4">Back to Cart</button>
              <button type="submit" className="bg-nightsky w-fit px-4 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-pink hover:bg-sunset-pink hover:border-nightsky transition-all hover:text-nightsky">Next</button>
              </div>
              <h3 className='mt-4 text-sm italic'>* indicates required field</h3>
            </form>
        </FormProvider>
    </div>
  )
}

export default InformationForm