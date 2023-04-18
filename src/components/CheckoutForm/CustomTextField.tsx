import React from 'react'
import {TextField, Grid} from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({name, label, required, placeholder}) => {
  const {control} = useFormContext()
  return (
    <Grid item xs={12} sm={6}>
        <Controller
            render={({field}) => <TextField {...field} fullWidth label={label} required={required} name={name} placeholder={placeholder} color="secondary" variant="outlined" inputProps={{min: 0,  style: { textAlign: 'center' }}} sx={{
                '.MuiInputBase-input': {
                    backgroundColor: "#100b2f",
                    color: "#ffffff",
                    fontFamily: 'oxanium',
                },
                "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#ffffff" },
                },
                '.MuiInputLabel-formControl': {
                    color: "#ffffff",
                    fontFamily: 'oxanium',
                    fontWeight: 'bold'
                },
                '.MuiInputLabel-animated': {
                    paddingBottom: '1rem',
                }
            }}/>}
            control={control}
            name={name}
        />
    </Grid>
  )
}

export default FormInput