import { IconBell, IconSearch, IconUser } from "@tabler/icons-react";
import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="h-16 px-4 w-full pb-1 flex items-center justify-between">
      <Link href="/" className="logo text-emerald-100 font-extrabold text-xl">
        Aurale
      </Link>
      <div className=" items-center gap-2 h-full hidden md:flex">
        <Link href="/" className="p-3 rounded-full h-full bg-dark-400 w-fit ">
          <GoHomeFill className="w-full h-full " />
        </Link>
        <Link
          href="/search"
          className="p-3 rounded-full h-full bg-dark-400 w-fit flex gap-4"
        >
          <IconSearch />
          <input
            type="text"
            className="border-none bg-inherit outline-none min-w-96 px-1 font-mono"
            placeholder="What on your mood lately!"
          />
        </Link>
        <Link href="/content-feed" className="p-3 rounded-full h-full bg-dark-400 w-fit">
          <IconBell />
        </Link>
      </div>
      <div className="p-3 rounded-full h-full bg-dark-400 w-fit ">
        <UserRound className="w-full h-full " />
        
      </div>
    </div>
  );
};

export default Navbar;