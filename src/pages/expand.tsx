

import Fade from 'react-awesome-reveal';


import { useRouter } from "next/router";
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";



import { IconContext } from "react-icons";

function Expand() {
    
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
    router.push({
        pathname: `/expand/${path}`,
    })
}

return (
    <div className="bg-nightsky">
    <div className="max-w-screen-2xl mx-auto  pt-12 px-8 pb-8 bg-midnight-blue/20">
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        <Fade>
            <div className="z-0 text-center bg-nightsky/75 border-cloudy-day rounded-lg border-y-2 mb-4 xl:mb-12 py-10">
                <h1 className="text-center 2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-oxanium-extrabold uppercase italic mb-8 expand ">One of the <span>biggest mistakes</span> creators make is to try <br></br>and <span>do everything</span> by <span>themselves</span></h1>
                <p className="text-center 2xs:text-base lg:text-base xl:text-xl 2xl:text-2xl font-oxanium-semibold uppercase italic text-cloudy-day expand">This is exactly why we&apos;ve developed a space to<span> expand your galaxy</span> by hiring <br></br> <span>creatives, </span> and to network with others <span>to take the stress</span> off of you as a creator.</p>
            </div>
        </Fade>
        <IconContext.Provider value={{ color: "white", size: "2.0em", className: "mx-auto" }}>
        <div className="grid grid-cols-1 grid-rows-5 xl:grid-rows-1 xl:grid-cols-5 gap-10  bg-midnight-blue/10 border-b-2 border-cloudy-day rounded-lg pb-8">
            <Fade cascade>
            <div className="border-y-4 border-cloudy-day bg-nightsky/40 relative hover:border-strawberry transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-oxanium-semibold uppercase italic text-sm tracking-widest mb-4">AVERAGE COST (USD)</h1>
                    <h1 className="text-center font-oxanium-extrabold uppercase text-strawberry text-5xl mx-auto">$00.00</h1>
                </div>   
                <div className="mx-auto">
                    <h1 className="text-2xl font-oxanium-extrabold text-center mb-2 uppercase">INFORMATION</h1>
                    <ul className="list-disc marker:text-strawberry ">
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> CURRENTLY ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> JOBS AVAILABLE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold ">
                        <span>0</span> LOOKING FOR WORK
                        </li>
                    </ul>
                </div>             
                <div className="mt-auto mx-auto pb-4 text-center">
                    <button  className="uppercase font-oxanium-extrabold hover:text-red-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-red-600">LOCKED</button>
                    <h1 className="text-4xl text-center font-oxanium-semibold">HIRE</h1>
                    <h1 className="text-2xl text-center font-oxanium-extrabold uppercase text-strawberry">DESIGNERS</h1>
                </div>
            </div>
            <div className="border-y-4 border-cloudy-day bg-nightsky/40 relative hover:border-strawberry transition-all  grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-oxanium-semibold uppercase italic text-sm tracking-widest mb-4">AVERAGE COST (USD)</h1>
                    <h1 className="text-center font-oxanium-extrabold uppercase text-strawberry text-5xl mx-auto">$00.00</h1>
                </div>   
                <div className="mx-auto">
                <h1 className="text-2xl font-oxanium-extrabold text-center mb-2 uppercase">INFORMATION</h1>
                    <ul className="list-disc marker:text-strawberry ">
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> CURRENTLY ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> JOBS AVAILABLE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold ">
                        <span>0</span> LOOKING FOR WORK
                        </li>
                    </ul>
                </div>             
                <div className="mt-auto mx-auto pb-4 text-center">
                <button  className="uppercase font-oxanium-extrabold hover:text-red-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-red-600">LOCKED</button>
                    <h1 className="text-4xl text-center font-oxanium-semibold">HIRE</h1>
                    <h1 className="text-2xl text-center font-oxanium-extrabold text-strawberry">EDITORS</h1>
                </div>
            </div>
            <div className="border-y-4 border-cloudy-day bg-nightsky/40 relative hover:border-strawberry transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-oxanium-semibold uppercase italic text-sm tracking-widest mb-4">AVERAGE COST (USD)</h1>
                    <h1 className="text-center font-oxanium-extrabold uppercase text-strawberry text-5xl mx-auto">$00.00</h1>
                </div>   
                <div className="mx-auto">
                    <h1 className="text-2xl font-oxanium-extrabold text-center mb-2 uppercase">INFORMATION</h1>
                    <ul className="list-disc marker:text-strawberry ">
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> CURRENTLY ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                        <span>0</span> JOBS AVAILABLE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold ">
                        <span>0</span> LOOKING FOR WORK
                        </li>
                    </ul>
                </div>             
                <div className="mt-auto mx-auto pb-4 text-center">
                <button  className="uppercase font-oxanium-extrabold hover:text-red-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-red-600">LOCKED</button>
                    <h1 className="text-4xl text-center font-oxanium-semibold">HIRE</h1>
                    <h1 className="text-2xl text-center font-oxanium-extrabold text-strawberry">STRATEGISTS</h1>
                </div>
            </div>
            <div className="border-y-4 border-cloudy-day bg-nightsky/40 relative hover:border-strawberry transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-oxanium-semibold uppercase italic text-sm tracking-widest mb-4">LET&apos;S MAKE SOME</h1>
                    <h1 className="text-center font-oxanium-extrabold uppercase text-strawberry text-5xl mx-auto">CONTENT</h1>
                </div>   
                <div className="mx-auto">
                    <h1 className="text-2xl font-oxanium-extrabold text-center mb-2">INFORMATION</h1>
                    <ul className="list-disc marker:text-strawberry">
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 CURRENTLY ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 COLLABS AVAILABLE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 LOOKING FOR COLLAB
                        </li>
                    </ul>
                </div>             
                <div className="mt-auto mx-auto pb-4 text-center">
                <button  className="uppercase font-oxanium-extrabold hover:text-red-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-red-600">LOCKED</button>
                    <h1 className="text-4xl text-center font-oxanium-semibold">COLLAB</h1>
                    <h1 className="text-2xl text-center font-oxanium-extrabold text-strawberry">CENTER</h1>
                </div>
            </div>
            <div className="border-y-4 border-cloudy-day bg-nightsky/40 relative hover:border-strawberry transition-all grid grid-cols-1 grid-rows-3">
                <div className="left-1/3 pt-4 mx-auto h-1/3 ">
                    <h1 className="text-center font-oxanium-semibold uppercase italic text-sm tracking-widest mb-4">AVERAGE COST (USD)</h1>
                    <h1 className="text-center font-oxanium-extrabold uppercase text-strawberry text-5xl mx-auto">$00.00</h1>
                </div>   
                <div className="mx-auto">
                    <h1 className="text-2xl font-oxanium-extrabold text-center mb-2">INFORMATION</h1>
                    <ul className="list-disc marker:text-strawberry">
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 GG DESIGNERS ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 GG EDITORS ONLINE
                        </li>
                        <li className="text-center !text-cloudy-day !font-oxanium-semibold">
                            0 GG STRATEGISTS ONLINE
                        </li>
                    </ul>
                </div>             
                <div className="mt-auto mx-auto pb-4 text-center">
                <button  className="uppercase font-oxanium-extrabold hover:text-red-600 mx-auto text-center bg-midnight-blue/30 text-cloudy-day py-2 px-4 border-cloudy-day border-2 rounded-lg mb-4 w-full hover:border-red-600">LOCKED</button>
                    <h1 className="text-4xl text-center font-oxanium-semibold">WORK WITH</h1>
                    <h1 className="text-2xl text-center font-oxanium-extrabold text-strawberry">GAMING GALAXY</h1>
                </div>
            </div>
            </Fade>
        </div>
        </IconContext.Provider>      
    </div>
    </div>

  );
}

export default Expand;
