import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/animate.min.css";
import "../styles/aos.css";
import "../styles/create.css";
import "../styles/app.css";
import "../styles/default.css";
import "../styles/responsive.css";
import "../styles/style.css";
import { ContextProvider } from '../context/ContextProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultSEO } from "../../next-seo.config";
import Layout from "../components/Layout";
import { CartProvider } from "../context/cart";
import { SessionProvider } from "next-auth/react";
import { ParallaxProvider } from 'react-scroll-parallax';
import {registerLicense} from '@syncfusion/ej2-base';

const theme = createTheme({
  palette: {
    primary: {
      main: "#100b2f",
    },
    secondary: {
      main: '#f2542d',
    },
  },
});

registerLicense('Mgo+DSMBaFt+QHJqUE1mQ1BCaV1CX2BZf1J8QWtTf1xgBShNYlxTR3ZaQ1piS3xVd01qXHhe;Mgo+DSMBPh8sVXJ1S0R+WVpCaV5EQmFJfFBmRGJTe1Z6dFdWESFaRnZdQV1mSHlSdEdlWHdXd31V;ORg4AjUWIQA/Gnt2VFhiQlRPcEBDW3xLflF1VWJYdVp4flVEcC0sT3RfQF5jTH9Ud0dhX35XcHBTRg==;MjA5MzIzNEAzMjMxMmUzMjJlMzVMbXZhRzJDL0Nsdkd0cWM1c1FxRU1zSkhleHdOU0REbXl4YS8zVnlmekw0PQ==;MjA5MzIzNUAzMjMxMmUzMjJlMzVjMExOVEZWRk9ZRUJYRUlsbXFqY3hMWVdtd215TG5jK1ZZM1g3Q2ZvWUlRPQ==;NRAiBiAaIQQuGjN/V0d+Xk9BfVldXGVWfFN0RnNYflR0fF9GYkwgOX1dQl9gSXtScURhW3lfeXVRR2A=;MjA5MzIzN0AzMjMxMmUzMjJlMzVNWUkzWjRlS3h4U0JJeFJ3TGxJbGlJT0FwaGpPY0VzeThvU3B3UE1QNkwwPQ==;MjA5MzIzOEAzMjMxMmUzMjJlMzVJRkF0RE8yRGpLWnVFbjhjeXc5dU45enhQSFlrajJEdmE3UXV6enJ1eEFVPQ==;Mgo+DSMBMAY9C3t2VFhiQlRPcEBDW3xLflF1VWJYdVp4flVEcC0sT3RfQF5jTH9Ud0dhX35XcnZVRg==;MjA5MzI0MEAzMjMxMmUzMjJlMzVma2dHZTBMaWZlOGx3Yll5L3R4b005M0E1bFpKblFEakF3RldYMXlmQ3RNPQ==;MjA5MzI0MUAzMjMxMmUzMjJlMzVBcUtQVXlXa2xhZzZlSXA3QjdFRnBFVFVPZVp2MElLREhUQys4NU1OTlFVPQ==;MjA5MzI0MkAzMjMxMmUzMjJlMzVNWUkzWjRlS3h4U0JJeFJ3TGxJbGlJT0FwaGpPY0VzeThvU3B3UE1QNkwwPQ==')


export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <ParallaxProvider>
            <Layout>
              <DefaultSeo {...defaultSEO} />
              <CartProvider>
                <Component {...pageProps} />
              </CartProvider>
            </Layout>
          </ParallaxProvider>
        </SessionProvider>
      </ThemeProvider>
    </ContextProvider>
  );
}


