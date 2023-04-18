



import Fade from 'react-awesome-reveal';

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Packages() {
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
  return (
    <div className="bg-nightsky">
    <div className="max-w-screen-2xl mx-auto  pt-12 px-8 pb-8 bg-midnight-blue/20">
    <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
    <Fade>
    <div className="z-0 text-center bg-midnight-blue/10 border-cloudy-day rounded-lg border-t-2 mb-4 xl:mb-12 py-10">
        <h1 className="text-center 2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-oxanium-extrabold uppercase italic mb-8 packages">Everyone <span>loves saving money</span> and that&apos;s why we made <span><br></br>limited time</span> packages <span>to help you save!</span></h1>
        <p className="text-center 2xs:text-base lg:text-base xl:text-xl 2xl:text-2xl font-oxanium-semibold uppercase italic text-cloudy-day packages">Click on a package below<span> to view more information</span> on it so you can <span>get back to</span> creating content</p>
    </div>
    <div className="text-center ">
      <h2 className="font-oxanium-extrabold uppercase italic lg:text-5xl text-xl packages">PACKAGES EXPIRE IN: <span>0h 0m 0s</span></h2>
      <h2 className="font-oxanium-semibold uppercase italic lg:text-3xl text-lg">CLICK ON EACH PACKAGE TO VIEW IT!</h2>
      <h2 className="font-oxanium-semibold uppercase italic lg:text-3xl text-lg text-red-600 mt-4">PACKAGES ARE STILL BEING WORKED ON!</h2>
    </div>
    </Fade>


    <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-1 md:grid-cols-6 bg-midnight-blue/10 border-b-2 border-cloudy-day rounded-lg  ">
    <Fade cascade>
    <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg className="container-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/Qds3Vn5v/Example-Package-Bronze.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="15" y="205" fill="#F1F0F9">ESSENTIALS</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/Qds3Vn5v/Example-Package-Bronze.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="15" y="205" fill="#F1F0F9">ESSENTIALS</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/5t2WSYs3/Example-Package-Silver.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="32" y="205" fill="#F1F0F9">EDITING</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/5t2WSYs3/Example-Package-Silver.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="34" y="205" fill="#F1F0F9">DESIGN</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/W3DRQRLq/Example-Package-Gold.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="41" y="202" fill="#F1F0F9">FULL</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="217" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" className="animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/fT744jFC/Example-Package-Galactic.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="202" fill="#F1F0F9">ULTIMATE</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="217" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      </Fade>
    </div>

  </div>
    </div>


  );
}

export default Packages;
