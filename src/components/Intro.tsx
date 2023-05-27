import Image from 'next/image';

import BGLanding from '../../public/img/bg/bg-landing.jpg';
import GGLogo from '../../public/img/logo/logo-xl.png';

import { useRouter } from "next/router";
import { useCallback, useState, useEffect } from 'react';
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
	 <div className="relative -mt-6">
    <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
    <Image src={BGLanding} alt="Background Image" className='bg' ></Image>
    <div className='mr-auto w-1/2 absolute top-0 left-0'>
      {/* Header line and logo */}
      <div className=''>

          <Image src={GGLogo} alt='Gaming Galaxy Logo' width={128} height={64} />
    
      </div>
      {/* Body: Text */}
      <div>
        <h1>TEXT</h1>
      </div>
      {/* Body: Form */}
      <div>
        <h1>TEXT</h1>
      </div>
      {/* Footer Line */}
      <div>
        <h1>TEXT</h1>
      </div>
    </div>
    {/* Button Switcher On Monolith */}
    <div> 

    </div>
    </div>
  )
}

export default Intro