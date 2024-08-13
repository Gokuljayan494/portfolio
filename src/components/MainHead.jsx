import React, { useState, useEffect } from "react";
import "./mainHead.css";

function MainHead() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 + scrollPosition / 500;

  return (
    <div
      style={{
        height: "250vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: scale >= 1.7 ? scrollPosition / 1000 : 0,
          transition: "opacity 0.5s ease-out",
          backgroundPosition: `center ${scrollPosition * 0.5}px`,
          backgroundColor: "rgb(241, 235, 201)",
        }}
      ></div>
      <div
        className="main-text-container"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          position: "fixed",
          top: "50%",
          left: "50%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "0 5%",
          fontFamily: "Montserrat",
          color: "rgb(241, 235, 201)",
        }}
      >
        <div
          className="left-text"
          style={{ textAlign: "left", marginLeft: "21%" }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "5vw",
            }}
          >
            HI
          </h2>
          <h2 style={{ margin: 0, fontSize: "5vw" }}>I'M</h2>
        </div>
        <div
          className="right-text"
          style={{ textAlign: "right", marginRight: "30%" }}
        >
          <h1 style={{ margin: 0, fontSize: "15vw" }}>GOKUL</h1>
          <h1 style={{ margin: 0, fontSize: "15vw" }}>JAYAN</h1>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
