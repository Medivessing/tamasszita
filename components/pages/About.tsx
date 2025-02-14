import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <p className="text-4xl text-[#3D3E41] font-semibold">Rólam</p>
        <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />
      </div>
      <div className="text-[#A1A1A1] text-justify">
        <p className="pb-3 pt-3">
          Frissen végzett mérnökinformatikus vagyok, erős érdeklődéssel a
          web-fejlesztés iránt.
        </p>
        <p className="pb-3">
          Egyetemi éveimet megszakítva dolgoztam külföldön, illetve itthoni
          cégeknek IT szektoron kívül.
        </p>
        <p className="pb-3">
          Egy ideje hobbimat egyéni vállalkozásként viszem és egyedi késeket,
          valamint asztalos termékeket árulok.
        </p>
        <p className="pb-3">
          Szabadidőmben aktívan sportolok, leginkább a természetben szeretek
          időt tölteni. Szenvedélyem a hegymászás, sziklamászás és a terepfutás.
        </p>
      </div>

      <div className="flex flex-col pt-8">
        <p className="text-3xl text-[#3D3E41] ">Mivel foglalkozom?</p>
        <div className="flex flex-row gap-3 pt-4 items-center">
          <div className="">
            <FiMonitor color="6C7D47" size={45} />
          </div>
          <p className="text-[#A1A1A1] text-justify">
            Frontend fókuszú webfejlesztő vagyok, aki szeret letisztult és
            hatékony weboldalakat építeni. A teljes fejlesztési folyamatban
            részt veszek a tervezéstől a kódolásig, és olyan technológiákkal
            dolgozom, mint React, TypeScript, Next.js és Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-row gap-3 py-4 items-center ">
          <div className="">
            <BsCameraVideo color="6C7D47" size={45} />
          </div>
          <p className="text-[#A1A1A1] text-justify">
            Hobbi projektjeim során elsajátítottam a Photoshop, és Premiere Pro
            használatát, amelyeket folyamatosan alkalmazok. Ezeket a készségeket
            rendszeresen hasznosítom videós tartalmak szerkesztésére a
            YouTube-csatornámon. Egyetemen szerzett AutoCAD ismereteimet kések
            és asztalos termékek terveinek megrajzolására használom.
          </p>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />
      </div>
    </>
  );
};

export default About;
