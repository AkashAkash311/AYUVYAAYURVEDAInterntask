"use client"
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownOffAlt } from "react-icons/md";

import Star from "../../Components/Star";
import { useState } from "react";

export default function Home() {
  const [Color, SetColor] = useState(false)
  return (
    <main className="flex min-h-screen flex-col  items-center p-24 gap-3">
      <h1 className="text-[40px] font-semibold">Leave Review</h1>
      <div>
        <h3 className=" font-semibold text-[30px]">Safety</h3>
        <p>lLorem ipsum dolor sit amet, consectetur adipiscing </p>
        <Star />
      </div>
      <div >
        <h3 className="font-semibold text-[30px]">Communication</h3>
        <p>lLorem ipsum dolor sit amet, consectetur adipiscing </p>
        <Star />
      </div>

      <div >
        <h3 className="font-semibold text-[20px] mt-4">What would You recommend trausti ?</h3>
        <p>lLorem ipsum dolor sit amet, consectetur adipiscing </p>
        <div className=" flex justify-around mt-5">
          <span className=" flex ">
            <MdOutlineThumbDownOffAlt 
              size={40}
              color={ Color ? "#ffc107" : "#e4e5e9"}
              onClick={() =>SetColor(true)}
              />
            <p className="mt-3 ml-2">No</p>
          </span>
          <span className=" flex">
            <MdOutlineThumbUp size={40}/>
            <p className=" mt-3 ml-2">Yes</p>
          </span>
        </div>
      </div>
    </main>
  );
}
