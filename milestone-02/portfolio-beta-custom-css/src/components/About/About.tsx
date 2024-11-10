import React from 'react'
import Image from "next/image";
import aboutimg from "./../../../public/images/About.png.jpg";
import Styles from "../About/About.module.css"


const AboutMe = () => {
  return (
    <>
      <div className={Styles.container} id='About'>
      <div className={Styles.highlightLine}></div>
        <div className={Styles .aboutImgContainer}>  <Image
          src={aboutimg}
          alt=""
          width={1000}
          height={1000}
          className={Styles.actualImg}
        /></div>
        <div className={Styles.aboutText}>
          
          <h1 className={Styles.heading}>About Me</h1>
          <p className={Styles.paragraph}>MY self Mohummad Anees.I am frontend developer from Pakistan.I have expertise in html,css,js,ts and C lang. Currently i am lerning certified cloud computing in which i am focusing on next js nowadays
          </p>
          <div className={Styles.hirebtn}><a href="#Contact">Hire Me</a></div>
          <div className={Styles.cvbtn}><a href="Assets/mypdf.pdf" download="Mohummad_Anees_Cv"><button>Download CV</button></a></div>
        </div>
     
      </div>
    </>
  )
}

export default AboutMe