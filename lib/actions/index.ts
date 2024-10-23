'use server'

import { prisma } from "../prisma"

export const getArtist = async (artistId: string) => {
  try{
    const artist = await prisma.artist.findUnique({
      where: { id: artistId },
    });
    if(!artist){
      return {message: "Artist not found"}
    }
    return artist;
  }catch(err){
    console.log(err);
  }
}

export const getTopSong = async (artistId: any) => {
  const topSong = await prisma.song.findMany({
    where: { artistId : {
      has: artistId
    } },
    orderBy: { listeners: 'desc' },
    take: 5,
  });
  return topSong;
}


export const getUserById = async (userId: any) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })
}

export const addToPlaylist = async (userId: any, songId: string) => {
  await prisma.user.update({
    data: {likedSongs: {
      push: songId
    }},
    where: {
      id: userId
    },
  });
  console.log("done");
}

export const checkIfAdded = async (userId: any, songId: string) => {
  const res = await prisma.user.findFirst(
    {
      where: {
        id: userId,
        likedSongs: {
          has: songId
        },
      }
    }
  )
  return res;
}