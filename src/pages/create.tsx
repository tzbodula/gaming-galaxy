
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import { useCallback, useEffect, useState } from 'react';
import Fade from 'react-awesome-reveal';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { sanityClient, urlFor } from '../../sanity';


function Create({bronze}) {
    const { data: session, status } = useSession()
    const [games, setGames] = useState([])
    const [query, setQuery] = useState("")

    const [option, setOption] = useState("")

    const [tier, setTier] = useState("")

    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            console.log("API Key is: ", process.env.NEXT_PUBLIC_RAWG_API_KEY)
            try {
                const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page=1&page_size=15&search=${query}&search_precise=false&search_exact=true&ordering=-rating`;
                const options = {
                  method: 'GET',
                  headers: {
                    'X-RapidAPI-Key': '1882a8a767msh8ed436be8629f9ep1a33f4jsn12f18c8429fd',
                    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
                  }
                };
                
                const res = await fetch(url, options)
                
                const data = await res.json()
                console.log("Data is", data)
                setGames(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    const Router = useRouter();

    const login = () => {
        Router.push('/login')
    }

    const handleClick = (slug, type) => {
        if (type == 'game') {
            router.push({
                pathname: `/create/[slug]`,
                query: {slug: slug}
            })
        } else if (type == 'bronze') {
            router.push({
                pathname: `/create/bronze/[slug]`,
                query: {slug: slug}
            })
        }

    }

    const updateOption = (option) => {
        setOption(option)
    }

    const updateTier = (tier) => {
        setTier(tier)
    }

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
        <div className='bg-nightsky'>
        <div className="max-w-screen-2xl mx-auto pt-12 bg-midnight-blue/20 px-8 pb-16 ">
            <>
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
            <Fade>
                <div className="z-0 text-center bg-midnight-blue/10 border-cloudy-day rounded-lg border-t-2 hover:border-sunset-orange transition-all mb-4 xl:mb-12 py-10">
                    <h1 className="text-center 2xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-oxanium-extrabold italic uppercase mb-4 create ">Your content is your <span>&quot;product&quot;</span>, which you need to <span>sell</span> to your audience</h1>
                    <p className="text-center 2xs:text-base lg:text-base xl:text-xl 2xl:text-2xl font-oxanium-sembold italic uppercase text-cloudy-day ">Select an option below with what we can help with!</p>
                    <div className="grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-4 w-3/4 mx-auto mt-4 gap-4">
                        <Fade cascade>
                            <div className={option == "Competition" ? "bg-sunset-orange rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-peach text-nightsky transition-all" : "bg-nightsky rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-sunset-orange transition-all"}>
                                <button  onClick={() => updateOption("Competition")} className="p-4 font-oxanium-extrabold italic uppercase 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-xl">GETTING IDEAS</button>
                            </div>
                            <div className={option == "Content" ? "bg-sunset-orange rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-peach text-nightsky transition-all" : "bg-nightsky rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-sunset-orange transition-all"}>
                                <button onClick={() => updateOption("Content")} className="p-4 font-oxanium-extrabold italic uppercase 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-xl">AUDIENCE RESEARCH</button>
                            </div>
                            <div className={option == "Products" ? "bg-sunset-orange rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-peach text-nightsky transition-all" : "bg-nightsky rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-sunset-orange transition-all"}>
                                <button onClick={() => updateOption("Products")} className="p-4 font-oxanium-extrabold italic uppercase 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-xl">MAKING CONTENT</button>
                            </div>
                            <div className={option == "Reviews" ? "bg-sunset-orange rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-peach text-nightsky transition-all" : "bg-nightsky rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange hover:border-sunset-orange transition-all"}>
                                <button onClick={() => updateOption("Reviews")} className="p-4 font-oxanium-extrabold italic uppercase 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-xl">IMPROVING VIDEOS</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
            <div className="z-0 text-center bg-midnight-blue/10 border-cloudy-day hover:border-sunset-orange transition-all rounded-lg border-b-2 mb-4 xl:mb-12 py-12">
                {option == "Content" 
                    ?
                    <Fade>
                        <div className="text-cloudy-day text-4xl w-full h-full pb-12">
                            <input  type="text"
                                    placeholder={"CLICK HERE TO SEARCH FOR YOUR GAME!" }
                                    className="border-2 border-sunset-orange rounded-full shadow-lg shadow-sunset-orange 2xs:placeholder:text-sm 2xs:text-sm xs:placeholder:-text-base xs:text-base sm:placeholder-text-lg sm:text-lg lg:placeholder:text-3xl lg:text-3xl xl:placeholder:text-4xl lg:h-12 xl:h-16 bg-transparent xl:text-4xl py-4 focus:border-sunset-orange font-oxanium-extrabold italic float-left w-full  focus:ring-0 focus:text-cloudy-day placeholder:text-cloudy-day uppercase h-full"
                                    onChange={event => setQuery(event.target.value)}
                                    value={query}
                            />
                        </div>
                    </Fade>
                    :
                    null
                }
                {option == "Reviews" 
                    ?
                    <Fade>
                        <div className="text-cloudy-day text-4xl w-full h-full pb-12">
                            {status === "authenticated" 
                            ? session.user.email 
                            : <div><h2 className='font-oxanium-semibold italic'>You must login in order to use this feature!</h2><button className="bg-transparent text-sunset-orange font-oxanium-bold mt-4 border-4 border-sunset-orange p-4 rounded-full transition-all hover:bg-sunset-orange hover:text-nightsky" onClick={login}>LOGIN TO GAMING GALAXY</button></div>
                            }
                        </div>
                    </Fade>
                    :
                    null
                }
                {option == "Competition" 
                    ?
                    <Fade>
                        <div className="text-cloudy-day text-4xl w-full h-full pb-12">
                            <input  type="text"
                                    placeholder={"Click here to Search Our Database for your game!" }
                                    className=" placeholder:text-xs text-xs sm:placeholder-text-lg sm:text-lg lg:placeholder:text-3xl lg:text-3xl xl:placeholder:text-4xl lg:h-12 xl:h-16 bg-transparent xl:text-4xl pb-8 font-oxanium-extrabold italic float-left w-full border-transparent focus:border-transparent focus:ring-0 focus:text-cloudy-day placeholder:text-cloudy-day uppercase h-full"
                                    onChange={event => setQuery(event.target.value)}
                                    value={query}
                            />
                        </div>
                    </Fade>
                    :
                    null
                }
                {option == "Products"
                    ?
                        <>
                            <Fade>
                                <h4 className="uppercase font-oxanium-bold italic">{tier == "Bronze" ? "The Bronze Tier is for the creators who are just starting off" : tier == "Silver" ? "The Silver Tier is for the creators who have a little bit of experience under their belt" : tier == "Gold" ? "The gold tier is for the creators who are experienced and monetized" : tier == "Galactic" ? "The galactic tier is for the creators who are currently full-time" : "Where are you on your creator journey? Select an option below!"}</h4>
                                <div className="grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-4 w-3/4 mx-auto mt-4 gap-4 h-1/2">
                                    <Fade cascade>
                                    <div className={tier == "Bronze" ? "bg-yellow-600 rounded-full border-2 border-yellow-600 hover:border-yellow-900 transition-all" : "bg-yellow-900 rounded-full border-2 border-yellow-600 hover:border-yellow-900 transition-all"}>
                                        <button onClick={() => updateTier("Bronze")} className="p-4 !text-cloudy-day font-oxanium-bold uppercase italic 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-x">STARTING OFF</button>
                                    </div>
                                    <div className={tier == "Silver" ? "bg-gray-500 rounded-full border-2 border-gray-700 hover:border-gray-900 transition-all" : "bg-gray-900 rounded-full border-2 border-gray-700 hover:border-gray-900 transition-all"}>
                                        <button onClick={() => updateTier("Silver")} className="p-4 !text-cloudy-day font-oxanium-bold uppercase italic 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-x">LITTLE EXPERIENCE</button>
                                    </div>
                                    <div className={tier == "Gold" ? "bg-yellow-400 rounded-full border-2 border-yellow-500 hover:border-yellow-600 transition-all" : "bg-yellow-900 rounded-full border-2 border-yellow-500 hover:border-yellow-200 hover:bg-sunset-yellow transition-all"}>
                                        <button onClick={() => updateTier("Gold")} className="p-4 !text-cloudy-day font-oxanium-bold uppercase italic 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-x">MULTI-YEAR VETERAN</button>
                                    </div>
                                    <div className={tier == "Galactic" ? "bg-sunset-orange rounded-full border-2 border-sunset-red  hover:border-sunset-orange transition-all" : "bg-purple-900 rounded-full border-2 border-cloudy-day hover:border-sunset-red  transition-all"}>
                                        <button  onClick={() => updateTier("Galactic")} className="p-4 !text-cloudy-day font-oxanium-bold uppercase italic 2xs:text-sm md:text-base lg:text-xs xl:text-base 2xl:text-x">FULLTIME CREATOR</button>
                                    </div>
                                    </Fade>
                                </div>
                            </Fade>
                        </>
                    :
                    null

                }
            </div>
            {option == "Content" && games != undefined
                ?
                <Fade>
                    <div className="lg:grid-rows-5 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-5 grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-5 grid gap-4 pt-4 lg:-mt-12 2xl:-mt-18  mx-auto pb-8">
                        {games.map((game) => (
                            <div key={game.slug} className="bg-gamedisplay border-gray-400 rounded-lg border-2 hover:border-sunset-orange transition-all relative">
                                <div className=''>
                                <Image className="rounded-lg" src={game.background_image ? game.background_image : '/../../public/logo.png'} width={450} height={250} alt="Game image"/>
                                </div>

                                <div id="overlay"></div>
                                <h1 className="text-lg uppercase font-oxanium-extrabold w-4/5 mx-auto absolute top-1 right-1 text-right">{game.name}</h1>
                                <div className="absolute bottom-0 w-full ">
                                    <button onClick={() => handleClick(game.slug, 'game')} className="  text-center text-cloudy-day relative font-oxanium-extrabold bottom-0 mx-auto flex  ">SELECT</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </Fade>
                :
                null
            }
            {option == "Products" && tier == "Bronze"
                ?
                <Fade>
                    <div className="grid-rows-3 grid-cols-1 xl:grid-rows-1 xl:grid-cols-3 grid gap-4 pt-4 lg:-mt-12 2xl:-mt-18  mx-auto pb-8">
                        {bronze.map((product) => (
                            <div key={product.slug} className="bg-nightsky border-gray-400 rounded-lg border-2 hover:border-sunset-orange transition-all relative w-full">
                                <Image className='' src={urlFor(product.productImage).url()!} alt={product.name} width={1920} height={1080}/>
                                <h1 className="text-2xl uppercase font-oxanium-extrabold w-4/5 mx-auto text-center text-cloudy-day ">{product.name}</h1>
                                <h2 className="text-xl uppercase font-oxanium-extrabold w-4/5 mx-auto text-center text-cloudy-day my-2 ">{product.mainHeadline}</h2>
                                <button onClick={() => handleClick(product.productSlug.current, 'bronze')} className="bg-nightsky border-t-2 border-cloudy-day hover:border-sunset-orange transition-all hover:bg-sunset-orange text-center block text-cloudy-day relative font-oxanium-extrabold mx-auto w-full  py-2 ">SELECT</button>

                            </div>
                        ))}
                    </div>
                </Fade>
                :
                null
            }
        </>
        </div>
        </div>

    
    );
}

export async function getServerSideProps() {
    const query = `*[_type == 'bronzeproduct']{
      _id,
      name,
      productImage,
      productSlug,
      mainHeadline,
    }`
  
    const bronze = await sanityClient.fetch(query)
    return {
      props: { bronze }, // will be passed to the page component as props
    }
  }
  

export default Create;
