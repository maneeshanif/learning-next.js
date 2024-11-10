import React from "react";
import Image from "next/image";
import heroimg from "./../../../public/images/profile.png";
import Styles from "../Home/Home.module.css"

const Home = () => {
  return (
    <>
      <main className={Styles.maincontainer}>
        
        <div className={Styles.colorBar}> </div>

        <Image
          src={heroimg}
          alt=""
          width={1000}
          height={1000}
          className={Styles.heroImage}
        />
        <div className={Styles.textContainer}>
          <h3 className={Styles.greeting}>Hello Everyone.</h3>
           
          <h1 className={Styles.nameTitle}>I&apos;M Mohummad</h1>
          <h1 className={Styles.nameTitle}>Anees</h1>
          <div className= {Styles.ctaButton}>
             <a href="#About">Web Developer</a>
           <div className={Styles.arrow}>--&gt;</div>
          </div>
          

        </div>
      </main>
    </>
  );
};

export default Home;