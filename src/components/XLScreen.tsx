import React from "react";
import axios from 'axios'
import { Fade } from "react-awesome-reveal";
import { FunctionComponent, useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import GGLogo from '../../public/img/logo/logo-xl.png'
import xlBKG from '../../public/img/bg/xlbg.jpg'
import validator from 'validator'
import { IconContext } from "react-icons";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

const XLScreen: FunctionComponent = () => {
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
      <Image className="w-full bg-contain h-full z-0" src={xlBKG} alt="Background image"/>
      <div onClick={toggleAudio} className={`mr-4 mb-4 absolute bottom-0 right-0 bg-nightsky/70  rounded-full w-fit h-fit border-2 border-${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} transition-all shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} `}>
        <IconContext.Provider value={{ color: "#ffffff", size: "8rem" }}>
          {audio ?<BsFillVolumeMuteFill/> : <BsFillVolumeDownFill/>}
        </IconContext.Provider>

      </div>
      <Fade triggerOnce>
      <b className="absolute top-[4.19rem] left-[1.13rem] text-[2.18rem] inline-block w-[27.38rem] h-[5.88rem] italic">
        THE NEXT GENERATION
      </b>
      <b className="absolute top-[6.38rem] left-[1.13rem] text-[1.88rem] inline-block w-[27.38rem] h-[5.88rem] italic">
        OF GAMING CREATORS
      </b>
      <b className="absolute top-[14.5rem] left-[1.13rem] text-[1.38rem] inline-block w-[27.38rem] h-[5.94rem] italic">
        JOIN OUR LIST FOR WEEKLY INSIGHT!
      </b>
      <div className={`absolute top-[8.75rem] left-[1.13rem] text-[4.25rem] font-extrabold inline-block w-[27.38rem] h-[5.88rem] italic ${state == "success" ? "text-green-400" : state == "error" ? "text-red-600" : `text-${color}`}`}>
        ARE HERE
      </div>
      <div className={`absolute top-[2.56rem] left-[2.06rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[9.06rem] h-[0.19rem]`} />
      <div className={`absolute top-[26.31rem] left-[2.06rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[25.69rem] h-[0.19rem]`} />
      <Image
        className="absolute top-[1.13rem] left-[10.81rem] w-[8.44rem] h-[2.69rem] object-cover"
        alt=""
        src={GGLogo}
      />
      <div className={`absolute top-[2.56rem] left-[19.38rem] ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`} shadow-2xl shadow-${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} w-[8.38rem] h-[0.19rem]`} />
      <form onSubmit={subscribeUser}>

    
      <div className={`transition-all absolute top-[16.81rem] left-[2.56rem] rounded-lg box-border w-[24.31rem] h-[2.5rem] border-[2px] border-solid border-${color} shadow-2xl shadow-${color}`}>
      <input value={email} ref={emailRef} onChange={(e) => validateEmail(e)} type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email here.." className={`ring-0 border-transparent focus:border-transparent focus:ring-0 pl-1 placeholder:text-cloudy-day placeholder:text-xl text-xl inline w-full h-full rounded-lg bg-nightsky/70 text-cloudy-day font-oxanium-light italic shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`}`}/>
      </div>
      <div className={`absolute top-[19rem] right-4 rounded-lg box-border w-[22.75rem] h-[7.68rem] border-[2px] border-solid ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} bg-nightsky/70`}>
            <h1 className="mx-auto w-full text-2xl font-oxanium-extrabold italic uppercase mt-6">{title}</h1>
            <h1 className={`mx-auto w-full text-2xl font-oxanium-bold italic uppercase text-${color} `}>{subtitle}</h1>
      </div>
      <div className="absolute top-[23.38rem] left-[6.69rem] rounded-sm bg-gainsboro w-[15.94rem] h-[3.5rem]" />
      <div className="absolute top-[20.69rem] left-[-5.88rem] text-[2rem] font-extrabold inline-block w-[40.65rem] h-[5.06rem]">
      <button disabled={emailStatus != "valid" || state == "error"}  type='submit' className={emailStatus == "valid" ?`transition-all ${state == "success" ? "bg-green-400" : state == "error" ? "bg-red-600" : `bg-${color}`}  shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 ${state == "success" ? "border-green-400" : state == "error" ? "border-red-600" : `border-${color}`} font-oxanium-extrabold italic rounded-2xl px-8 py-2` : `transition-all bg-nightsky/70 shadow-2xl ${state == "success" ? "shadow-green-400" : state == "error" ? "shadow-red-600" : `shadow-${color}`} border-2 border-${color} font-oxanium-extrabold italic rounded-2xl px-8 py-2`}>
                  {state == "idle" ? "SUBMIT" : state == "loading" ? "Talking with captain...": state == "success" ? "CHECK YOUR INBOX" : state == "error" ? "ERROR" : null}
                </button>

      </div>
      </form>
      </Fade>
      <div className="absolute !top-8 !right-24">
        <div className="  -mt-2 text-cloudy-day text-[0.80rem] font-extrabold inline-block w-[10rem] h-[2.19rem] ">
            <p className="my-auto">WHY GG?</p>
            <p className="my-auto">HOVER AN ITEM!</p>
        </div>
        <div onMouseEnter={() => setElement("predictor")} className={element == "predictor" ? "mt-3 bg-sunset-yellow border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow shadow-2xl bg-gainsboro w-[11.63rem] h-[2.63rem]": "mt-3 transparent border-2 rounded-2xl border-sunset-yellow shadow-sunset-yellow shadow-2xl  bg-gainsboro w-[11.63rem] h-[2.63rem]"}>
          <div className=" font-extrabold inline-block w-[11rem] h-[2.19rem] mt-2">
            AUDIENCE ANALYTICS
          </div>
        </div>

        <div onMouseEnter={() => setElement("brand")} className={element == "brand" ? "mt-3 bg-sunset-orange border-2 rounded-2xl border-sunset-orange shadow-sunset-orange shadow-2xl   bg-gainsboro w-[11.63rem] h-[2.63rem]" : "mt-3 transparent border-2 rounded-2xl border-sunset-orange shadow-sunset-orange shadow-2xl  bg-gainsboro w-[11.63rem] h-[2.63rem]"}>
        <div className="font-extrabold inline-block w-[11rem] h-[2.19rem] mt-2">
          FREE STUFF
        </div>
          </div>

        <div onMouseEnter={() => setElement("skills")} className={element == "skills" ? "mt-3 bg-sunset-red border-2 rounded-2xl border-sunset-red shadow-sunset-red shadow-2xl bg-gainsboro w-[11.63rem] h-[2.63rem]" : "mt-3 transparent border-2 rounded-2xl border-sunset-red shadow-sunset-red shadow-2xl bg-gainsboro w-[11.63rem] h-[2.63rem]"}>
        <div className="  font-extrabold inline-block w-[11rem] h-[2.19rem] mt-2">
          CREATOR GROWTH
        </div>
          </div>

        <div onMouseEnter={() => setElement("team")} className={element == "team" ? "mt-3 bg-sunset-pink border-2 rounded-2xl border-sunset-pink shadow-sunset-pink shadow-2xl bg-gainsboro w-[11.63rem] h-[2.63rem]" : "mt-3 transparent border-2 rounded-2xl border-sunset-pink shadow-sunset-pink shadow-2xl  bg-gainsboro w-[11.63rem] h-[2.63rem]"}>
        <div className=" font-extrabold inline-block w-[11rem] h-[2.19rem] mt-2">
          GG DISCOUNTS
        </div>
          </div>

      </div>
    </div>
  );
};

export default XLScreen;
