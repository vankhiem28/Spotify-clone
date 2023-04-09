import React from "react";
import { NextIcon, PrevIcon } from "~/app/assests/img";
import Button from "~/app/components/Button";

function Header() {
  return (
    <div className="w-full h-[64px] bg-overlay flex items-center justify-between px-8">
      <div className="flex gap-4">
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
          {<PrevIcon className="text-primary"></PrevIcon>}
        </button>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
          {<NextIcon className="text-primary"></NextIcon>}
        </button>
      </div>
      <div className="">
        <button className="text-base text-primary font-bold font-circular-sp pr-8 hover:scale-105 hover:text-white">
          Sign up
        </button>
        <button className="px-8 py-3 rounded-full bg-white text-base text-black font-bold font-circular-sp hover:scale-105">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Header;
