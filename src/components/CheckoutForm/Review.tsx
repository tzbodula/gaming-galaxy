import React from 'react'
import {List, ListItem, ListItemText} from "@mui/material"

const Review = ({checkoutToken}) => {
  return (
    <>
        <h6 className='mt-4 mx-auto text-center'>Order Summary</h6>
        <List sx={{
                    '.MuiList-root': {
                        width: '100% !important'
                    }
                }}>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem style={{padding: '10px 0'}} key={product.name} >
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} sx={{
                        '.MuiTypography-body1': {
                            color: "#FFFFFF",
                            fontFamily: "oxanium", 
                            fontWeight: "bold"
                        },
                        '.MuiTypography-body2': {
                            color: "#FFFFFF",
                            fontFamily: "oxanium", 
                        }
                    }}/>
                    <p>{product.line_total.formatted_with_symbol}</p>
                </ListItem>
            ))}
            <ListItem style={{padding: '10px 0' }}>
                <h3 className='text-center mx-auto'>Total: {checkoutToken.live.subtotal.formatted_with_symbol}</h3>
            </ListItem>
        </List>
    </>
  )
}

export default Review