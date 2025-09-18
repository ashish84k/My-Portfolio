import React, { useState } from "react";
import Slider from "../ui/Slider";
import Navbar from "../ui/Navbar";
import Card from "../ui/Card";
import Skills from "../ui/Skills";
import EducationTimeline from "../ui/EducationTimeline";
import AboutMe from "../ui/AboutMe";
import Footer from "../ui/Footer";
import Contact from "../ui/Contact";
import HeroSection from "../ui/HeroSection";
import Projects from "../ui/projects";
import BlogSection from "../ui/BlogSection";
import CertificationsAchievements from "../ui/CertificationsAchievements";
import ExperienceTimeline from "../ui/ExperienceTimeline";

const cards = [
  {
    img: "https://i.pinimg.com/736x/53/5d/1c/535d1c11ee83b941cbe1233cbd7dc87e.jpg",
    title: "Mountain View",
    desc: "Peaceful mountain scenery with clear skies.",
  },
  {
    img: "https://i.pinimg.com/736x/3d/02/4a/3d024a29b20cd68860b61f46597b704b.jpg",
    title: "Ocean Breeze",
    desc: "Feel the calmness of the waves hitting the shore.",
  },
  {
    img: "https://i.pinimg.com/1200x/dd/bc/55/ddbc55f724b24776cb2c697c68674ce9.jpg",
    title: "City Lights",
    desc: "The vibrant nightlife of a bustling city.",
  },
  {
    img: "https://i.pinimg.com/1200x/f5/37/63/f53763454780c44e09231d02da6f19f7.jpg",
    title: "Green Escape",
    desc: "Immerse yourself in the beauty of nature.",
  },
  {
    img: "https://i.pinimg.com/736x/77/1c/28/771c282189f89aaac4460980fa8dc53e.jpg",
    title: "Cosmic Wonders",
    desc: "A glimpse into the vast universe.",
  },
];

function Home() {
  // const [ripples, setRipples] = useState([]);

  // const MouseClick = (e) => {
  //   const newRipple = {
  //     x: e.clientX - 50,
  //     y: e.clientY - 50,
  //     id: Date.now(),
  //   };
  //   setRipples((prev) => [...prev, newRipple]);

  //   setTimeout(() => {
  //     setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
  //   }, 1500);
  // };

  return (
    <div className="">
      <Navbar></Navbar>
      <div>
      </div>
      {/* <div className="p-5 Trapes" id="home" onClick={MouseClick} onMouseMove={MouseClick}> */}
      <div className="p-5 Trapes" id="home">
        <HeroSection></HeroSection>
        {/* <Slider></Slider> */}
        {/* {ripples.map((r) => (
          <span
            key={r.id}
            style={{ left: r.x, top: r.y }}
            className="absolute ripple"
          ></span>
        ))} */}
        {/* <h1
          className="absolute font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ left: "50%", top: "20%", transform: "translateX(-50%)" }}
        >
          My Portfolio
        </h1> */}
      </div>

      {/* <h1
        className=" font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        My Projects
      </h1>
      <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {cards.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            item={item}
          />
        ))}
      </div> */}

<div id="projects">
  <Projects></Projects>
</div>

      <div>
        <Skills></Skills>
      </div>
      <div>
        <EducationTimeline></EducationTimeline>
      </div>
      <div id="about">
        <AboutMe></AboutMe>
      </div>

      <div>
        <BlogSection></BlogSection>
      </div>

      <div>
        <CertificationsAchievements></CertificationsAchievements>
      </div>

      <div id="experience">
        <ExperienceTimeline></ExperienceTimeline>
      </div>

      <div>
        <Contact></Contact>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
