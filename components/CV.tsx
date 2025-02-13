import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";

const CV = () => {
  return (
    <div className="no-scrollbar scrollbar-hide">
      <div className="flex flex-row items-center gap-5 ">
        <p className="text-4xl text-[#3D3E41] font-semibold">Önéletrajz</p>
        <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />
      </div>

      <div className="items-center text-center ">
        <p className="text-2xl text-[#3D3E41] pb-3 font-semibold ">
          Tapasztalat
        </p>
        <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58] " />

        <div className="flex flex-col text-left pt-3">
          <div className="flex flex-row justify-between text-[#3D3E41]">
            <h1 className="font-semibold text-lg">Freelance webfejlesztő</h1>
            <p className="font-semibold">2025 január –</p>
          </div>
          <div className="flex flex-row justify-between pt-1 ">
            <p className="text-base">Weboldalak tervezése és készítése</p>
            <p>Balatonfüred, Magyarország</p>
          </div>
          <p className="pt-3 text-[#A1A1A1] text-justify">
            Szabadidőmben egyetem mellett egyéni vállalkozóként egyedi késeket
            és asztalos termékeket tervezek, készítek és értékesítek online.
          </p>
          <Link href=" https://tamasszita.com" passHref legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://tamasszita.com</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col text-left pt-3">
          <div className="flex flex-row justify-between text-[#3D3E41]">
            <h1 className="font-semibold text-lg">Egyéni vállalkozó</h1>
            <p className="font-semibold">2023 november –</p>
          </div>
          <div className="flex flex-row justify-between pt-1 ">
            <p className="text-base">Kés és asztalos termékek készítése</p>
            <p>Balatonfüred, Magyarország</p>
          </div>
          <p className="pt-3 text-[#A1A1A1] text-justify">
            Szabadidőmben egyetem mellett egyéni vállalkozóként egyedi késeket
            és asztalos termékeket tervezek, készítek és értékesítek online.
          </p>
          <Link href=" https://szitacustoms.com" passHref legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://szitacustoms.com</p>
            </a>
          </Link>
        </div>

        <div className="flex flex-col text-left pt-3">
          <div className="flex flex-row justify-between text-[#3D3E41]">
            <h1 className="font-semibold text-lg">
              Det Lille Store Rengøringsfirma A/S
            </h1>
            <p className="font-semibold">2022 március – 2023 szeptember</p>
          </div>
          <div className="flex flex-row justify-between pt-1 ">
            <p className="text-base">Takarító</p>
            <p>Aalborg, Dánia</p>
          </div>
          <p className="pt-3 text-[#A1A1A1] text-justify">
            Feladataim nagy részét irodák, lépcsőházak, illetve szórakozó helyek
            tisztán tartása tette ki. Alkalmanként magánlakások és gyárak
            idényszerű takarítását is végeztem.
          </p>
          <Link href=" https://littlebigcleaning.dk/" passHref legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://littlebigcleaning.dk/</p>
            </a>
          </Link>
        </div>

        <div className="flex flex-col text-left pt-3">
          <div className="flex flex-row justify-between text-[#3D3E41]">
            <h1 className="font-semibold text-lg">DigiShares A/S</h1>
            <p className="font-semibold">2023 január - 2023 február</p>
          </div>
          <div className="flex flex-row justify-between pt-1 ">
            <p className="text-base">Full Stack fejlesztő gyakornok</p>
            <p>Aalborg, Dánia</p>
          </div>
          <p className="pt-3 text-[#A1A1A1] text-justify">
            Eltöltött egy hónapom alatt betekintést nyerhettem egy külföldi IT
            cég működésébe és megismerkedtem közelebbről egy nagyszabású
            JavaScript alapú projekttel. Főbb feladataim bugok javítása és új
            funkciók implementálása volt a cég számára.
          </p>
          <Link href=" https://digishares.io/" passHref legacyBehavior>
            <a
              target="_blank"
              className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300"
            >
              <IoIosLink />
              <p className="">https://digishares.io/</p>
            </a>
          </Link>
        </div>

        <div className="flex flex-col text-left pt-3">
          <div className="flex flex-row justify-between text-[#3D3E41]">
            <h1 className="font-semibold text-lg">
              Gro-Vi-Bau Kft. / Grósz pincészet Kft.
            </h1>
            <p className="font-semibold">2017 június – 2022 március</p>
          </div>
          <div className="flex flex-row justify-between pt-1 ">
            <p className="text-base">Építőipari munkatárs</p>
            <p>Csopak, Magyarország</p>
          </div>
          <p className="pt-3 text-[#A1A1A1] text-justify">
            Nyári munkaként indult elsősorban, majd a koronavírus járvány miatt
            különböző kisebb és nagyobb volumenű projektek részese lettem. Főbb
            feladataim kezdetben kisebb munkák önálló elvégzése volt, a
            későbbiekben pedig munkám nagy részét az anyagok beszerzése és
            szállítása, valamint az ad-hoc jellegű problémák megoldása
            jelentette.
          </p>
        </div>

        <div className="items-center text-center ">
          <p className="text-2xl text-[#3D3E41] py-3 font-semibold ">
            Tanulmányok
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58] " />
          <div className="flex flex-col text-left pt-3">
            <div className="flex flex-row justify-between text-[#3D3E41]">
              <h1 className="font-semibold text-lg">
                Széchenyi István Egyetem
              </h1>
              <p className="font-semibold">2019 szeptember - 2025 január</p>
            </div>
            <div className="flex flex-row justify-between pt-1 ">
              <p className="text-base">Mérnökinformatikus Bsc</p>
              <p>Győr, Magyarország</p>
            </div>
            <p className="pt-3 text-[#A1A1A1] text-justify">
              Informatikai tanulmányaimat félidőben passzíváltattam és Dániába
              költöztem, majd haza jövetelem után 4,73 átlaggal végeztem.
            </p>
          </div>
          <div className="flex flex-col text-left pt-3">
            <div className="flex flex-row justify-between text-[#3D3E41]">
              <h1 className="font-semibold text-lg">
                OKTÁV Továbbképző Központ Zrt.
              </h1>
              <p className="font-semibold">2020 szeptember - 2022 február</p>
            </div>
            <div className="flex flex-row justify-between pt-1 ">
              <p className="text-base">Asztalos OKJ Szakvizsga</p>
              <p>Győr, Magyarország</p>
            </div>
            <p className="pt-3 text-[#A1A1A1] text-justify">
              Egyetemi tanulmányaim mellett asztalos szakképzést is elvégeztem,
              amivel azóta is foglalkozom hobbi szinten.
            </p>
          </div>
        </div>

        <div className="items-center text-center ">
          <p className="text-2xl text-[#3D3E41] py-3 font-semibold ">
            Készségek
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58] " />
          <div className="flex flex-row justify-between pt-3">
            <div className="flex flex-col text-left gap-2">
              <div className="flex flex-col text-[#3D3E41]">
                <h1 className="font-semibold text-lg">Programozási nyelvek</h1>
                <p className="pt-1 text-[#A1A1A1] text-justify">
                  TypeScript, JavaScript, HTML, CSS
                </p>
              </div>
              <div className="flex flex-col text-[#3D3E41]">
                <h1 className="font-semibold text-lg">Adatbázis</h1>
                <p className="pt-1 text-[#A1A1A1] text-justify">
                  SQL, Prisma ORM
                </p>
              </div>
            </div>
            <div className="flex flex-col text-left gap-2">
              <div className="flex flex-col text-[#3D3E41]">
                <h1 className="font-semibold text-lg">
                  Keretrendszerek és könyvtárak
                </h1>
                <p className="pt-1 text-[#A1A1A1] text-justify">
                  React, Next.JS, Node.JS
                </p>
              </div>
              <div className="flex flex-col text-[#3D3E41]">
                <h1 className="font-semibold text-lg">Nyelv ismeret</h1>
                <p className="pt-1 text-[#A1A1A1] text-justify">
                  Magyar, Angol, Német
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CV;
