

import Link from "next/link";

import Fade from "react-awesome-reveal";

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function About() {

  const particlesInit = useCallback(async (engine: Engine) => {

    await loadStarsPreset(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
   
  }, []);

  const options = {
    preset: "stars",
    background: {
      "opacity": 0
    }
  };

  return (
    <div className="bg-nightsky">
      <div className="max-w-6xl mx-auto">
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />




        <Fade cascade>
          <div className="py-12 w-full">
            <h1 className="px-12 text-center 2xs:text-3xl xs:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-oxanium-bold italic text-cloudy-day uppercase bg-nightsky/50  rounded-lg mb-4 xl:mb-12 py-10 about">Gaming Galaxy was formed for <span>one reason</span></h1>
            <p className="px-4 text-center  font-oxanium-semibold pb-4 text-cloudy-day 2xs:text-lg xs:text-xl  2xl:text-2xl bg-nightsky/40 p-2 mb-4  rounded-lg  about w-full ">To provide the best assistance possible to as many gaming creators as we can, <br></br> as many creators feel lost/frustrated throughout their journey. <br></br> <br></br>  Creators tend to focus on the algorithim and not their audience,<br></br>   which is something we hope to help out with.<br></br><br></br>Not only that, but alot struggle with consistency during each step in <br></br>their journey that&apos;s why we broke it up into three simple steps, <br></br><br></br> </p>
            <p className="bg-peach text-nightsky rounded-full mx-auto px-4 w-fit h-fit font-oxanium-bold py-4">CREATE, GROW, EXPAND</p>
          </div>
       
          <div className="grid gap-8 md:grid-cols-3 md:grid-rows-1 grid-rows-3 grid-cols-1 md:pt-0 pt-6 text-center pb-5 px-4">
              <div className="bg-transparent border-peach shadow-lg shadow-peach rounded-full border-2 p-4 hover:border-peach hover:bg-peach transition-all !text-cloudy-day hover:!text-nightsky font-oxanium-bold text-xl md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                <Link className=" !font-oxanium-semibold hover:text-sunset-pink" href="/create">CREATE YOUR CONTENT</Link>
              </div>
              <div className="bg-transparent border-peach shadow-lg shadow-peach rounded-full border-2 p-4 hover:border-peach transition-all hover:bg-peach !text-cloudy-day hover:!text-nightsky font-oxanium-bold text-xl md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                <Link className="font-oxanium-semibold hover:text-sunset-pink" href="/grow">GROW YOUR CONTENT</Link>
              </div>
              <div className="bg-transparent border-peach shadow-lg shadow-peach rounded-full border-2 p-4 hover:border-peach hover:bg-peach transition-all !text-cloudy-day hover:!text-nightsky font-oxanium-bold text-xl md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                <Link className=" font-oxanium-semibold hover:text-sunset-pink" href="/expand">EXPAND YOUR BRAND</Link>
              </div>
          </div>

          <div className="2xs:mt-12 md:mt-0 px-4 pt-12 pb-6 2xs:border-t-2 2xs:border-peach lg:border-none">
            <h1 className="text-center font-oxanium-bold italic text-cloudy-day uppercase py-4  bg-nightsky/50 border-peach rounded-full border-2 mb-4 2xs:text-base xs:text-xl sm:text-2xl lg:text-3xl about">MORE <span>COMPANY</span> INFORMATION</h1>
          </div>
  
          <div className="grid 2xs:gap-8 lg:gap-4 md:grid-cols-4 md:grid-rows-1 grid-rows-4 grid-cols-1 md:pt-0 2xs:pt-2 pt-6 text-center pb-12 px-4 mx-auto">
            <div className="mx-auto h-content bg-transparent hover:bg-peach text-cloudy-day hover:text-nightsky w-fit rounded-full transition-all ">
              <Link href="/missionstatement" passHref>
                <button className=" border-peach shadow-sm shadow-peach rounded-full border-2 p-4 hover:border-peach transition-all font-oxanium-bold italic uppercase md:text-xs lg:text-sm xl:text-base 2xl:text-lg" type="button" data-modal-toggle="defaultModal">MISSION STATEMENT</button>
              </Link>
            </div>
            <div className="mx-auto h-contnet bg-transparent hover:bg-peach text-cloudy-day hover:text-nightsky w-fit rounded-full transition-all ">
              <Link href="/termsofservice" passHref>
                <button className=" border-peach shadow-sm shadow-peach rounded-full border-2 p-4 hover:border-peach transition-all font-oxanium-bold italic uppercase md:text-xs lg:text-sm xl:text-base 2xl:text-lg" type="button" data-modal-toggle="defaultModal">Terms of Service</button>
              </Link>
            </div>
            <div className="mx-auto h-contnet bg-transparent hover:bg-peach text-cloudy-day hover:text-nightsky w-fit rounded-full transition-all ">
              <Link href="/privacypolicy" passHref>
                <button className=" border-peach shadow-sm shadow-peach rounded-full border-2 p-4 hover:border-peach transition-all font-oxanium-bold italic uppercase md:text-xs lg:text-sm xl:text-base 2xl:text-lg" type="button" data-modal-toggle="defaultModal">Privacy Policy</button>
              </Link>
            </div>
            <div className="mx-auto h-contnet bg-transparent hover:bg-peach text-cloudy-day hover:text-nightsky w-fit rounded-full transition-all ">
              <Link href="/refundpolicy" passHref>
                <button className=" border-peach shadow-sm shadow-peach rounded-full border-2 p-4 hover:border-peach transition-all font-oxanium-bold italic uppercase md:text-xs lg:text-sm xl:text-base 2xl:text-lg" type="button" data-modal-toggle="defaultModal">Refund Policy</button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
