import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/animate.min.css";
import "../styles/aos.css";
import "../styles/app.css";
import "../styles/default.css";
import "../styles/responsive.css";
import "../styles/style.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultSEO } from "../../next-seo.config";
import Layout from "../components/Layout";
import { CartProvider } from "../context/cart";

import { SessionProvider } from "next-auth/react";
import { ParallaxProvider } from 'react-scroll-parallax';
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



export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
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
  );
}


