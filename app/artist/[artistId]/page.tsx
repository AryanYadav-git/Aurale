'use client'
import Image from "next/image";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { Button, DropdownMenuDemo } from "@/components/common";
import { getArtist, getTopSong } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Artist, Song } from "@prisma/client";
import PopularSongs from "@/components/common/popular-songs";

const ArtistPage = ({ params: { artistId } }: SearchParamProps) => {
  const [artist, setArtist]  = useState<Artist>();
  const [song, setSong] = useState<Song[]>();

  const handleArtist = async () => {
    const res = await getArtist(artistId);
    setArtist(res as Artist);
    const song = await getTopSong(artistId);
    setSong(song as Song[]);
  }

  useEffect(()=> {
    handleArtist();
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col h-full w-full ">
        {artist && <Image src={artist.coverArt} height={100} width={1000} alt="krsna1" className="h-auto w-full bg-auto absolute" />}
        <div className="z-10 ">
          {artist && <div className="h-72 flex flex-col justify-end p-6 gap-2">
            {artist.verified ? (<p className="font-semibold flex gap-2">
              <IconRosetteDiscountCheckFilled className="text-blue-500"/> Verified Artist
              </p>): <span></span>}
            <h1 className="text-8xl font-black font-sans uppercase">{artist.stageName}</h1>
            <p className="px-1">{artist.followers.toLocaleString()} monthly listeners</p>
          </div>}
          <div className="bg-dark-300 backdrop-blur-sm h-fit w-full p-8 py-6">
            <div className=" mb-4 flex gap-8 items-center">
              <Button/>
              <button className="p-1 px-4 border rounded-full h-fit text-sm">
                Follow
              </button>
            </div>
            <PopularSongs songs={song as Song[]}/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ArtistPage;
