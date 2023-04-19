import { useCallback, useState } from 'react';
import ellipse from "../../public/img/logo/logo-square.png";

import Image from 'next/image';
import { useRouter } from "next/router";



import { useSession, signOut } from 'next-auth/react';

function dateFormat(inputDate) {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    // Months use 0 index.
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  }
}

import Particles from "react-particles";
import ReactPlayer from 'react-player/youtube';
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Profile = () => {

  const particlesInit = useCallback(async (engine: Engine) => {

    await loadLinksPreset(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const options = {
    preset: "links",
    background: {
      "opacity": 0
    }
  };

  const Router = useRouter()

  const [selection, setSelection] = useState("Socials")

  const { data: session } = useSession();


  if (session) {
    return (
      <>
        <div>
          <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
          <div className=' '>
            <div className='z-0' id='wrapper'>
    
            <ReactPlayer 
            playing
            volume={0}
            loop
            width={1920}
            height={1080}
            className='player'
            style={{
              backgroundColor: "#ce4993",
              zIndex: "-1",
            }}

            url='https://www.youtube.com/watch?v=4Zsc30Mlkyw' />
            <div className='overlay'>
            <div className='z-10 '>
              <div className=" text-cloudy-day w-full h-full  flex flex-row justify-start items-stretch font-oxanium-semibold text-2xl leading-4  ">
                <div className="h-full bg-center bg-cover flex-col self-start items-center pt-20 pr-10 flex basis-full justify-evenly pl-2.5">
                  <div className=" w-[65%] bg-nightsky flex-row basis-[11%] justify-between self-center items-center text-[2.5rem] font-bold leading-[50px] flex ml-[0.438rem] mt-3 pl-[1.625rem] pr-6 rounded-[50px] border-2 border-solid border-sunset-pink mb-6">
                    <Image width={94} height={94} className="!p-2 w-[94px] h-[94px] object-cover self-center;" src={ellipse} alt="Image of a circle" />
                    <div className=" h-[55%] flex-col basis-[48%] justify-between self-center items-stretch flex mt-0.3">
                      <span className=" self-start ml-[0.063rem];">{session.user.name}</span>
                      <span className=" self-start text-lg font-oxanium-light leading-[20px]">
                        1.24K FOLLOWERS | 24 FOLLOWING
                      </span>
                    </div>
                    <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/login'})} className=" text-cloudy-day h-[70%] bg-sunset-pink border flex-row basis-3/12 justify-center self-center items-center text-5xl font-bold leading-[60px] flex ml-[10.313rem] mt-0.5 pl-1 rounded-[50px] border-solid border-nightsky">
                      <span className=" self-center ml-0.5;">LOGOUT</span>
                    </button>
                  </div>
                  <div className=" w-[65%] flex-row basis-[7%] justify-between self-center items-stretch flex ml-[0.438rem] mb-12">
                    <button className=" text-cloudy-day h-full bg-sunset-pink font-oxanium-semibold flex-row basis-[17%] justify-center self-start items-center text-[2rem] font-bold leading-10 flex pr-0.5 pt-[0.063rem] rounded-[50px] border-2 border-solid border-sunset-pink">
                      <span className=" self-center mt-[0.063rem]">SOCIALS</span>
                    </button>
                    <button className=" text-center text-white h-full bg-nightsky flex-row basis-[17%] justify-center self-start items-center text-[2rem] font-bold leading-10 flex pt-[0.063rem] rounded-[50px] border-2 border-solid border-sunset-pink">
                      <span className="  self-center mt-[0.063rem]">POSTS</span>
                    </button>
                    <button className=" text-white text-center h-full bg-nightsky flex-row basis-[17%] justify-center self-start items-center text-[2rem] font-bold leading-10 flex pt-[0.063rem] rounded-[50px] border-2 border-solid border-sunset-pink">
                      <span className=" self-center mt-[0.063rem]">AWARDS</span>
                    </button>
                    <button className=" text-white text-center h-full bg-nightsky flex-row basis-[17%] justify-center self-start items-center text-[2rem] font-bold leading-10 flex ml-[0.063rem] pr-[0.063rem] pt-[0.063rem] rounded-[50px] border-2 border-solid border-sunset-pink">
                      <span className=" self-center mt-[0.063rem]">JOBS</span>
                    </button>
                    <button className=" text-white text-center h-full bg-nightsky flex-row basis-[17%] justify-center self-start items-center text-[2rem] font-bold leading-10 flex pl-[0.063rem] pt-[0.063rem] rounded-[50px] border-2 border-solid border-sunset-pink">
                      <span className=" self-center mt-[0.063rem]">FRIENDS</span>
                    </button>
                  </div>
                  <div className=" text-center w-[65%] flex-row basis-[23%] justify-between self-center items-stretch leading-[95px] flex ml-[0.438rem]">
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#FF0000] mb-6">
                      <span className=" self-center text-sm leading-[15px] mt-1.5">YT CHANNEL NAME</span>
                      <span className=" self-center text-[4.75rem] font-bold">104K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">SUBSCRIBERS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#FF0000] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                        <FaYoutube/> <span className=" ml-2 self-center"> VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#FF0000]">
                      <span className=" self-center text-xs leading-[15px] mt-1.5">YT CHANNEL NAME</span>
                      <span className="self-center text-[4.75rem] font-bold">1.4M</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">VIDEO VIEWS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#FF0000] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaYoutube/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#1DA1F2]">
                      <span className="  self-center text-xs leading-[15px] mt-1.5">TWITTER NAME</span>
                      <span className="self-center text-[4.75rem] font-bold">10.6K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">FOLLOWERS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#1DA1F2] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaTwitter/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#F77737]">
                      <span className=" self-center text-xs leading-[15px] mt-1.5">INSTAGRAM NAME</span>
                      <span className=" self-center text-[4.75rem] font-bold">104K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">FOLLOWERS</span>
                      <button className="text-[#FFFFFF] text-center w-[55%] bg-[#F56040] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaInstagram/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                  </div>

                  <div className="  text-center w-[65%] flex-row basis-[23%] justify-between self-center items-stretch leading-[95px] flex ml-[0.438rem]">
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#7289da]">
                      <span className="  self-center text-xs leading-[15px] ml-[0.063rem] mt-1.5">COMMUNITY DISCORD</span>
                      <span className="self-center text-[4.75rem] font-bold">14K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">FOLLOWERS</span>
                      <button className="text-[#FFFFFF] text-center w-[55%] bg-[#7289da] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaDiscord/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#00f2ea]">
                      <span className="self-center text-xs leading-[15px] mt-1.5">TIKTOK NAME</span>
                      <span className="self-center text-[4.75rem] font-bold">104K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">FOLLOWERS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#ff0050] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaTiktok/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#9146FF]">
                      <span className="self-center text-xs leading-[15px] mt-1.5">TWITCH NAME</span>
                      <span className=" self-center text-[4.75rem] font-bold leading-[95px] ml-[0.063rem]">104K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">FOLLOWERS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#9146FF] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaTwitch/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                    <div className=" h-full bg-nightsky flex-col basis-[21%] justify-evenly self-start items-center flex pr-0.5 pt-[1.938rem] rounded-[50px] border-[3px] border-solid border-[#9146FF] mb-48">
                      <span className="self-center text-xs leading-[15px] mt-1.5">TWITCH NAME</span>
                      <span className=" self-center text-[4.75rem] font-bold leading-[95px] ml-[0.063rem]">104K</span>
                      <span className=" self-center leading-[0px] mb-[1.5rem]">SUBSCRIBERS</span>
                      <button className=" text-[#FFFFFF] text-center w-[55%] bg-[#9146FF] flex-row basis-[17%] justify-center self-center items-center text-2xl font-bold leading-[30px] flex ml-0.5 mt-[0.063rem] mb-[1.0rem] rounded-[50px] border-[none]">
                      <FaTwitch/><span className="ml-2 self-center">VISIT</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>

           
          </div>

        </div>
      </>
    );
  }

};



export default Profile;