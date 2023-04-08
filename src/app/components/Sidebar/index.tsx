import React from "react";
import {
  CreateIcon,
  HomeIcon,
  LibaryIcon,
  LikedIcon,
  LogoIcon,
  SearchIcon,
} from "~/app/assests/img";
import Button from "../Button";

function Sidebar() {
  return (
    <div className="w-[241px] bg-black pt-6 px-2 overflow-auto sticky top-0 h-screen">
      <div className="px-4 mb-[18px] pb-2">
        <LogoIcon />
      </div>
      <Button leftIcon={<HomeIcon className="group-hover:text-white duration-300" />}>Home</Button>
      <Button leftIcon={<SearchIcon className="group-hover:text-white duration-300" />}>
        Search
      </Button>
      <Button leftIcon={<LibaryIcon className="group-hover:text-white duration-300" />}>
        Your Library
      </Button>
      <div className="py-3"></div>
      <Button
        boxIcon={<CreateIcon />}
        boxIconClass="group-hover:bg-white transition-all duration-300"
      >
        Create Playlist
      </Button>
      <Button
        boxIcon={<LikedIcon className="group-hover:text-white duration-300" />}
        boxIconClass="bg-gradient-to-br from-purple to-greena group-hover:bg-white transition-all duration-300"
        overlay={true}
      >
        Liked Songs
      </Button>
      <div className="w-full h-[1px] px-4 mt-2">
        <div className="w-full h-[1px] bg-[#282828]"></div>
      </div>
      <button className="w-full text-left px-4 font-normal text-white text-sm font-circular-sp pt-[14px]">
        music for study
      </button>
    </div>
  );
}

export default Sidebar;
