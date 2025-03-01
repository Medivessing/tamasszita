"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {} from "react-icons/ri";
import CV from "../pages/CV_2";
import Works from "../pages/Works_2";
import { motion, PanInfo, useAnimation } from "framer-motion";
import AboutV2 from "../pages/AboutV2";

const Version_3 = () => {
  const [activeInfo, setActiveInfo] = useState("rólam");
  const infos = ["rólam", "cv", "munkáim"];

  const controls = useAnimation();

  const currentIndex = infos.indexOf(activeInfo);
  const nextIndex = currentIndex === infos.length - 1 ? 0 : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? infos.length - 1 : currentIndex - 1;

  const handleNext = () => {
    setActiveInfo(infos[nextIndex]);
  };
  const handlePrev = () => {
    setActiveInfo(infos[prevIndex]);
  };

  const handleDragEnd = async (event: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > 50 || Math.abs(velocity) > 500) {
      const direction = offset > 0 ? 1 : -1; //Right = 1, Left = -1

      await controls.start({
        x: direction * 200,
        opacity: 0,
        transition: { duration: 0.2 },
      });

      if (direction > 0) {
        handlePrev();
      } else {
        handleNext();
      }

      await controls.start({
        x: direction * 200,
        opacity: 0,
        transition: { duration: 0 },
      });

      await controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      });
    } else {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      });
    }
  };

  return (
    <>
      <div className=" relative z-10">
        <div className="info-container">
          <div className="buttons flex flex-col items-center ">
            <button className="sm:px-0 md:px-10 hover:scale-125 transition-transform active:scale-95" onClick={handlePrev}>
              <FaArrowLeft size={30} fill="white"/>
            </button>
            <p className="text-lg pt-5 text-white">{infos[prevIndex].toUpperCase()}</p>
          </div>

          {activeInfo === "rólam" && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="personal w-full touch-pan-y cursor-grab active:cursor-grabbing"
            >
              <AboutV2 />
            </motion.div>
          )}
          {activeInfo === "cv" && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              animate={controls}
              className=" cv scrollbar-hide w-full touch-pan-y cursor-grab active:cursor-grabbing"
            >
              <CV />
            </motion.div>
          )}
          {activeInfo === "munkáim" && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="works scrollbar-hide w-full touch-pan-y cursor-grab active:cursor-grabbing"
            >
              <Works />
            </motion.div>
          )}

          <div className="buttons flex flex-col items-center">
            <button className="sm:px-0 md:px-10 hover:scale-125 transition-transform active:scale-95" onClick={handleNext}>
              <FaArrowRight size={30} fill="white"/>
            </button>
            <p className="text-lg pt-5 text-white">{infos[nextIndex].toUpperCase()}</p>
          </div>
          {/* <div className="pages bg-black">asd</div> */}
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center lg:p-8 lg:pt-0 justify-center gap-6 lg:gap-24 scrollbar-hide">
      <div className="bg-[#F5F5F5] rounded-2xl max-w-[400px] p-4 lg:p-10 flex flex-col items-center lg:mb-auto mt-40 ">
        <div className="relative -mt-[7.5rem] ">
          <Image
            src={portrait}
            width={160}
            height={160}
            alt="selfportrait"
            className="rounded-2xl pointer-events-none select-none"
          />
        </div>
        <h1 className="text-[#3D3E41] font-extrabold text-2xl pt-4">
          Szita Tamás
        </h1>
        <p className="text-[#A1A1A1] pt-1">Webfejlesztő</p>

        <div className="flex flex-row gap-2 pb-10 pt-3">
          <Link href="https://github.com/Medivessing" passHref legacyBehavior>
            <a
              target="_blank"
              className="bg-[#EAEAEA] p-1 rounded hover:bg-[#B5C18E] "
            >
              <FaGithub size={23} color="#3D3E41" />
            </a>
          </Link>

          <Link href="https://tamasszita.com" passHref legacyBehavior>
            <a
              target="_blank"
              className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]"
            >
              <TbWorldWww size={23} color="#3D3E41" />
            </a>
          </Link>

          <Link
            href="https://www.linkedin.com/in/tamasszita/"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]"
            >
              <FaLinkedin size={23} color="#3D3E41" />
            </a>
          </Link>
        </div>

        <div className=" bg-[#EAEAEA] rounded-2xl flex flex-col w-[300px] gap-5 p-4 justify-between ">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#f5f5f5] shadow-md p-1 rounded">
              <IoMail size={28} color="#3D3E41" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs  text-[#3D3E41]">Email</p>
              <p className=" text-[#3D3E41]">szita999@gmail.com</p>
            </div>
          </div>

          <hr className="h-[2px] bg-[#A1A1A1]" />

          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#f5f5f5] shadow-md p-1 rounded">
              <IoLocation size={28} color="#3D3E41" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-[#3D3E41]">Location</p>
              <p className=" text-[#3D3E41]">Remote / Balatonfüred</p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-[#6C7D47] to-[#A3B678] py-1 px-6 rounded-2xl text-lg text-[#f5f5f5] hover:text-[#3D3E41]"
          >
            Önéletrajz letöltése
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-[#F5F5F5] rounded-2xl mx-auto lg:mx-0 lg:ml-auto p-5 items-center flex flex-row justify-between gap-5 mb-5">
          <button
            onClick={() => setActiveButton("Home")}
            className={`${
              activeButton === "Home"
                ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
                : ""
            } bg-[#EAEAEA] flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
          >
            <div className="">
              <FaHome
                size={30}
                color={`${activeButton === "Home" ? "f5f5f5" : "3D3E41"}`}
              />
            </div>
            <p
              className={`${
                activeButton === "Home" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
              } text-xs md:text-base`}
            >
              Home
            </p>
          </button>
          <button
            onClick={() => setActiveButton("CV")}
            className={`${
              activeButton === "CV"
                ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
                : ""
            } bg-[#EAEAEA] flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
          >
            <div>
              <IoNewspaper
                size={30}
                color={`${activeButton === "CV" ? "f5f5f5" : "3D3E41"}`}
              />
            </div>
            <p
              className={`${
                activeButton === "CV" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
              } text-xs md:text-base`}
            >
              CV
            </p>
          </button>
          <button
            onClick={() => setActiveButton("Works")}
            className={`${
              activeButton === "Works"
                ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
                : ""
            } bg-[#EAEAEA] flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
          >
            <div className="">
              <IoCube
                size={30}
                color={`${activeButton === "Works" ? "f5f5f5" : "3D3E41"}`}
              />
            </div>
            <p
              className={`${
                activeButton === "Works" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
              } text-xs md:text-base`}
            >
              Munkáim
            </p>
          </button>
          <button
            onClick={() => setActiveButton("Contact")}
            className={`${
              activeButton === "Contact"
                ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
                : ""
            } bg-[#EAEAEA] flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
          >
            <div className="">
              <RiMessage2Fill
                size={30}
                color={`${activeButton === "Contact" ? "f5f5f5" : "3D3E41"}`}
              />
            </div>
            <p
              className={`${
                activeButton === "Contact" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
              } text-xs md:text-base`}
            >
              Kapcsolat
            </p>
          </button>
        </div>

        <div className="bg-[#F5F5F5] rounded-2xl mx-auto max-w-[350px] md:max-w-[500px] lg:max-w-[700px] h-[650px] p-5 lg:p-10 flex flex-col scrollbar-hide overflow-y-auto ">
          {activeButton === "Home" && <About />}
          {activeButton === "CV" && <CV />}
          {activeButton === "Works" && <Works />}
          {activeButton === "Contact" && <Contact />}
        </div>
      </div>
      <div className="py-5"></div>
    </div> */}
      </div>

      <div className="gradient-bg ">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="g6"></div>
          <div className="g7"></div>
        </div>
      </div>
    </>
  );
};

export default Version_3;
