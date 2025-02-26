"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { IoCube, IoLocation, IoMail, IoNewspaper } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import About from "../pages/About";
import CV from "../pages/CV";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import portrait from "@/public/me.jpeg";

const Version_2 = () => {
  const [activeButton, setActiveButton] = useState("Home");

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Szita_Tamas_CV.pdf";
    link.download = "Szita_Tamas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // useEffect(() => {
  //   const handleOnMouseMove = (e) => {
  //     const { currentTarget: target } = e;
  //     const rect = target.getBoundingClientRect(),
  //       x = e.clientX - rect.left,
  //       y = e.clientY - rect.top;
  //     target.style.setProperty("--mouse-x", `${x}px`);
  //     target.style.setProperty("--mouse-y", `${y}px`);
  //   };

  //   for (const card of document.querySelectorAll(
  //     ".card"
  //   ) as NodeListOf<HTMLElement>) {
  //     card.onmousemove = (e) => handleOnMouseMove(e);
  //   }
  // }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    // <div className="flex flex-col lg:flex-row items-center lg:p-8 lg:pt-0 justify-center gap-6 lg:gap-24 scrollbar-hide">
    //   <div className="   rounded-2xl max-w-[400px]  lg:mb-auto mt-40 ">
    //     <div
    //       className="card p-4 lg:p-10 flex flex-col items-center"
    //     >
    //       <div className="relative -mt-[7.5rem] ">
    //         <Image
    //           src={portrait}
    //           width={160}
    //           height={160}
    //           alt="selfportrait"
    //           className="rounded-2xl pointer-events-none select-none"
    //         />
    //       </div>
    //       <h1 className="text-[#3D3E41] font-extrabold text-2xl pt-4">
    //         Szita Tamás
    //       </h1>
    //       <p className="text-[#A1A1A1] pt-1">Webfejlesztő</p>

    //       <div className="flex flex-row gap-2 pb-10 pt-3">
    //         <Link href="https://github.com/Medivessing" passHref legacyBehavior>
    //           <a
    //             target="_blank"
    //             className="bg-[#EAEAEA] p-1 rounded hover:bg-[#B5C18E] "
    //           >
    //             <FaGithub size={23} color="#3D3E41" />
    //           </a>
    //         </Link>

    //         <Link href="https://tamasszita.com" passHref legacyBehavior>
    //           <a
    //             target="_blank"
    //             className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]"
    //           >
    //             <TbWorldWww size={23} color="#3D3E41" />
    //           </a>
    //         </Link>

    //         <Link
    //           href="https://www.linkedin.com/in/tamasszita/"
    //           passHref
    //           legacyBehavior
    //         >
    //           <a
    //             target="_blank"
    //             className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]"
    //           >
    //             <FaLinkedin size={23} color="#3D3E41" />
    //           </a>
    //         </Link>
    //       </div>

    //       <div className="card  rounded-2xl flex flex-col w-[300px] gap-5 p-4 justify-between ">
    //         <div className="flex flex-row gap-4 items-center">
    //           <div className="bg-[#f5f5f5] shadow-md p-1 rounded">
    //             <IoMail size={28} color="#3D3E41" />
    //           </div>
    //           <div className="flex flex-col">
    //             <p className="text-xs  text-[#3D3E41]">Email</p>
    //             <p className=" text-[#3D3E41]">szita999@gmail.com</p>
    //           </div>
    //         </div>

    //         <hr className="h-[2px] bg-[#A1A1A1]" />

    //         <div className="flex flex-row gap-4 items-center">
    //           <div className="bg-[#f5f5f5] shadow-md p-1 rounded">
    //             <IoLocation size={28} color="#3D3E41" />
    //           </div>
    //           <div className="flex flex-col">
    //             <p className="text-xs text-[#3D3E41]">Location</p>
    //             <p className=" text-[#3D3E41]">Remote / Balatonfüred</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="pt-10">
    //         <button
    //           onClick={handleDownload}
    //           className="bg-gradient-to-r from-[#6C7D47] to-[#A3B678] py-1 px-6 rounded-2xl text-lg text-[#f5f5f5] hover:text-[#3D3E41]"
    //         >
    //           Önéletrajz letöltése
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-col lg:mt-16 ">
    //     <div className="card rounded-2xl mx-auto lg:mx-0 lg:ml-auto p-5  mb-5">
    //       <div className="card-content items-center flex flex-row justify-between gap-5">
    //         <button
    //           onClick={() => setActiveButton("Home")}
    //           className={`${
    //             activeButton === "Home"
    //               ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
    //               : ""
    //           } card flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
    //         >
    //           <div className="">
    //             <FaHome
    //               size={30}
    //               color={`${activeButton === "Home" ? "f5f5f5" : "3D3E41"}`}
    //             />
    //           </div>
    //           <p
    //             className={`${
    //               activeButton === "Home" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
    //             } text-xs md:text-base`}
    //           >
    //             Home
    //           </p>
    //         </button>
    //         <button
    //           onClick={() => setActiveButton("CV")}
    //           className={`${
    //             activeButton === "CV"
    //               ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
    //               : ""
    //           } card flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
    //         >
    //           <div>
    //             <IoNewspaper
    //               size={30}
    //               color={`${activeButton === "CV" ? "f5f5f5" : "3D3E41"}`}
    //             />
    //           </div>
    //           <p
    //             className={`${
    //               activeButton === "CV" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
    //             } text-xs md:text-base`}
    //           >
    //             CV
    //           </p>
    //         </button>
    //         <button
    //           onClick={() => setActiveButton("Works")}
    //           className={`${
    //             activeButton === "Works"
    //               ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
    //               : ""
    //           } card flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
    //         >
    //           <div className="">
    //             <IoCube
    //               size={30}
    //               color={`${activeButton === "Works" ? "f5f5f5" : "3D3E41"}`}
    //             />
    //           </div>
    //           <p
    //             className={`${
    //               activeButton === "Works" ? "text-[#f5f5f5]" : "text-[#3D3E41]"
    //             } text-xs md:text-base`}
    //           >
    //             Munkáim
    //           </p>
    //         </button>
    //         <button
    //           onClick={() => setActiveButton("Contact")}
    //           className={`${
    //             activeButton === "Contact"
    //               ? "bg-gradient-to-l from-[#6C7D47] to-[#A3B678]"
    //               : ""
    //           } card flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
    //         >
    //           <div className="">
    //             <RiMessage2Fill
    //               size={30}
    //               color={`${activeButton === "Contact" ? "f5f5f5" : "3D3E41"}`}
    //             />
    //           </div>
    //           <p
    //             className={`${
    //               activeButton === "Contact"
    //                 ? "text-[#f5f5f5]"
    //                 : "text-[#3D3E41]"
    //             } text-xs md:text-base`}
    //           >
    //             Kapcsolat
    //           </p>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="card ">
    //       <div className="card-content">
    //         <div className=" rounded-2xl mx-auto max-w-[350px] md:max-w-[500px] lg:max-w-[700px]  p-5 lg:p-10 flex flex-col  ">
    //           {activeButton === "Home" && <About />}
    //           {activeButton === "CV" && <CV />}
    //           {activeButton === "Works" && <Works />}
    //           {activeButton === "Contact" && <Contact />}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col lg:flex-row items-center lg:p-8 lg:pt-0 justify-center gap-6 lg:gap-24 scrollbar-hide mt-32">
      <div className="container">
        <div className="card" onMouseMove={handleMouseMove}>
          <div className="content p-4 lg:p-10 flex flex-col items-center">
            <div className="">
              <Image
                src={portrait}
                width={160}
                height={160}
                alt="selfportrait"
                className="rounded-2xl pointer-events-none select-none"
              />
            </div>
            <h1 className=" font-extrabold text-2xl pt-4">Szita Tamás</h1>
            <p className="text-[#A1A1A1] pt-1">Webfejlesztő</p>

            <div className="flex flex-row gap-2 pb-10 pt-3">
              <Link
                href="https://github.com/Medivessing"
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  className="bg-[#EAEAEA] p-1 rounded hover:bg-gradient-to-b hover:from-[#4dff88] hover:to-[#0088ff] "
                >
                  <FaGithub size={23} color="#3D3E41" />
                </a>
              </Link>

              <Link href="https://tamasszita.com" passHref legacyBehavior>
                <a
                  target="_blank"
                  className="bg-[#EAEAEA]  p-1 rounded hover:bg-gradient-to-b hover:from-[#4dff88] hover:to-[#0088ff]"
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
                  className="bg-[#EAEAEA]  p-1 rounded hover:bg-gradient-to-b hover:from-[#4dff88] hover:to-[#0088ff]"
                >
                  <FaLinkedin size={23} color="#3D3E41" />
                </a>
              </Link>
            </div>

            <div className="card-2 border-[#A1A1A1] border-[1px] rounded-2xl flex flex-col w-[300px] gap-5 p-4 justify-between group ">
              <div className="flex flex-row gap-4 items-center  ">
                <div className="content shadow-md p-1 rounded group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                  <IoMail size={28} className=" text-[#3D3E41]" />
                </div>
                <div className="content flex flex-col">
                  <p className="text-xs  text-[#A1A1A1] group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                    Email
                  </p>
                  <p className=" text-[#A1A1A1] group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                    szita999@gmail.com
                  </p>
                </div>
              </div>

              <hr className="h-[2px] bg-[#A1A1A1]" />

              <div className="content flex flex-row gap-4 items-center ">
                <div className=" shadow-md p-1 rounded group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                  <IoLocation size={28} color="#3D3E41" />
                </div>
                <div className="content flex flex-col   ">
                  <p className="text-xs text-[#A1A1A1] group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                    Location
                  </p>
                  <p className=" text-[#A1A1A1] group-hover:bg-gradient-to-l group-hover:from-[#4dff88] group-hover:to-[#0088ff] group-hover:bg-clip-text group-hover:text-transparent">
                    Remote / Balatonfüred
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button
                onClick={handleDownload}
                className="hover:bg-gradient-to-l hover:from-[#4dff88] hover:to-[#0088ff] hover:bg-clip-text hover:text-transparent py-1 px-6 rounded-2xl text-lg border-[#A1A1A1] border-[1px] text-[#A1A1A1]"
              >
                Önéletrajz letöltése
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col lg:mt-16 ">
          <div className="card-3 rounded-2xl mx-auto lg:mx-0 lg:ml-auto p-5  mb-5" onMouseMove={handleMouseMove}>
            <div className=" content items-center flex flex-row justify-between gap-5">
              <button
                onClick={() => setActiveButton("Home")}
                className={`${
                  activeButton === "Home"
                    ? "bg-gradient-to-l from-[#4dff88] to-[#0088ff]"
                    : ""
                }  flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#00aaff]  `}
              >
                <div className="">
                  <FaHome
                    size={30}
                    color={`${activeButton === "Home" ? "f5f5f5" : "3D3E41"}`}
                  />
                </div>
                <p
                  className={`${
                    activeButton === "Home"
                      ? "text-[#f5f5f5]"
                      : "text-[#3D3E41]"
                  } text-xs md:text-base`}
                >
                  Home
                </p>
              </button>
              <button
                onClick={() => setActiveButton("CV")}
                className={`${
                  activeButton === "CV"
                    ? "bg-gradient-to-l from-[#4dff88] to-[#0088ff]"
                    : ""
                }  flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
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
                    ? "bg-gradient-to-l from-[#4dff88] to-[#0088ff]"
                    : ""
                }  flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
              >
                <div className="">
                  <IoCube
                    size={30}
                    color={`${activeButton === "Works" ? "f5f5f5" : "3D3E41"}`}
                  />
                </div>
                <p
                  className={`${
                    activeButton === "Works"
                      ? "text-[#f5f5f5]"
                      : "text-[#3D3E41]"
                  } text-xs md:text-base`}
                >
                  Munkáim
                </p>
              </button>
              <button
                onClick={() => setActiveButton("Contact")}
                className={`${
                  activeButton === "Contact"
                    ? "bg-gradient-to-l from-[#4dff88] to-[#0088ff]"
                    : ""
                }  flex flex-col rounded-2xl p-3 items-center w-[60px] md:w-[75px] h-[60px] md:h-[75px] hover:bg-[#B5C18E]  `}
              >
                <div className="">
                  <RiMessage2Fill
                    size={30}
                    color={`${
                      activeButton === "Contact" ? "f5f5f5" : "3D3E41"
                    }`}
                  />
                </div>
                <p
                  className={`${
                    activeButton === "Contact"
                      ? "text-[#f5f5f5]"
                      : "text-[#3D3E41]"
                  } text-xs md:text-base`}
                >
                  Kapcsolat
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version_2;
