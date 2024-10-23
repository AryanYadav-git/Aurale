'use client'
import { Button } from "@/components/ui/button";
import { artist, song, user } from "@/constants";
import { createArtist, createSong, createUser } from "@/lib/actions/seed";

const Home = async () => {
  const user = "";
  return(
    <div className="h-full  ">
      <Button variant='outline' onClick={() => createUser(user)}>hello</Button>
    </div>
  )
}

export default Home;
