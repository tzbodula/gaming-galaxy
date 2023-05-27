import React from "react";
import axios from 'axios'
import { FunctionComponent, useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import GGLogo from '../../public/img/logo/logo-xl.png'
import lgBKG from '../../public/img/bg/mdbg.jpg'
import Fade from 'react-awesome-reveal';
import validator from 'validator'
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const MDScreen: FunctionComponent = () => {
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
  const emailRef = useRef(null);
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
    <div className="relative bg-white w-full h-full overflow-hidden text-center text-[1rem] text-white font-oxanium">
      <audio muted={audio} src="/music/scifi-track.mp3" id="my_audio" loop autoPlay></audio>
      <Image className="w-full bg-contain h-full z-0" src={lgBKG} alt="Background image" />
      <div onClick={toggleAudio} className={`mr-4 mb-4 absolute bottom-0 right-0 bg-nightsky/70  rounded-full w-fit h-fit border-2 border-${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} transition-all shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} `}>
        <IconContext.Provider value={{ color: "#ffffff", size: "8rem" }}>
          {audio ?<BsFillVolumeMuteFill/> : <BsFillVolumeDownFill/>}
        </IconContext.Provider>

        </div>
      <div className="absolute top-0 left-0 mx-auto">
        <div className={`mx-auto w-[6.63rem] h-[0.13rem]`} />
        <Image
          className=" w-[20.19rem] h-[5rem] object-cover mx-auto mt-8 mb-4"
          alt=""

          src={GGLogo}
        />
        <Fade triggerOnce>
          <div className={`transition-all mx-auto ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-3/4 h-[0.13rem] `} />
          <div className="mx-auto z-10 bg-nightsky/70 w-3/4 min-[886px]:ml-12">


            <b className="inline-block text-[1.8rem]  min-w-full  italic text-center ">
              THE NEXT GENERATION
            </b>
            <b className="inline-block text-[1.8rem]  min-w-full  -mt-4 italic text-center ">
              OF GAMING CREATORS
            </b>
            <div className={`transition-all inline-block  text-[4.7rem] ${state == "success" ? "text-green-400" : state == "error" ? "text-red-600" : `text-${color}`} font-extrabold  -mt-2 min-w-full  text-center italic `}>
              ARE HERE
            </div>
            <b className="inline-block text-[1.6rem]  -mt-6 min-w-full  italic text-center">
            JOIN OUR LIST FOR WEEKLY INSIGHT!
            </b>
    
          </div>
       
        <div className={`transition-all mx-auto ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-3/4 h-[0.13rem] `} />

        <div className={`mx-auto mt-8  shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}>
          <form className="mx-auto" onSubmit={subscribeUser}>
            <div className={`transition-all mx-auto bg-[transparent] rounded-lg box-border w-3/4 h-[3.88rem] border-[2px] border-solid ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}>
            <input value={email} ref={emailRef} onChange={(e) => validateEmail(e)} type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email here.." className={`ring-0 border-transparent focus:border-transparent focus:ring-0 pl-1 placeholder:text-cloudy-day placeholder:text-xl text-xl inline w-full h-full rounded-lg bg-nightsky/70 text-cloudy-day font-oxanium-light italic shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}/>
            </div>
            <div className="mt-4 mx-auto text-[2.5rem] font-extrabold my-auto  w-[40rem] h-[6.19rem]">
            <button disabled={emailStatus != "valid" || state == "error"}  type='submit' className={emailStatus == "valid" ?`transition-all ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`}  shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} font-oxanium-extrabold italic rounded-2xl px-8 py-2` : `transition-all bg-nightsky/70 shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 border-${color} font-oxanium-extrabold italic rounded-2xl px-8 py-2`}>
                  {state == "idle" ? "SUBMIT" : state == "loading" ? "Communicating with our captain...": state == "success" ? "CHECK YOUR INBOX" : state == "error" ? "ERROR" : null}
                </button>

            </div>


          </form>
        </div>

        <div className="">
          <p className={`font-oxanium-semibold uppercase italic bg-nightsky/70 rounded-2xl mx-auto w-fit p-2 border-2 border-${color} `}>WHY GG? CLICK AN ITEM!</p>
          <div className="-mt-4">

       
            <div onClick={() => setElement("predictor")} onMouseEnter={() => setElement("predictor")} className={element == "predictor" ? "transition-all mt-8  pt-1 mr-2 bg-sunset-yellow border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow font-extrabold inline-block w-[12rem] h-[2.19rem]" : "mr-2 transition-all mt-8 pt-1 bg-transparent border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow font-extrabold inline-block w-[12rem] h-[2.19rem]"}>
              AUDIENCE ANALYTICS
            </div>

            <div onClick={() => setElement("brand")} onMouseEnter={() => setElement("brand")} className={element == "brand" ? "mt-8 pt-1  mr-2 transition-all bg-sunset-orange border-2 rounded-2xl border-sunset-orange shadow-sunset-orange font-extrabold inline-block w-[12rem] h-[2.19rem]" : "mr-2 transition-all mt-8 pt-1  bg-transparent  border-2 rounded-2xl border-sunset-orange shadow-sunset-orange font-extrabold inline-block w-[12rem] h-[2.19rem]"}>
              FREE STUFF
            </div>

            <div onClick={() => setElement("skills")} onMouseEnter={() => setElement("skills")} className={element == "skills" ? "mt-8 pt-1  mr-2 transition-all bg-sunset-red border-2 rounded-2xl border-sunset-red shadow-sunset-red font-extrabold inline-block w-[12rem] h-[2.19rem]" : "mr-2 transition-all mt-8 pt-1  bg-transparent border-2 rounded-2xl border-sunset-red shadow-sunset-red  font-extrabold inline-block w-[12rem] h-[2.19rem]"}>
              CREATOR GROWTH
            </div>

            <div onClick={() => setElement("team")} onMouseEnter={() => setElement("team")} className={element == "team" ? "mt-8 pt-1 mr-2   transition-all bg-sunset-pink  border-2 rounded-2xl border-sunset-pink  shadow-sunset-pink font-extrabold inline-block w-[12rem] h-[2.19rem]" : "mr-2 transition-all mt-8 pt-1  bg-transparent border-2 rounded-2xl border-sunset-pink  shadow-sunset-pink  font-extrabold inline-block w-[12rem] h-[2.19rem]"}>
              GG DISCOUNTS
            </div>
          </div>
        </div>
        <div className={`mt-4 mx-auto rounded-lg box-border w-3/4 h-fit border-[2px] border-solid border-${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} bg-nightsky/70`}>
              <h1 className="font-oxanium-extrabold italic uppercase mt-2">{title}</h1>
              <h1 className={`transition-all font-oxanium-bold italic uppercase -mt-4 ${state == "success" ? "text-green-400" : state == "error" ? "text-red-600" : `text-${color}`}`}>{subtitle}</h1>
            </div>
            </Fade>
      </div>

    </div>
  );
};

export default MDScreen;
