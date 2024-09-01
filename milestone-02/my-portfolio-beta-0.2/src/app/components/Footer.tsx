import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/upwork";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/instagram";

const Footer = () => {
  return (
    <>
      <footer className="h-14 bg-[#2AD87F] w-full flex items-center justify-center sm:gap-16 gap-10">
        <SocialIcon url="https://github.com/maneeshanif" />
        <SocialIcon url="https://www.upwork.com/freelancers/~01ad913fcddd64857a" />
        <SocialIcon url="https://www.linkedin.com/in/mohammadanees01/" />
        <SocialIcon url="https://www.instagram.com/mohummad_anees/" />
      </footer>
    </>
  );
};

export default Footer;
