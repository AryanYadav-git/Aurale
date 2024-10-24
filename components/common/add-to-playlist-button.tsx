"use client";
import { addToPlaylist, checkIfAdded } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { CircleCheck, PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddToPlaylistButton = ({ songId }: { songId: string }) => {
  const {user} = useUser();
  const [clicked, setClicked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleButtonClick = async () => {
    await addToPlaylist(user?.id, songId);
    setClicked(true);  
    console.log("Added to playlist");
  };

  const check = async () => {
    const res = await checkIfAdded(user?.id, songId);
    res && setIsAdded(true);
  }

  useEffect(() => {
    check();
  }, [clicked])
  

  return (
    <div className="flex items-center">
      {isAdded? (
        <button
        onClick={() => {
          handleButtonClick();
        }}
      >
        <CircleCheck size={20} className="text-emerald-500" />
      </button>
      ): (
        <button
        onClick={() => {
          handleButtonClick();
        }}
      >
        <PlusCircle size={20} />{isAdded}
      </button>
      )}
    </div>
  );
};

export default AddToPlaylistButton;
