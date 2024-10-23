"use client";
import { addToPlaylist, checkIfAdded } from "@/lib/actions";
import { CircleCheck, PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const AddToPlaylistButton = ({ songId }: { songId: string }) => {
  const userId = "6717cc920f56e551677f4f19";
  const [clicked, setClicked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleButtonClick = async () => {
    await addToPlaylist(userId, songId);
    setClicked(true);  
    console.log("Added to playlist");
  };

  const check = async () => {
    const res = await checkIfAdded(userId, songId);
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
        <PlusCircle />{isAdded}
      </button>
      )}
    </div>
  );
};

export default AddToPlaylistButton;
