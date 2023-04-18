import Image from "next/image";

import refundpolicy from "../../public/img/bg/refundpolicy.png";

import Fade from "react-awesome-reveal";

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function RefundPolicy() {
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
      <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
      <Fade>
        <div className="text-center ">
          <Image src={refundpolicy} alt="Meet The Team Banner" />
        </div>
      </Fade>


      <Fade>
        <div className="mx-auto pb-12 text-center 2xs:w-3/4 2xl:w-1/2">
            <h3 className="text-center pb-12 font-oxanium-medium 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl">All of our refunds and returns are on a case to case basis, so if you wouldn&apos;t mind please shoot us an email at sales@gaminggalaxy.gg explaning your issue and we&apos;ll get back to you within 48 hours on the next steps.</h3>
        </div>
      </Fade>
    </div>
  );
}

export default RefundPolicy;
