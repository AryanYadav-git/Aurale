import { Song } from '@prisma/client'
import SongStrip from './songstrip'


const PopularSongs = ({songs}: {songs:Song[]}) => {
  return (
    <div className='grid grid-cols-1 gap-1'>
      <h2 className='font-bold text-xl'>Popular Songs</h2>
      {songs?.map((song, index)=> (
        <SongStrip key={index} index={index} song={song}/>
      ))}
    </div>
  )
}

export default PopularSongs