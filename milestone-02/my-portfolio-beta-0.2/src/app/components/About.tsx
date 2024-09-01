import React from 'react'
import Image from "next/image";
import aboutimg from "./../../../public/About.png.jpg";


const About = () => {
  return (
    <>
      <div className='bg-[#1e242b] h-dvh w-full relative flex flex-wrap border-y-white border-[1px]' id='About'>
      <div className='h-[2px] w-96 bg-[#2AD87F] absolute  top-40 right-0'></div>
        <div className='sm:h-[30rem] h-[20rem] w-[18rem] sm:w-[25rem] bg-[#2AD87F] z-50 absolute top-16 sm:top-32 left-16 sm:left-40'>  <Image
          src={aboutimg}
          alt=""
          width={1000}
          height={1000}
          className=" h-[90%]  sm:h-[100%] w-[90%] sm:w-[100%] z-100 absolute  left-8 sm:left-10 bottom-8 sm:bottom-10 "
        /></div>
        <div className='h-80 w-[20rem] sm:h-96 sm:w-[37rem]  absolute sm:top-32 bottom-10 right-10 sm:right-44'>
          
          <h1 className='text-white bold  text-4xl sm:text-[3.5rem]'>About Me</h1>
          <p className=' pt-8 sm:pt-16  text-[1rem] sm:text-xl text-white bold'>MY self Mohummad Anees.I am frontend developer from Pakistan.I have expertise in html,css,js,ts and C lang. Currently i am lerning certified cloud computing in which i am focusing on next js nowadays
          </p>
          <div className=' h-12 sm:h-16  w-28 sm:w-48 bg-[#2AD87F] absolute bottom-6 text-white  text:sm sm:text-xl flex items-center justify-center hover:bg-inherit border-[#2AD87F] border-[3px] hover:text-[#2AD87F] '><a href="#Contact">Hire Me</a></div>
          <div className='h-12 sm:h-16  w-28 sm:w-48 border-[#2AD87F] border-[3px] absolute bottom-6  left-36 sm:left-52 text-white text-sm sm:text-xl flex items-center justify-center hover:bg-[#2AD87F] '><a href="/my-cv.pdf" download="Mohummad_Anees_Cv"><button>Download CV</button></a></div>
        </div>
      </div>
    </>
  )
}

export default About