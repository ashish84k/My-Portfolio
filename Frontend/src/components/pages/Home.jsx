import React, { useState } from "react";
// import Slider from "../ui/Slider";
import Navbar from "../ui/Navbar";
// import Card from "../ui/Card";
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
import ContactPage from "./ContactPage";

function Home() {

  return (
    <div className="">
      <Navbar></Navbar>
      <div>
      </div>
      <div className="p-5 Trapes" id="home">
        <HeroSection></HeroSection>
      </div>

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
        {/* <Contact></Contact> */}
        <ContactPage></ContactPage>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
