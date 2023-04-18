

import Fade from 'react-awesome-reveal';


import { useRouter } from "next/router";
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Consulting() {
    
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

const router = useRouter()
const handleClick = (path) => {
    if (path != "reset") {
        router.push({
            pathname: `/expand/${path}`,
        })
    } else {
        router.push({
            pathname: `/expand`,
        })
    }

}

const openStripe = (path) => {
    if (path == "bronze") {
      window.open("https://buy.stripe.com/eVaaFD6fnfEXfOodQZ", "_blank")
    }
    if (path == "silver") {
      window.open("https://buy.stripe.com/7sIeVT1Z73Wf7hS8wG", "_blank")
    }
    if (path == "gold") {
      window.open("https://buy.stripe.com/bIY9Bz9rz8cvdGgbIT", "_blank")
    }
    if (path == "galactic") {
      window.open("https://buy.stripe.com/dR6dRP47f1O71Xy28k", "_blank")
    }
  
  }

return (
    <div className="max-w-screen-2xl mx-auto  pt-12 px-8 pb-8 bg-midnight-blue/20">
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        <Fade>
            <div className="z-0 text-center bg-nightsky/75 border-cloudy-day rounded-lg border-t-2 mb-4 xl:mb-12 py-10">
                <h1 className="text-center text-5xl font-oxanium-bold italic mb-8 ">UNDERSTAND YOUR AUDIENCE WITH OUR CONSULTING</h1>
                <div className="bg-nightsky/90 w-fit mx-auto border-sunset-pink rounded-lg border-2 p-4 my-2">
                    <h4 className="font-oxanium-bold mt-2 text-2xl">CONSULTING BONUSES</h4>
                    <h4 className="font-oxanium-medium mt-2 text-base italic text-gray-400 feature">SILVER BONUS: <span>Based off our disucssion, you&apos;ll get 10 personalized title scripts to help your videos catch the attention of fans of your game that you play</span></h4>
                    <h4 className="font-oxanium-medium mt-2 text-base italic text-yellow-400 feature">GOLD BONUS: <span>You get a personalized guide that explains how to design your thumbnails and edit your videos to hit your target audience correctly</span></h4>
                    <h4 className="font-oxanium-medium mt-2 text-base italic text-sunset-pink feature">GALACTIC BONUS: <span>You&apos;ll get a pack of 3 video script templates that way you can have a recipe for success that will last several years.</span></h4>
                </div>
                <button onClick={() => handleClick("reset")} className="uppercase font-oxanium-extrabold transition-all hover:text-sunset-red mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg my-4 w-1/8 hover:border-sunset-red mr-4">GO BACK</button>
                <button onClick={() => handleClick("reset")} className="uppercase font-oxanium-extrabold transition-all hover:text-green-400 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg my-4 w-1/8 hover:border-green-400">LOCKED </button>
            </div>
        </Fade>

        <div className="grid grid-rows-4 grid-cols-1 xl:grid-rows-1 xl:grid-cols-4 gap-10  bg-midnight-blue/10 border-b-2 border-cloudy-day rounded-lg pb-8">
            <Fade cascade>
            <div className="border-y-4 border-yellow-700 bg-nightsky/40 relative hover:border-yellow-600 transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-dreamscape-text text-base tracking-widest mb-4">BRONZE</h1>
                    <h1 className="text-center font-dreamscape-text text-yellow-600 text-5xl mb-4 mx-auto">CONSULTING</h1>
                    <h1 className="text-center font-oxanium-extrabold text-cloudy-day text-xl mx-auto">WHAT YOU GET</h1>
                </div>   
       
                    <table className="w-5/6 mx-auto">
                        <tr>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">FEATURE</th>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">VALUE</th>
                        </tr>
                        <tr>
                            <td className=" bg-gamedisplay/60 text-center font-dreamscape-text">1 Hour Call</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">Written Report</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-600/60 text-center font-dreamscape-text">SILVER</td>
                            <td className="bg-gray-600/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="bg-yellow-300/60 text-center font-dreamscape-text">GOLD</td>
                            <td className="bg-yellow-300/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">GALACTIC</td>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">TOTAL VALUE</td>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">$100.00 USD</td>
                        </tr>
                    </table>
                       
                <div className="mt-auto mx-auto pb-4 text-center">
                    <h1 className="text-4xl text-center font-dreamscape-text"><s>$100.00 USD</s></h1>
                    <h1 className="text-2xl text-center font-dreamscape-text text-yellow-600 mb-4">Price: $50.00 USD</h1>
                    <button onClick={() => openStripe("bronze")}className="uppercase font-oxanium-extrabold hover:text-yellow-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-yellow-600">Order</button>

                </div>
            </div>
            <div className="border-y-4 border-gray-700 bg-nightsky/40 relative hover:border-gray-600 transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-dreamscape-text text-base tracking-widest mb-4">SILVER</h1>
                    <h1 className="text-center font-dreamscape-text text-gray-600 text-5xl mb-4 mx-auto">CONSULTING</h1>
                    <h1 className="text-center font-oxanium-extrabold text-cloudy-day text-xl mx-auto">WHAT YOU GET</h1>
                </div>   
       
                    <table className="w-5/6 mx-auto">
                        <tr>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">FEATURE</th>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">VALUE</th>
                        </tr>
                        <tr>
                            <td className=" bg-gamedisplay/60 text-center font-dreamscape-text">1 Hour Call</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">Written Report</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">10 TITLE SCRIPTS</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$100.00</td>
                        </tr>
                        <tr>
                            <td className="bg-yellow-300/60 text-center font-dreamscape-text">GOLD</td>
                            <td className="bg-yellow-300/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">GALACTIC</td>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">TOTAL VALUE</td>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">$200.00 USD</td>
                        </tr>
                    </table>
                       
                <div className="mt-auto mx-auto pb-4 text-center">
                    <h1 className="text-4xl text-center font-dreamscape-text"><s>$200.00 USD</s></h1>
                    <h1 className="text-2xl text-center font-dreamscape-text text-gray-600 mb-4">Price: $100.00 USD</h1>
                    <button onClick={() => openStripe("silver")}className="uppercase font-oxanium-extrabold hover:text-gray-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-gray-600">Order</button>

                </div>
            </div>
            <div className="border-y-4 border-yellow-400 bg-nightsky/40 relative hover:border-yellow-300 transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-dreamscape-text text-base tracking-widest mb-4">GOLD</h1>
                    <h1 className="text-center font-dreamscape-text text-yellow-300 text-5xl mb-4 mx-auto">CONSULTING</h1>
                    <h1 className="text-center font-oxanium-extrabold text-cloudy-day text-xl mx-auto">WHAT YOU GET</h1>
                </div>   
       
                    <table className="w-5/6 mx-auto">
                        <tr>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">FEATURE</th>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">VALUE</th>
                        </tr>
                        <tr>
                            <td className=" bg-gamedisplay/60 text-center font-dreamscape-text">1 Hour Call</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">Written Report</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">10 TITLE SCRIPTS</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$100.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">EDITING/THUMB GUIDE</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$150.00</td>
                        </tr>
                        <tr>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">GALACTIC</td>
                            <td className="bg-sunset-pink/60 text-center font-dreamscape-text">ONLY</td>
                        </tr>
                        <tr>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">TOTAL VALUE</td>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">$350.00 USD</td>
                        </tr>
                    </table>
                       
                <div className="mt-auto mx-auto pb-4 text-center">
                    <h1 className="text-4xl text-center font-dreamscape-text"><s>$350.00 USD</s></h1>
                    <h1 className="text-2xl text-center font-dreamscape-text text-yellow-300 mb-4">Price: $175.00 USD</h1>
                    <button onClick={() => openStripe("gold")}className="uppercase font-oxanium-extrabold hover:text-yellow-300 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-yellow-300">Order</button>

                </div>
            </div>
            <div className="border-y-4 border-sunset-pink bg-nightsky/40 relative hover:border-sunset-pink transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-dreamscape-text text-base tracking-widest mb-4">GALACTIC</h1>
                    <h1 className="text-center font-dreamscape-text text-sunset-pink text-5xl mb-4 mx-auto">CONSULTING</h1>
                    <h1 className="text-center font-oxanium-extrabold text-cloudy-day text-xl mx-auto">WHAT YOU GET</h1>
                </div>   
       
                    <table className="w-5/6 mx-auto">
                        <tr>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">FEATURE</th>
                            <th className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text">VALUE</th>
                        </tr>
                        <tr>
                            <td className=" bg-gamedisplay/60 text-center font-dreamscape-text">1 Hour Call</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">Written Report</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$50.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">10 TITLE SCRIPTS</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$100.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">EDITING/THUMB GUIDE</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$150.00</td>
                        </tr>
                        <tr>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">3 VIDEO SCRIPTS</td>
                            <td className="bg-gamedisplay/60 text-center font-dreamscape-text">$225.00</td>
                        </tr>
                        <tr>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">TOTAL VALUE</td>
                            <td className="border-y-2 border-cloudy-day bg-nightsky/60 font-dreamscape-text text-center">$575.00 USD</td>
                        </tr>
                    </table>
                       
                <div className="mt-auto mx-auto pb-4 text-center">
                    <h1 className="text-4xl text-center font-dreamscape-text"><s>$575.00 USD</s></h1>
                    <h1 className="text-2xl text-center font-dreamscape-text text-sunset-pink mb-4">Price: $300.00 USD</h1>
                    <button onClick={() => openStripe("galactic")}className="uppercase font-oxanium-extrabold hover:text-sunset-pink mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-sunset-pink">Order</button>

                </div>
            </div>
 
            </Fade>
        </div>

    </div>
  );
}

export default Consulting;
