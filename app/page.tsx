"use client";
import Version_1 from "@/components/versions/Version_1";
import Version_2 from "@/components/versions/Version_2";
import { useState } from "react";

export default function Home() {
  const [version, setVersion] = useState("1");

  return (
    <div
      className={` ${
        version === "1"
          ? "bg-complex-radial"
          : version === "2"
          ? "bg-[rgba(20,20,20)]"
          : ""
      } min-h-screen flex flex-col scrollbar-hide overflow-y-auto`}
    >
      <div className="ml-auto pt-5 pr-5">
        <select
          className="p-3 rounded-xl"
          name="version"
          id="version"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        >
          <option value="1" className="">
            Version 1
          </option>
          <option value="2" className="">
            Version 2
          </option>
        </select>
      </div>

      {version === "1" && <Version_1 />}
      {version === "2" && <Version_2 />}
    </div>
  );
}
