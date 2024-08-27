"use client";
import "./page.css";
import React, { useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  return (
    <>
      <section>
        {showConfetti && <Confetti />}
        <div className="content">
          <h1>Hello World 👻</h1>
          <button onClick={handleClick}> Lets Go 🎉</button>
          <p>Stay tuned, more amazing projects are on the way!😉</p>

        </div>
         <div className="intro">
        <h3>made by: <span>m.aneeshanif</span></h3>
        </div>
      </section>
    </>
  );
}
