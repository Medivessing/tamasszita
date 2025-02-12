import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import portrait from "@/public/me.jpeg";

export default function Home() {
  return (
    <div className="bg-complex-radial min-h-screen flex flex-row items-center p-8 justify-center gap-24">
      <div className="bg-[#F5F5F5] rounded-2xl w-[400px]  p-10 flex flex-col items-center ">
        <div className="relative -mt-[7.5rem] ">
          <Image
            src={portrait}
            width={160}
            height={160}
            alt="selfportrait"
            className="rounded-2xl"
          />
        </div>
        <h1 className="text-[#3D3E41] font-extrabold text-2xl pt-4">
          Szita Tamás
        </h1>
        <p className="text-[#A1A1A1] pt-1">Webfejlesztő</p>

        <div className="flex flex-row gap-2 pb-10 pt-3">
          <Link href="https://github.com/Medivessing" passHref legacyBehavior>
            <a target="_blank" className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E] ">
              <FaGithub size={23} color="#3D3E41" />
            </a>
          </Link>

          <Link href="https://tamasszita.com" passHref legacyBehavior>
            <a target="_blank" className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]">
              <TbWorldWww size={23} color="#3D3E41" />
            </a>
          </Link>

          <Link
            href="https://www.linkedin.com/in/tamasszita/"
            passHref
            legacyBehavior
          >
            <a target="_blank" className="bg-[#EAEAEA]  p-1 rounded hover:bg-[#B5C18E]">
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

          <hr className="h-[2px] bg-[#A1A1A1]"/>

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
          <button className="bg-gradient-to-r from-[#6C7D47] to-[#A3B678] py-1 px-6 rounded-2xl text-lg text-[#f5f5f5] hover:text-[#3D3E41]">
            Önéletrajz letöltése
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-[#F5F5F5] rounded-2xl w-[420px] h-[120px] ml-auto p-6">
          navbar
        </div>
        <div className="bg-[#F5F5F5] rounded-2xl w-[700px] h-[600px] p-6">
          text
        </div>
      </div>
    </div>
  );
}
