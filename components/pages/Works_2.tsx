import React from "react";
import logo from "@/public/new_v1_white.png";
import masterregisterlogo from "@/public/masterregister.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

const Works = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <p className="text-4xl text-[#ffffff90] font-semibold">Munkáim</p>
        <div className="h-[2px] w-full bg-[#ffffff40]" />
      </div>

      <div className="flex flex-col pt-3 ">
        <p className="text-3xl text-[#ededed]">Szita Customs</p>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5 pt-3 items-center">
            <Image
              src={logo}
              width={80}
              height={80}
              alt="Logo for szitacustoms"
              className=""
            />
            <p className="text-[#A1A1A1] text-justify">
              A saját vállalkozásom számára készített weboldal elsősorban a
              termékek bemutatását és rendelését szolgálja. A projekt folyamatos
              fejlesztés alatt áll, a végső cél pedig egy teljes értékű webshop
              létrehozása online tranzakciókkal és automatikus rendeléssel
              feldolgozással. A fejlesztéshez TypeScriptet, Reactet és Next.js-t
              használom.
            </p>
          </div>
          <Link href=" https://szitacustoms.com" passHref legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-white transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://szitacustoms.com</p>
            </a>
          </Link>
        </div>
      </div>

      <div className="py-3">
        <div className="h-[2px] w-full bg-[#ffffff40]" />
      </div>

      <div className="flex flex-col">
        <p className="text-3xl text-white ">Master register</p>
        <div className="flex flex-col">
          <div className="flex flex-col  gap-5 pt-3 items-center">
            <Image
              src={masterregisterlogo}
              width={80}
              height={80}
              alt="Logo for szitacustoms"
              className=""
            />
            <p className="text-[#A1A1A1] text-justify">
              A szakdolgozatom erről a munkaszervező alkalmazás fejlesztéséről
              szól, amelyet egy takarítócég számára terveztem. Jogosultságok és
              felhasználók kezeléséért felel. Az alkalmazás lehetővé teszi a
              beosztások könnyű elkészítését, üzenetek és automatikus
              értesítések küldését, valamint támogatja a leltározást.
              Mindemellett az adatbázisban tárolt adatok alapján statisztikat
              mutat ki a vezetők számára.
            </p>
          </div>
          <p className="text-[#A1A1A1] text-justify">
            React és Next.js segítségével készítettem, az egész TypeScript
            alapú. Az adatbázis PostgreSQL biztosítja, amit a könnyebb kezelés
            érdekében Prisma ORM-el használtam.
          </p>
          <Link
            href="https://www.themasterregister.com/"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-white transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://www.themasterregister.com/</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col pt-4"></div>
        <div className="h-[2px] w-full bg-[#ffffff40]" />
      </div>
    </>
  );
};

export default Works;
