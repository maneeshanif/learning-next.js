"use client";
import React, { useState } from "react";
import Link from "next/link";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className={Styles.navbarContainer}>
        <div className={Styles.navbarInner}>
          <div className={Styles.navinner2}>
            <div className={Styles.logodiv}>
              <div className={Styles.logoinner}>
                <a href="/" className={Styles.logo}>
                  M.Anees
                </a>
              </div>
            </div>
            <div className={ Styles.navItems}>
              <div className={Styles.navinner}>
                <Link
                  href="/"
                  className={Styles.navLink}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={Styles.navLink}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={Styles.navLink}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className={Styles.navToggle}>
              <button
                className={Styles.navToggle}
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                  style={{height: "24", width: "24"}}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{height: "24", width: "24"}}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className={Styles.navinnerafter}>
              <Link
                href="/"
                className={Styles.navLink2}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={Styles.navLink2}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={Styles.navLink2}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;