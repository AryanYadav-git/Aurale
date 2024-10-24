'use client'
import { Button } from "@/components/ui/button";
import { artist, song, user } from "@/constants";
import { createArtist, createSong, createUser } from "@/lib/actions/seed";
import { useUser } from "@clerk/nextjs";

const Home =  () => {
  const {user} = useUser();
  return(
    <div className="h-full  ">
      <Button variant='outline' onClick={() => createUser(user)}>hello</Button>
      <div className="">{user?.id}</div>
    </div>
  )
}

export default Home;
