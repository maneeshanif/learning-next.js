import React from "react";

const ContactMe = () => {
  return (
    <>
      <div
        className="bg-[#1e242b] h-dvh w-full relative flex flex-wrap border-y-white border-[2px]"
        id="Contact"
      >
        <div className="h-[2px] w-10 sm:w-96 bg-[#2AD87F] absolute  top-32 right-0"></div>

        <div className="h-96 w-2/5 text-white bg-[#2AD87F]  absolute bottom-0"></div>
        <div className="backdrop-blur-3xl border-[#2AD87F] border-[2px] top-10 h-[80%] w-[72%] sm:w-[35%] ml-[14%] sm:ml-[32%] absolute mt-10 pb-2.5 rounded-[10px]">
          <form
            action="https://formspree.io/f/xrbzknbe"
            target="_blank"
            method="POST"
          >
            <h1 className="text-[#2AD87F] text-center text-[40px] sm:text-6xl p-3;">
              Contact
            </h1>
            <input
              type="text"
              placeholder="First name"
              autoComplete="off"
              required
              className=" bg-[#e2eaf5] w-[70%] text-xl ml-[15%] mb-5 p-4 rounded-[10px]  focus-within:border-[#2AD87F] focus-within:border-[3px]"
            />
            <input
              type="text"
              placeholder="Last name"
              autoComplete="off"
              required
              className=" bg-[#e2eaf5] w-[70%] text-xl ml-[15%] mb-5 p-4 rounded-[10px]  focus-within:border-[#2AD87F] focus-within:border-[3px]"
            />
            <input
              type="email"
              placeholder="Enter your email "
              autoComplete="off"
              required
              className=" bg-[#e2eaf5] w-[70%] text-xl ml-[15%] mb-5 p-4 rounded-[10px] border-inherit focus-within:border-[#2AD87F] focus-within:border-[3px] "
            />
            <textarea
              rows={5}
              cols={62}
              name="message"
              placeholder="Enter your text"
              defaultValue={""}
              className=" bg-[#e2eaf5] w-[70%] text-xl ml-[15%] mb-5 p-4 rounded-[10px] focus-within:border-[#2AD87F] focus-within:border-[3px]"
            />
            <button
              type="submit"
              className=" text-[#f7e7df] bg-[#2AD87F]  text-[22px] text-center flex justify-center m-auto px-[34px] py-2.5  hover:border-[#2AD87F] hover:border-[3px] hover:bg-inherit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
