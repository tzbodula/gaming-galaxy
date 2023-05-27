import { FunctionComponent, useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import axios from 'axios'
import validator from 'validator'
import GGLogo from '../../public/img/logo/logo-xl.png'
import xxlBKG from '../../public/img/bg/xxlBKG.jpg'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Fade from 'react-awesome-reveal';
import { IconContext } from "react-icons";
import type { Container, Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";


const XXLScreen: FunctionComponent = () => {
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
  const emailRef = useRef(null);

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [audio, setAudio] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const [title, setTitle] = useState("AI-Powered Game Topic")
  const [subtitle, setSubtitle] = useState("Market Predictions")
  const [element, setElement] = useState("predictor")
  const [color, setColor] = useState('sunset-yellow')

  const [emailStatus, setEmailStatus] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    setEmail(email)
    if (validator.isEmail(email)) {
      setEmailStatus('valid')
    } else {
      setEmailStatus('invalid')
    }
  }
  
  const subscribeUser = async (e) => {
    e.preventDefault()
    setState('loading')

    try {
      const response = await axios.post('/api/subscribeUser', { email })
      console.log(response)
      setState('success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('error')
    }
  }
  useEffect(() => {
    setState('idle')
    if (element == "predictor") {
      setTitle("Learn the current state")
      setSubtitle("of the YT gaming market")
      setColor("sunset-yellow")
    } else if (element == "brand") {
      setTitle("Receive free branding")
      setSubtitle("and growth assets")
      setColor("sunset-orange")
    } else if (element == "skills") {
      setTitle("Grow your skills with")
      setSubtitle("tutorials and info")
      setColor("sunset-red")
    } else if (element == "team") {
      setTitle("Receive discounts when")
      setSubtitle("our full site launches!")
      setColor("sunset-pink")
    }
  }, [element])

  function toggleAudio() {
    setAudio(!audio)
  }

  return (
    
    <div>
      <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
      <audio muted={audio} src="/music/scifi-track.mp3" id="my_audio" loop autoPlay></audio>
      
      <div className="relative bg-white w-full h-[64rem] overflow-hidden text-center text-[1rem] text-white font-oxanium z-10 pointer-events-auto ">

        <Image
          className="absolute top-[0rem] left-[0rem]  bg-contain h-full"
          alt=""
          src={xxlBKG}
        />
        <div onClick={toggleAudio} className={`mr-4 mb-4 absolute bottom-0 right-0 bg-nightsky/70  rounded-full w-fit h-fit border-2 border-${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} transition-all shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} `}>
        <IconContext.Provider value={{ color: "#ffffff", size: "8rem" }}>
          {audio ?<BsFillVolumeMuteFill/> : <BsFillVolumeDownFill/>}
        </IconContext.Provider>

        </div>
        <Fade triggerOnce>
          <b className="font-oxanium-semibold absolute top-[8.69rem] left-[0.63rem] text-[3.38rem] inline-block w-[46.88rem] h-[10.06rem] italic">
            THE NEXT GENERATION
          </b>
          <b className="font-oxanium-bold absolute top-[11.88rem] left-[0.31rem] text-[3.31rem] inline-block w-[46.88rem] h-[10.06rem] italic">
            OF GAMING CREATORS
          </b>
          <b className="font-oxanium-semibold absolute top-[25.94rem] left-[6.38rem] text-[1.68rem] inline-block w-[32.13rem] h-[3.75rem] italic">
            JOIN OUR LIST FOR WEEKLY INSIGHT!
          </b>
          <div className={`font-oxanium-extrabold absolute top-[15.75rem] left-[-0.25rem] text-[6.75rem] font-extrabold inline-block w-[46.88rem] h-[10.06rem] italic ${state == "success" ? "text-green-400" : state == "error" ? "text-red-600" : `text-${color}`}  `}>
            ARE HERE
          </div>
          <div className={`transition-all absolute top-[7.56rem] left-[3.56rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[16.44rem] h-[0.38rem]`} />
          <div className={`transition-all absolute top-[39.13rem] left-[3.56rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[40.63rem] h-[0.38rem]`} />
          <Image
            className="absolute top-[6.25rem] left-[20rem] w-[8.19rem] h-[2.63rem] object-cover"
            alt=""
            src={GGLogo}
          />

          <div className={`z-10 transition-all absolute top-[7.56rem] left-[28rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[16.5rem] h-[0.38rem]`} />
          <div>
            <form className="z-50" onSubmit={subscribeUser}>


              <div className={`transition-all absolute top-[29.06rem] left-[5.81rem] rounded-lg box-border w-[32.69rem] h-[2.56rem] border-[2px] border-solid ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} shadow-2xl shadow-${color}`}>

              <input value={email} ref={emailRef} onChange={(e) => validateEmail(e)} type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email here.." className={`ring-0 border-transparent focus:border-transparent focus:ring-0 pl-1 placeholder:text-cloudy-day placeholder:text-xl text-xl inline w-full h-full rounded-lg bg-nightsky/70 text-cloudy-day font-oxanium-light italic shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}/>
              
              </div>
              <div className={`transition-all absolute top-[45rem] left-[3.56rem] rounded-lg box-border w-[40.63rem] h-[9.38rem] border-[2px] border-solid ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}>
                <h1 className="font-oxanium-extrabold italic uppercase mt-4">{title}</h1>
                <h1 className={`font-oxanium-bold italic uppercase -mt-4 text-${color}`}>{subtitle}</h1>
              </div>
              <div className="absolute top-[33.19rem] left-[15.75rem] rounded-sm bg-gainsboro w-[12.75rem] h-[3.81rem]" />
              <div className="absolute top-[33.75rem] left-[2.8rem] text-[2rem] font-extrabold inline-block w-[40.65rem] h-[5.06rem] ">
                <button disabled={emailStatus != "valid" || state == "error"}  type='submit' className={emailStatus == "valid" ?`transition-all ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`}  shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} font-oxanium-extrabold italic rounded-2xl px-8 py-2` : `transition-all bg-nightsky/70 shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 border-${color} font-oxanium-extrabold italic rounded-2xl px-8 py-2`}>
                  {state == "idle" ? "SUBMIT" : state == "loading" ? "Communicating with our captain...": state == "success" ? "CHECK YOUR INBOX" : state == "error" ? "ERROR" : null}
                </button>

              </div>
            </form>
          </div>
        </Fade>
        

        <div className="absolute !top-4 !right-4">
          <div className=" text-cloudy-day text-[0.80rem] font-oxanium-semibold inline-block pt-8">
            <p className="my-auto">WHY GG?</p>
            <p className="my-auto">HOVER AN ITEM!</p>
          </div>
          <div onMouseEnter={() => setElement("predictor")} className={element == "predictor" ? "mt-8 bg-sunset-yellow border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow   bg-gainsboro w-[5.99rem] h-[3.78rem] " : "mt-8 bg-transparent border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow   bg-gainsboro w-[5.99rem] h-[3.78rem] "} >
            <div className=" text-[0.80rem] font-oxanium-semibold inline-block mt-2">
              <p className="">AUDIENCE</p>
              <p className="">ANALYTICS</p>
            </div>
          </div>
          <div onMouseEnter={() => setElement("brand")} className={element == "brand" ? "mt-8 bg-sunset-orange border-2 rounded-2xl border-sunset-orange shadow-sunset-orange shadow-2xl bg-gainsboro w-[5.99rem] h-[3.78rem] " : "mt-8 bg-transparent border-2 rounded-2xl border-sunset-orange shadow-sunset-orange  shadow-2xl bg-gainsboro w-[5.99rem] h-[3.78rem] "} >
            <div className=" a text-[0.80rem] font-oxanium-semibold inline-block mt-2  ">
              <p className="">FREE</p>
              <p className="">STUFF</p>
            </div>
          </div>
          <div onMouseEnter={() => setElement("skills")} className={element == "skills" ? "mt-8 bg-sunset-red border-2 rounded-2xl border-sunset-red shadow-sunset-red shadow-2xl  bg-gainsboro w-[5.99rem] h-[3.78rem]" : "mt-8 bg-transparent border-2 rounded-2xl border-sunset-red shadow-sunset-red shadow-2xl bg-gainsboro w-[5.99rem] h-[3.78rem] "} >
            <div className=" text-[0.80rem] font-oxanium-semibold inline-block mt-2 ">
              <p className="">CREATOR</p>
              <p className="">GROWTH</p>
            </div>
          </div>
          <div onMouseEnter={() => setElement("team")} className={element == "team" ? "mt-8 bg-sunset-pink border-2 rounded-2xl border-sunset-pink shadow-sunset-pink shadow-2xl  bg-gainsboro w-[5.99rem] h-[3.78rem] " : "mt-8 bg-transparent border-2 rounded-2xl border-sunset-pink shadow-sunset-pink shadow-2xl bg-gainsboro w-[5.99rem] h-[3.78rem] "}>
            <div className="text-[0.80rem] font-oxanium-semibold inline-block mt-2 ">
              <p className="">GG</p>
              <p className="">DISCOUNTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default XXLScreen;
