import { GetServerSideProps } from 'next';
import React from 'react'
import { sanityClient, urlFor } from '../../../../sanity';

import {PortableText} from '@portabletext/react'

import commerce from '../../../lib/commerce'
import { useCartDispatch } from '../../../context/cart';

import Particles from "react-particles";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fade } from 'react-awesome-reveal';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Container, Engine } from "tsparticles-engine";
import {getImageDimensions} from '@sanity/asset-utils'

const ImageRenderComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)

    return (
      <Image
        src={urlFor(value).url()!}
        alt={value.alt || ' '}
        loading="lazy"
        width={960}
        height={540}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

        }}
      />
    )
}

const components = {
    types: {
      image: ImageRenderComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
}
const Bronze = ({product, commerceData}) => {
    const {setCart} = useCartDispatch()

    const Router = useRouter()
    let productSelected = product[0]

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
    const addToCart = () => 
    commerce.cart.add(commerceData.id)
    .then(
        ({cart}) => setCart(cart)
    )
    .then (
        Router.push('/cart')
    )
    .catch((error) => {
        console.log("Error adding to cart", error)
    })
  return (
      <>
      <div className='bg-nightsky'>
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} className="2xs:hidden xl:block" />
            {/* Headline */}
            <div className='pt-6 w-3/4 mx-auto '>
            <Fade cascade>
                <h1 className='font-oxanium-extrabold text-sunset-orange italic text-center 2xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !m-0'>{productSelected.mainHeadline}</h1>
                <h2 className='mt-16 mb-16 w-3/4 mx-auto font-oxanium-semibold text-cloudy-day italic uppercase text-center  2xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{productSelected.subHeadline}</h2>
            </Fade>
            </div>
            {/* Main content */}
            <div className='product-text mx-auto text-center 2xs:w-3/4  xl:w-1/2 font-oxanium-semibold text-cloudy-day p-4 text-xl  '>
            <Fade>
                <PortableText
                    value={productSelected.mainContent}
                />
                <PortableText
                    value={productSelected.credentials}
                />
                <PortableText
                    value={productSelected.benefits}
                />
                <PortableText
                    value={productSelected.socialProof}
                />
                <PortableText
                    value={productSelected.offer}
                    components={components}
                />
                <PortableText
                    value={productSelected.bonus1Content}
                    components={components}
                />
                <PortableText
                    value={productSelected.bonus2Content}
                    components={components}
                />
                <PortableText
                    value={productSelected.bonus3Content}
                    components={components}
                />
                <PortableText
                    value={productSelected.bonus4Content}
                    components={components}
                />
                <PortableText
                    value={productSelected.priceReveal}
                />
                <PortableText
                    value={productSelected.scarcity}
                />
                <PortableText
                    value={productSelected.guarantee}
                />
                <PortableText
                    value={productSelected.cta}
                />
                <button onClick={addToCart} className='bg-nightsky w-1/2 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-orange hover:bg-sunset-orange hover:border-nightsky transition-all hover:text-nightsky'>Add To Cart</button>
                <PortableText
                    value={productSelected.warning}
                />
                <button onClick={addToCart} className='bg-nightsky w-1/2 py-2 rounded-xl uppercase font-oxanium-extrabold italic border-2 border-sunset-orange hover:bg-sunset-orange hover:border-nightsky transition-all hover:text-nightsky'>Add To Cart</button>
            </Fade>
            
            </div>
        </div>
      </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = `
    *[_type == 'bronzeproduct' && productSlug.current == $slug]{
      _id,
      name,
      productImage,
      productSlug,
      mainHeadline,
      subHeadline,
      mainName,
      mainPrice,
      mainContent,
      credentials,
      benefits,
      socialProof,
      offer,
      bonus1Content,
      bonus2Content,
      bonus3Content,
      bonus4Content,
      priceReveal,
      scarcity,
      guarantee,
      cta,
      warning
    }
    `

    const product = await sanityClient.fetch(query, {
        slug: context.params.slug,
    })

    let notFound = false

    if(!product){
        notFound= true
    }

    const checData = await commerce.products.list({query: product.name})

    let commerceData = checData.data[0]
    return {
        props: { product: product, notFound: notFound, commerceData: commerceData},
    }
}

export default Bronze