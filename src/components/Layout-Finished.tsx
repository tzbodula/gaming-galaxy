import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { IconContext } from "react-icons";
import CardIcons from '../../public/img/images/card_img.png';
import GGLogo from '../../public/logo.png';

import { useSession } from "next-auth/react";
import { useState } from "react";
import { fallDown as Menu } from 'react-burger-menu';



const Layout = ({ children }) => {
  const { data: session } = useSession();

  const router = useRouter();

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  var pageColor = "#F5A062"

  if (router.pathname == '/about') {
    pageColor = "#F5A062"
  } else if (router.pathname.includes('/create')) {
    pageColor = "#FB9062"
  } else if (router.pathname.includes('/grow')) {
    pageColor = "#EE5D6C"
  } else if (router.pathname == '/expand') {
    pageColor = "#D95380"
  } else if (router.pathname == '/packages') {
    pageColor = "#CE499E"
  } else {
    pageColor = "#F1F0F9"
  }

  var styles = {

    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      top: 12,
      left: 16,
    },
    bmBurgerBars: {
      background: '#F1F0F9'
    },
    bmBurgerBarsHover: {
      background: '#F1F0F9'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#F1F0F9'
    },
    bmMenuWrap: {
      position: 'fixed',
      width: '100vw',
      height: '100%',
      top: 0,
      left: 0
    },
    bmMenu: {
      background: 'rgba(16, 11, 47, .95)',
      padding: '0',
      fontSize: '1.15em',
      width: '100%'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  }

  return (
    <>
      <header className={`sticky z-50 top-0 
        ${
        router.pathname == '/' ? "bg-transparent 2xl:p-3" 
        : router.pathname == '/about' ? "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-peach shadow-lg shadow-peach 2xl:p-3" 
        : router.pathname.includes('/create') ? "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-sunset-orange shadow-lg shadow-sunset-orange 2xl:p-3" 
        : router.pathname.includes('/grow') ? "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-sunset-red shadow-lg shadow-sunset-red 2xl:p-3" 
        : router.pathname == '/expand' ? "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-strawberry shadow-lg shadow-strawberry 2xl:p-3" 
        : router.pathname == '/packages' ? "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-sunset-pink shadow-lg shadow-sunset-pink 2xl:p-3" 
        : "bg-nightsky 2xs:h-16 md:h-28 lg:h-16 2xl:h-20 border-b-2 border-cloudy-day shadow-lg shadow-cloudy-day 2xl:p-3"
        } 
        `
        }>
        <nav className=" ">
          <div className=" container mx-auto flex flex-wrap items-center justify-between pt-2">
            <div className="2xs:hidden md:block lg:hidden xl:block md:mr-auto md:pl-12 md:mt-3 md:mb-2 lg:mb-0 lg:mt-0 lg:m-0 lg:pl-0">
            <Image src={GGLogo} alt="Gaming Galaxy Logo" width={134} height={40}></Image>
            </div>
            <div className="md:hidden">
              <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} styles={styles} >
                <ul className="lg:mx-1 xl:mx-4 flex-col md:flex-row flex md:space-x-4 lg:space-x-6 xl:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <li>
                      <Link legacyBehavior href="/" >
                        <a onClick={closeSideBar} className={`${router.pathname == "/" ? "text-sunset-yellow" : "text-cloudy-day"} hover:cloudy-day border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic  transition relative" aria-current="page" `}>
                          HOME</a>
                      </Link>
                    </li>

                    <li>
                        <Link legacyBehavior href="/about" >
                            <a onClick={closeSideBar} className={`${router.pathname == "/about" ? "text-peach" : "text-cloudy-day"} hover:cloudy-day border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                              ABOUT</a>
                        </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/create" >
                        <a onClick={closeSideBar} className={`${router.pathname.includes("/create") ? "text-sunset-orange" : "text-cloudy-day"}  hover:cloudy-day border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                          CREATE YOUR CONTENT</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/grow" >
                        <a onClick={closeSideBar} className={`${router.pathname.includes("/grow") ? "text-sunset-red" : "text-cloudy-day"}  hover:cloudy-day border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                          GROW YOUR BRAND</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/expand" >
                        <a onClick={closeSideBar} className={`${router.pathname == "/expand" ? "text-strawberry" : "text-cloudy-day"}  hover:cloudy-day border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                          EXPAND YOUR BRAND</a>
                      </Link>
                    </li>

        
                    <li>
                      <Link legacyBehavior href="/packages" >
                        <a onClick={closeSideBar} className={`${router.pathname == "/packages" ? "text-sunset-pink" : "text-cloudy-day"}  hover:cloudy-day-50 border-b border-[${pageColor}] md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic transition relative`}>
                          PACKAGES</a>
                      </Link>
                    </li>
                  </ul>
              </Menu>
            </div>
  
            <div className="xl:border-x-2 lg:border-x-0 lg:border-cloudy-day hidden mx-auto md:block w-full md:w-auto lg:fixed lg:left-[1rem] lg:top-[1rem] xl:static" id="mobile-menu">
              <ul className="lg:mx-1 xl:mx-4 flex-col md:flex-row flex md:space-x-4 lg:space-x-6 xl:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link legacyBehavior href="/">
                    <a className={`${router.pathname == "/" ? "text-sunset-yellow" : "text-cloudy-day"} hover:cloudy-day border-b border-sunset-yellow md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-yellow md:p-0 font-oxanium-extrabold uppercase italic  transition relative" aria-current="page" `}>
                      HOME</a>
                  </Link>
                </li>

                <li>
                    <Link legacyBehavior href="/about">
                        <a className={`${router.pathname == "/about" ? "text-peach" : "text-cloudy-day"} hover:cloudy-day border-b border-peach md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-peach md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                          ABOUT</a>
                    </Link>
                </li>

                <li>
                  <Link legacyBehavior href="/create">
                    <a className={`${router.pathname.includes("/create") ? "text-sunset-orange" : "text-cloudy-day"}  hover:cloudy-day border-b border-sunset-orange md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-orange md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                      CREATE YOUR CONTENT</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/grow">
                    <a className={`${router.pathname.includes('/grow') ? "text-sunset-red" : "text-cloudy-day"}  hover:cloudy-day border-b border-sunset-red md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-red md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                      GROW YOUR BRAND</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/expand">
                    <a className={`${router.pathname == "/expand" ? "text-strawberry" : "text-cloudy-day"}  hover:cloudy-day border-b border-strawberry md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-strawberry md:p-0 font-oxanium-extrabold uppercase italic  transition relative`}>
                      EXPAND YOUR BRAND</a>
                  </Link>
                </li>

    
                <li>
                  <Link legacyBehavior href="/packages">
                    <a className={`${router.pathname == "/packages" ? "text-sunset-pink" : "text-cloudy-day"}  hover:cloudy-day-50 border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-extrabold uppercase italic transition relative`}>
                      PACKAGES</a>
                  </Link>
                </li>
              </ul>

            </div>
            <div className="2xs:fixed 2xs:top-[0.9rem] 2xs:right-[10px] xs:fixed xs:top-[0.9rem] xs:right-[10px] xs:ml-auto md:relative md:ml-auto md:pr-12 md:-top-[4.3rem] lg:m-0 lg:mt-0 lg:fixed lg:top-[0.9rem] lg:-right-[2rem] xl:static">
              {session 
              ? 
              <Link legacyBehavior href="/profile">
                <a className={`font-oxanium-bold bg-nightsky/25 py-1 px-4 text-cloudy-day text-lg rounded-full mr-4 
                  ${router.pathname == '/home' ? `border-2 border-sunset-yellow shadow-md shadow-sunset-yellow  hover:shadow-sunset-yellow hover:border-sunset-yellow hover:bg-sunset-yellow hover:text-nightsky transition-all` 
                  : router.pathname == '/about' ? `border-2 border-peach shadow-md shadow-peach  hover:shadow-peach hover:border-peach hover:bg-peach hover:text-nightsky transition-all` 
                  : router.pathname.includes('/create') ? `border-2 border-sunset-orange shadow-md shadow-sunset-orange  hover:shadow-sunset-orange hover:border-sunset-orange hover:bg-sunset-orange hover:text-nightsky transition-all` 
                  : router.pathname.includes('/grow') ? `border-2 border-sunset-red shadow-md shadow-sunset-red  hover:shadow-sunset-red hover:border-sunset-red hover:bg-sunset-red hover:text-nightsky transition-all` 
                  : router.pathname == '/expand' ? `border-2 border-strawberry shadow-md shadow-strawberry  hover:shadow-strawberry hover:border-strawberry hover:bg-strawberry hover:text-nightsky transition-all` 
                  : router.pathname == '/packages' ? `border-2 border-sunset-pink shadow-md shadow-sunset-pink  hover:shadow-sunset-pink hover:border-sunset-pink hover:bg-sunset-pink hover:text-nightsky transition-all` 
                  : `border-2 border-cloudy-day shadow-md shadow-cloudy-day  hover:shadow-cloudy-day hover:border-cloudy-day hover:bg-cloudy-day hover:text-nightsky transition-all`} `}>
                    PROFILE
                 </a>
              </Link> 
              : 
              <Link legacyBehavior href="/login">
                <a className={`font-oxanium-bold bg-nightsky/25 py-1 px-4 text-cloudy-day text-lg rounded-full mr-4
                  ${router.pathname == '/home' ? `border-2 border-sunset-yellow shadow-md shadow-sunset-yellow  hover:shadow-sunset-yellow hover:border-sunset-yellow hover:bg-sunset-yellow hover:text-nightsky transition-all` 
                  : router.pathname == '/about' ? `border-2 border-peach shadow-md shadow-peach  hover:shadow-peach hover:border-peach hover:bg-peach hover:text-nightsky transition-all` 
                  : router.pathname.includes('/create') ? `border-2 border-sunset-orange shadow-md shadow-sunset-orange  hover:shadow-sunset-orange hover:border-sunset-orange hover:bg-sunset-orange hover:text-nightsky transition-all` 
                  : router.pathname.includes('/grow') ? `border-2 border-sunset-red shadow-md shadow-sunset-red  hover:shadow-sunset-red hover:border-sunset-red hover:bg-sunset-red hover:text-nightsky transition-all` 
                  : router.pathname == '/expand' ? `border-2 border-strawberry shadow-md shadow-strawberry  hover:shadow-strawberry hover:border-strawberry hover:bg-strawberry hover:text-nightsky transition-all` 
                  : router.pathname == '/packages' ? `border-2 border-sunset-pink shadow-md shadow-sunset-pink  hover:shadow-sunset-pink hover:border-sunset-pink hover:bg-sunset-pink hover:text-nightsky transition-all` 
                  : `border-2 border-cloudy-day shadow-md shadow-cloudy-day  hover:shadow-cloudy-day hover:border-cloudy-day hover:bg-cloudy-day hover:text-nightsky transition-all`} `}>
                    LOGIN
                 </a>
              </Link>
              }
              <Link legacyBehavior href="/cart">
              <a className={`font-oxanium-bold bg-nightsky/25 py-1 px-4 text-cloudy-day text-lg rounded-full 
                  ${router.pathname == '/home' ? `border-2 border-sunset-yellow shadow-md shadow-sunset-yellow  hover:shadow-sunset-yellow hover:border-sunset-yellow hover:bg-sunset-yellow hover:text-nightsky transition-all` 
                  : router.pathname == '/about' ? `border-2 border-peach shadow-md shadow-peach  hover:shadow-peach hover:border-peach hover:bg-peach hover:text-nightsky transition-all` 
                  : router.pathname.includes('/create') ? `border-2 border-sunset-orange shadow-md shadow-sunset-orange  hover:shadow-sunset-orange hover:border-sunset-orange hover:bg-sunset-orange hover:text-nightsky transition-all` 
                  : router.pathname.includes('/grow') ? `border-2 border-sunset-red shadow-md shadow-sunset-red  hover:shadow-sunset-red hover:border-sunset-red hover:bg-sunset-red hover:text-nightsky transition-all` 
                  : router.pathname == '/expand' ? `border-2 border-strawberry shadow-md shadow-strawberry  hover:shadow-strawberry hover:border-strawberry hover:bg-strawberry hover:text-nightsky transition-all` 
                  : router.pathname == '/packages' ? `border-2 border-sunset-pink shadow-md shadow-sunset-pink  hover:shadow-sunset-pink hover:border-sunset-pink hover:bg-sunset-pink hover:text-nightsky transition-all` 
                  : `border-2 border-cloudy-day shadow-md shadow-cloudy-day  hover:shadow-cloudy-day hover:border-cloudy-day hover:bg-cloudy-day hover:text-nightsky transition-all`} `}>
                    CART
                 </a>
              </Link>
              
            </div>
          </div>
        </nav>
      </header>
      <main className="relative">
        {children}
      </main>
      <footer className={`sticky footerbkg bg-nightsky max-w-full mx-auto ${router.pathname != '/' ? "block" : "hidden"} `}>
        <div className={`py-6 border-t h-5/6 ${router.pathname == '/about' ? "border-peach shadow-lg shadow-peach" : router.pathname.includes('/create') ? "border-sunset-orange" : router.pathname.includes('/grow') ? "border-sunset-red" : router.pathname == '/expand' ? "border-strawberry" : router.pathname == '/packages' ? "border-sunset-pink" : "border-cloudy-day"} text-center flex flex-col md:flex-row items-center justify-center columns-4 `}>
          <div className="mt-3 md:mr-7 lg:mr-0 place-items-start w-fit basis-3/12"> 
            <Image src={GGLogo} alt="Gaming Galaxy Logo" className="mx-auto" width={134} height={40}/>
            <p className="2xs:text-base md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">All logos used belong to <br></br>their respective owners </p>
            <p className="2xs:text-base md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">This website was made with love <br></br> by Thomas &quot;ZFX&quot; Zbodula</p>
            <p className="2xs:text-base md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">Email: <br></br> admin@gaminggalaxy.gg </p>
          </div>
          <div className="md:mr-7 lg:mr-0 place-items-start basis-3/12 w-fit" >
            <h1 className={`font-oxanium-bold italic text-lg md:text-xl lg:text-2xl mb-4 border-b w-fit mx-auto ${router.pathname == '/about' ? "border-peach" : router.pathname.includes('/create') ? "border-sunset-orange" : router.pathname.includes('/grow') ? "border-sunset-red" : router.pathname == '/expand' ? "border-strawberry" : router.pathname == '/packages' ? "border-sunset-pink" : "border-cloudy-day"} text-cloudy-day`}>PRODUCTS</h1>
            <ul>
              <Link legacyBehavior href="/create">
                <a className={`${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"}  block   md:p-0 font-oxanium-medium transition relative 2xs:text-base md:text-sm lg:text-base text-cloudy-day`}>Create Your Content</a>
              </Link>
              <Link legacyBehavior href="/grow">
                <a className={`${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"} block   md:p-0 font-oxanium-medium transition relative 2xs:text-base md:text-sm lg:text-base text-cloudy-day`}>Grow Your Brand</a>
              </Link>
              <Link legacyBehavior href="/expand">
                <a className={`${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"}  block  md:p-0 font-oxanium-medium transition relative 2xs:text-base md:text-sm lg:text-base text-cloudy-day`}>Expand Your Brand</a>
              </Link>
              <Link legacyBehavior href="/package">
                <a className={`${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink text-sunset-pink" : "hover:text-cloudy-day"} block   md:p-0 font-oxanium-medium transition relative mb-5 2xs:text-base md:text-sm lg:text-base text-cloudy-day`}>Package and Save</a>
              </Link>
            </ul>
          </div>


          
          <div className="md:mr-7 lg:mr-0 place-items-start basis-3/12"> 
            <h1 className={`font-oxanium-bold italic text-lg md:text-xl lg:text-2xl mb-4 border-b w-fit mx-auto ${router.pathname == '/about' ? "border-peach" : router.pathname.includes('/create') ? "border-sunset-orange" : router.pathname.includes('/grow') ? "border-sunset-red" : router.pathname == '/expand' ? "border-strawberry" : router.pathname == '/packages' ? "border-sunset-pink" : "border-cloudy-day"} text-cloudy-day`}>NEED HELP?</h1>
            <ul>
              <li>
                <Link legacyBehavior href="/termsofservice"><a className={`2xs:text-base text-cloudy-day font-oxanium-medium ${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"} transition-all`}>Terms of Service</a></Link>
              </li>
              <li>
                <Link legacyBehavior href="/privacypolicy"><a className={`2xs:text-base text-cloudy-day font-oxanium-medium ${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"} transition-all`}>Privacy Policy</a></Link>
              </li>
              <li>
                <Link legacyBehavior href="/refundpolicy"><a className={`2xs:text-base text-cloudy-day font-oxanium-medium ${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"} transition-all`}>Refund Policy</a></Link>
              </li>
              <li>
                <Link legacyBehavior href="/about"><a className={`2xs:text-base text-cloudy-day font-oxanium-medium mb-5 ${router.pathname == '/about' ? "hover:text-peach" : router.pathname.includes('/create') ? "hover:text-sunset-orange" : router.pathname.includes('/grow') ? "hover:text-sunset-red" : router.pathname == '/expand' ? "hover:text-strawberry" : router.pathname == '/packages' ? "hover:text-sunset-pink" : "hover:text-cloudy-day"} transition-all`}>About Gaming Galaxy</a></Link>
              </li>



            </ul>
          </div>
          <div className="2xs:mt-2 lg:mt-0 md:mr-0 lg:mr-0 place-items-start basis-3/12">
            <h1 className={`font-oxanium-bold italic text-lg md:text-xl lg:text-2xl mb-4 border-b w-fit mx-auto ${router.pathname == '/about' ? "border-peach" : router.pathname.includes('/create') ? "border-sunset-orange" : router.pathname.includes('/grow') ? "border-sunset-red" : router.pathname == '/expand' ? "border-strawberry" : router.pathname == '/packages' ? "border-sunset-pink" : "border-cloudy-day"} text-cloudy-day`}>FOLLOW US</h1>
            <IconContext.Provider value={{ color: pageColor, size: "1.3em" }}>
              <div className="flex flex-col justify-center border-sunset-pink mx-auto">
                <div className="flex flex-row justify-center">
                  <Link legacyBehavior href="https://www.twitch.tv/gaminggalaxytwitch" passHref>
                    <a className="transistion relative w-fit p-2"><FaTwitch /></a>
                  </Link>
                  <Link legacyBehavior href="https://www.youtube.com/channel/UC7478Dq0DDGulBJ-IZ5UVXQ" passHref>
                    <a className="transistion relative w-fit p-2"><FaYoutube /></a>
                  </Link>
                  <Link legacyBehavior href="htttps://bit.ly/ggalaxydiscord" passHref>
                    <a className="transistion relative w-fit p-2"><FaDiscord /></a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center">
                  <Link legacyBehavior href="https://twitter.com/gaminggalaxy21" passHref>
                    <a className="transistion relative w-fit p-2"><FaTwitter /></a>
                  </Link>
                  <Link legacyBehavior href="https://www.instagram.com/gaminggalaxyig/" passHref>
                    <a className="transistion relative w-fit p-2"><FaInstagram /></a>
                  </Link>
                  <Link legacyBehavior href="https://www.linkedin.com/in/gaming-galaxy-b47911227/" passHref>
                    <a className="transistion relative w-fit p-2"><FaLinkedin /></a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center">


                  <Link legacyBehavior href="https://www.tiktok.com/@realgaminggalaxy" passHref>
                    <a className="transistion relative w-fit p-2"><FaTiktok /></a>
                  </Link>
                  <Link legacyBehavior href="https://reddit.com" passHref>
                    <a className="transistion relative w-fit p-2"><FaReddit /></a>
                  </Link>
                  <Link legacyBehavior href="https://facebook.com" passHref>
                    <a className="transistion relative w-fit p-2"><FaFacebook /></a>
                  </Link>
                </div>

              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="border-3 border-cloudy-day bg-nightsky h-2/3 py-4 w-full text-center flex flex-col md:flex-row items-center gap-4 px-4">
          <div className="flex justify-start basis-6/12">
            <p className="2xs:text-sn  text-cloudy-day font-oxanium-medium">Copyright © 2023 Gaming Galaxy All Rights Reserved</p>
          </div>
          <div className="flex justify-end basis-6/12">
            <Image className="w-px" src={CardIcons} alt="Icons of various credit/debit card companies" width={340} height={21}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
