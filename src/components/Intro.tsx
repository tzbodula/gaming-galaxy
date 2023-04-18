import { Fade } from 'react-awesome-reveal';

import Image from 'next/image';


import ThirdBanner from '../../public/img/slider/third_banner_img.png';


import { useRouter } from "next/router";
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Intro() {
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
  const Router = useRouter();
  const goToCreate = () => {
   
      Router.push('/create')
  }

  return (
	 <div className="2xs:-mt-[0.24rem] xs:mt-[0.24rem]  md:-mt-[6.5rem]  lg:mt-[0.25rem] xl:-mt-[2.25rem] 2xl:-mt-[3.75rem] overflow-hidden" style={{overflowY: 'hidden'}}>
    <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
            <video autoPlay muted loop className="bg-video">         
              <source src="/video/bg_video.webm" type="video/webm"/>       
            </video>
            <div className="h-fit">
              <div className="2xs:flex 2xl:flex-none">
                <div className="2xs:content-center 2xs:mt-20 2xl:mt-0 sm:mx-auto">
              

         
                    <div className="mx-auto third-banner-img  2xs:pt-12 2xl:pt-32" >
                    <Fade >
                    <Image className="mx-auto" src={ThirdBanner} alt="" width={627} height={823} />
                    </Fade>
                    </div>
               
                  <div className="relative z-10 text-center  lg:pb-24 2xl:pb-96" >
                    <Fade cascade>
                      <h1 className='2xs:text-4xl xs:text-5xl 2xs:-mt-[4.5rem] xs:-mt-[7rem] sm:pt-0 sm:pb-0 pt-8 pb-5 md:pb-0 md:pt-0 sm:text-7xl md:text-7xl lg:text-[4.65rem] xl:text-9xl font-oxanium-extrabold italic text-sunset-purple/90 gradient-anim xl:pr-6 '>GAMING GALAXY</h1>
                      <h6 className='2xs:text-2xs sm:text-lg md:text-xl font-oxanium-sembiold italic  2xs:mb-8 2xl:mb-24 md:pl-4 tracking-wide  text-cloudy-day'>HELPING THE NEXT GENERATION OF GAMING CREATORS</h6>
                      <button onClick={goToCreate} className='italic bg-nightsky/20 border-2 border-cloudy-day text-cloudy-day rounded-full font-oxanium-extrabold py-2 px-4 text-xl hover:bg-cloudy-day hover:text-nightsky transition-all '>CREATE YOUR CONTENT</button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div> 
    </div>
  )
}

export default Intro