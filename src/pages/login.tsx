
import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

import { IconContext } from "react-icons";


import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

import { useState } from "react";

import { signIn } from "next-auth/react";

const Login = () => {

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

  const [email, setEmail] = useState()


  const updateEmail = event => {
    setEmail(event.target.value)
  }

  return (
    <div className="bg-nightsky">
      <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
      <div className="login pt-10">
        <h1 className="font-oxanium-extrabold uppercase italic 2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-2  mx-auto h-screen text-center">LOGIN IS CURRENTLY DISABLED WHILE PROFILE PAGE IS UNDER CONSTRUCTION!</h1>
        {/* <div className="border-2 border-cloudy-day rounded-lg mx-auto grid grid-rows-2"> */}
          {/* Email Login */}
          {/* <div className="pt-8 ">
            <h2 className="font-oxanium-semibold uppercase italic text-2xl ">Enter your email...</h2>
            <input onChange={updateEmail} value={email} className="rounded-lg bg-transparent font-oxanium-semibold uppercase italic border-2 border-sunset-pink block mx-auto p-2 mt-2 mb-4"></input>
            <div className="block py-2 px-16 rounded-lg mx-auto max-w-fit border-cloudy-day border-2 bg-cloudy-day/10 hover:bg-nightsky hover:border-sunset-pink transition-all">
              <button className="font-oxanium-semibold uppercase italic text-cloudy-day" onClick={() => signIn("email", { email , callbackUrl: '/profile'})}>Submit</button>
            </div>
          </div> */}
          {/* Social Logins */}
          {/* <div className="pt-8 ">
            <h2 className="font-oxanium-semibold uppercase italic text-2xl mb-4">Or login with social...</h2>
            <div className="grid grid-cols-3 grid-rows-1 mb-8">
            <IconContext.Provider value={{ color: "white", size: "2.2em" }}>
              <div className="mx-auto rounded-full bg-cloudy-day/10 border-2 border-sunset-pink p-5 hover:bg-nightsky hover:border-cloudy-day transition-all">
              <button onClick={() => signIn("discord", {callbackUrl: '/profile'})}>
                <FaDiscord/>
              </button>
              </div>
              <div className="mx-auto rounded-full bg-cloudy-day/10 border-2 border-sunset-pink p-5 hover:bg-nightsky hover:border-cloudy-day transition-all">
              <button onClick={() => signIn("twitch", {callbackUrl: '/profile'})}>
                <FaTwitch/>
              </button>
              </div>
              <div className="mx-auto rounded-full bg-cloudy-day/10 border-2 border-sunset-pink p-5 hover:bg-nightsky hover:border-cloudy-day transition-all">
              <button onClick={() => signIn("google", {callbackUrl: '/profile'})}>
                <FaYoutube/>
              </button>
              </div>
            </IconContext.Provider>                            
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};


export default Login;
