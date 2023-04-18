import Image from "next/image";

import CompanyMission from "../../public/img/bg/companymission.png";

import Fade from "react-awesome-reveal";


import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function MissionStatement() {

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
    <div className=" bg-nightsky">
      <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
      <Fade >
        <div className="text-center ">
          <Image src={CompanyMission} alt="Company Mission Banner" />
        </div>
      </Fade>

      <Fade >
        <div className="mx-auto text-center 2xs:w-3/4 2xl:w-1/2">
            <h2 className="font-oxanium-medium pb-12 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl">&ldquo;Gaming Galaxy is dedicated to providing the best support to gamers and gaming creators. <br></br> <br></br>This support will come in the form of news, graphics, videos or any other source of media and we are driven to help creators become the best versions of themselves while simultaneously providing value to video game enjoyers of all backgrounds. <br></br><br></br>We take pride in everything that we do, as we make sure to deliever unique and fresh content and to keep this content large and expansive just like the galaxy above us&ldquo;</h2>
        </div>
      </Fade>

    </div>
  );
}

export default MissionStatement;
