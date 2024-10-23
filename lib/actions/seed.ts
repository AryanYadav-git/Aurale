'use server'

import { prisma } from "../prisma"

export const createArtist = async (artist: any) => {
  const {id} = await prisma.artist.create({
    data: artist,
  });
  console.log(`Created artist with id: ${id}`);
}

export const createSong = async (song: any) => {
  const {id} = await prisma.song.create({
    data: song,
  });
  console.log(`Created song with id: ${id}`);
}

export const createUser = async (user: any) => {
  const {id} =  await prisma.user.create({
    data: user,
  })
  console.log(`Created user with id: ${id}`);
;}


