import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <p className="text-4xl text-[#3D3E41] font-semibold">Kapcsolat</p>
        <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />
      </div>

      <div className="flex flex-col py-4 ">
        <p className="text-xl text-[#3D3E41] text-justify ">
          Ha kérdésed van, vagy további információra van szükséged, bátran vedd
          fel velem a kapcsolatot emailben, vagy valamelyik social média
          platformon!
        </p>

        <div className="flex flex-col"></div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />

      <div className="flex flex-col gap-3 pb-3 pt-2">
        <p className="text-3xl text-[#3D3E41] ">Milyen projekteket vállalok?</p>
        <p className="text-[#A1A1A1] text-justify">
          Webfejlesztést, egyedi kések és asztalos termékek készítését vállalom.
        </p>
        <p className="text-3xl text-[#3D3E41]">
          Mennyi idő alatt válaszolok az üzenetekre?
        </p>
        <p className="text-[#A1A1A1] text-justify ">
          Az üzenetekre várhatóan 1-2 napon belül válaszolok, amennyiben nem így
          történik valószínűleg nincs megfelelő internet elérésem, de a
          válaszidő ekkor sem fogja meghaladni az egy hetet.
        </p>
        <p className="text-3xl text-[#3D3E41]">Hol található meg a műhelyem?</p>
        <p className="text-[#A1A1A1] text-justify ">
          Személyesen Balatonfüreden vagyok elérhető, de igény esetén, a munka
          jellegétől függően, más helyszínekre is szívesen utazom.
        </p>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />


      <div className="flex flex-col pt-3 ">
        <p className="text-2xl text-[#3D3E41]">Social media és egyéb linkek</p>
        <div className="flex flex-row gap-3 pb-3">
          <Link
            href="https://www.instagram.com/medivessing/"
            passHref
            legacyBehavior
          >
            <a target="_blank" className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300">Instagram</a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tamasszita/"
            passHref
            legacyBehavior
          >
            <a target="_blank" className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300">LinkedIn</a>
          </Link>
          <Link href="https://github.com/Medivessing" passHref legacyBehavior>
            <a target="_blank" className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300">Github</a>
          </Link>
          <Link href="https://www.youtube.com/@szitacustoms" passHref legacyBehavior>
            <a target="_blank" className="flex flex-row items-center gap-1 underline pt-2 text-[#A1A1A1] hover:text-[#3D3E41] transition-transform duration-300">Youtube</a>
          </Link>
        </div>
      <div className="h-[2px] w-full bg-gradient-to-r  from-[#556B2F] to-[#ABDB58]" />

      </div>
    </>
  );
};

export default Contact;
