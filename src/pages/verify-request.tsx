
  
  import { IconContext } from "react-icons";
  
  import { FiMail } from "react-icons/fi";

    
  import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
  
  import { useState } from "react";
  
    
  const VerifyRequest = () => {
  
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
      <div className="login-bkg">
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        <div className="login">
          <h1 className="font-dreamscape-text text-3xl mb-2">CHECK YOUR EMAIL</h1>
          <div className="border-2 border-cloudy-day rounded-lg mx-auto grid grid-rows-1 mt-8">
            {/* Email Login */}
            <div className="pt-8 ">
            <IconContext.Provider value={{ color: "white", size: "5.2em", className: "email-icon" }}>
              <div className="mx-auto text-center flex items-center">
                <FiMail/>        
              </div>
              <h2 className="font-dreamscape-text text-xl mb-8 ">We&apos;ve succesfully sent you a sign-in email. <br></br><br></br> Please check spam if you <br></br> cannot find it. <br></br><br></br> You&apos;ll be redirected once you accept it.</h2>
            
            </IconContext.Provider>         
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default VerifyRequest;
  