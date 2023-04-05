/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { PlayIcon } from "~/app/assests/img";

function Card() {
  return (
    <div className="group p-4 bg-[#181818] mt-5 ml-5 rounded-md cursor-pointer hover:bg-[#282828] transition-all duration-300">
      <div className="relative w-[176px] h-[176px] mb-4">
        <img
          className="rounded-md"
          src="https://i.scdn.co/image/ab67616d00001e02ef57183066d6cac0cabb85c6"
          alt=""
        />
        <button className="flex items-center justify-center w-[48px] h-[48px] bg-greenPrimary absolute bottom-2 right-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <PlayIcon />
        </button>
      </div>
      <h1 className="font-circular-sp text-base text-white font-bold w-44 whitespace-nowrap overflow-hidden text-ellipsis">
        Dreamers [Music from the FIFA World Cup Qatar 2022 Official Soundtrack]
      </h1>
      <div className="text-primary font-circular-sp text-sm font-normal ">
        <a className="hover:underline" href="">
          Jung Kook
        </a>
        <span className="pr-1">,</span>
        <a className="hover:underline" href="">
          BTS
        </a>
      </div>
    </div>
  );
}

export default Card;
