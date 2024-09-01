import React from "react";
import Image from "next/image";
import heroimg from "./../../../public/profile.png";

const Home = () => {
  return (
    <>
      <main className="bg-[#1e242b] h-dvh  w-full  relative  overflow-hidden overflow-x-hidden">
        
        <div className=" inline h-screen w-[32%] sm:w-[34%] bg-[#2AD87F]   absolute top-0 right-0 "> </div>

        <Image
          src={heroimg}
          alt=""
          width={1000}
          height={1000}
          className="sm:h-[100%] h-[38rem] w-[90%] sm:w-[50%] z-100 absolute sm:top-0  bottom-0  left-[27%] sm:left-[38%]  "
        />
        <div className="sm:h-[56%] h-[20%] w-[3%] sm:w-[68%] absolute sm:px-48 px-12  sm:pt-48  pt-24">
          <h3 className="text-[#2AD87F] sm:text-2xl text-[13px]">Hello Everyone.</h3>
           
          <h1 className="text-white font-bold sm:text-[70px] text-[35px] uppercase tracking-tighter ">I&apos;M Mohummad</h1>
          <h1 className="text-white font-bold sm:text-[70px] text-[35px] tracking-wider -mt-1 sm:-mt-4 uppercase leading-tight">Anees</h1>
          <div className="h-16 sm:h-20 w-56 sm:w-96 mt-8  border-[#2AD87F] text-white bold text-sm sm:text-2xl border-[4px] text-center relative  uppercase flex justify-center hover:bg-[#2AD87F] items-center pr-16">
             <a href="#About">Web Developer</a>
           <div className="bg-[#2AD87F] text-[#1e242b] font-black h-[61px] sm:h-[76px] w-[69px] sm:w-20 flex justify-center items-center -top-1 sm:-top-0  right-[0px] sm:right-0 absolute hover:text-blue-700 ">--&gt;</div>
          </div>
          

        </div>
      </main>
    </>
  );
};

export default Home;