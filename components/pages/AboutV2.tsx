import Image from "next/image";
import React, { useCallback } from "react";
import { IoLocation, IoMail } from "react-icons/io5";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import portrait from "@/public/me.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutV2 = () => {

    const handleDownload = useCallback(() => {
        const link = document.createElement("a");
        link.href = "/Szita_Tamas_CV.pdf";
        link.download = "Szita_Tamas_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, []);
  return (
    <>
      <div className="self-portrait ">
        <Image
          src={portrait}
          width={160}
          height={160}
          alt="selfportrait"
          className="rounded-2xl pointer-events-none select-none"
        />
      </div>
      <h1 className=" font-extrabold text-2xl pt-4 mt-[170px]">Szita Tamás</h1>
      <p className=" pt-1">Webfejlesztő</p>

      <div className="icons flex flex-row gap-2 pb-10 pt-3">
        <Link href="https://github.com/Medivessing" passHref legacyBehavior>
          <a target="_blank" className="shadow-md p-1 rounded">
            <FaGithub size={23} color="#ffffff" />
          </a>
        </Link>

        <Link href="https://tamasszita.com" passHref legacyBehavior>
          <a target="_blank" className="shadow-md  p-1 rounded ]">
            <TbWorldWww size={23} color="#ffffff" />
          </a>
        </Link>

        <Link
          href="https://www.linkedin.com/in/tamasszita/"
          passHref
          legacyBehavior
        >
          <a target="_blank" className="shadow-md p-1 rounded ">
            <FaLinkedin size={23} color="#ffffff" />
          </a>
        </Link>
      </div>

      <div className="w-[275px] shadow-md rounded-2xl flex flex-col gap-5 p-4 justify-between ">
        <div className="flex flex-row gap-4 items-center">
          <div className=" p-1 rounded">
            <IoMail size={28} color="#ffffffbf" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs  text-[#ffffff99]">Email</p>
            <p className="text-[#ffffffbf] ">szita999@gmail.com</p>
          </div>
        </div>

        <hr className="h-[1px] bg-[#ffffffbf]" />

        <div className="flex flex-row gap-4 items-center">
          <div className=" p-1 rounded">
            <IoLocation size={28} color="#ffffffbf" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#ffffff99]">Location</p>
            <p className="text-[#ffffffbf] ">Remote / Balatonfüred</p>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <button
          onClick={handleDownload}
          className="shadow-xl py-1 px-6 rounded-2xl text-lg text-[#ffffffbf] "
        >
          Önéletrajz letöltése
        </button>
      </div>
    </>
  );
};

export default AboutV2;
