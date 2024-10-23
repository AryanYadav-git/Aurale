import { Song } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import React from "react";
import AddToPlaylistButton from "./add-to-playlist-button";

const SongStrip = ({ index, song }: { index: number; song: Song }) => {
  const {id, title, listeners, duration } = song;
  return (
    <div className="w-full p-4 items-center grid grid-cols-12 gap-2 rounded-lg hover:bg-[#2a2a2a]">
      <div className="flex gap-4 col-span-6 lg:col-span-8 justify-start">
        <div className="">{index+1}</div>
        <div className="">{title}</div>
      </div>
      <div className="col-span-3 lg:col-span-2">{listeners.toLocaleString()}</div>
      <div className="col-span-2 lg:col-span-1">{duration}</div>
      <div className="col-span-1 lg:col-span-1 flex items-center ">
        <AddToPlaylistButton songId={id} />
      </div>
    </div>
  );
};

export default SongStrip;
