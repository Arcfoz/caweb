import VideoPlayer from "@/components/Videoplayer";
import About from "@/components/About";
import Course from "@/components/Course";
import Benefit from "@/components/Benefit";
import SdanK from "@/components/SyaratKetentuan";
import Berkas from "@/components/Berkas";
import Footer from "@/components/Footer";
import NavHome from "@/components/navbarHome";
import React from "react";
import Partner from "@/components/Partner";
import Skberkas from "@/components/skBerkas";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <NavHome />
      </div>
      <div className="mb-16 md:mb-32 lg:mb-9">
        <VideoPlayer />
      </div>
      <div className="mb-12 md:mb-7">
        <About />
      </div>
      <div className="mb-40 md:mb-72 lg:mb-44">
        <Benefit />
      </div>
      <div className="mb-32 md:mb-80 lg:mb-64">
        <Course />
      </div>
      <div className=" md:hidden">
        <SdanK />
      </div>
      <div className=" md:hidden">
        <Berkas />
      </div>
      <div className="hidden md:block md:mb-80">
        <Skberkas />
      </div>
      <div className="mb-32 mt-32">
        <Partner />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
