import React from "react";
import Link from "next/link";
import Styles from "../Footer/Footer.module.css"

import {
  FaGithub,
  FaSquareUpwork,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
    const iconalingmnet = 
        {height:"300",width:"300"}
    
  return (
    <>
      <footer className={Styles.footerContainer}>
        <Link href="https://github.com/maneeshanif" style={iconalingmnet} className={Styles.socialIcon} >
          <FaGithub />
        </Link>
        <Link href="https://www.upwork.com/freelancers/~01ad913fcddd64857a"  style={iconalingmnet} className={Styles.socialIcon} >
          <FaSquareUpwork />
        </Link>
        <Link href="https://www.linkedin.com/in/mohammadanees01/" style={iconalingmnet} className={Styles.socialIcon} >
          <FaLinkedin />
        </Link>
        <Link href="https://www.instagram.com/mohummad_anees/" style={iconalingmnet} className={Styles.socialIcon} >
          <FaInstagram />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
