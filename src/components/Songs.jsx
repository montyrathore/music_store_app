import { Song } from "../components/Song";
export const Songs = ({ fn,allSongs }) => {
  return (
    <>
      {allSongs.map((currentSong,index) => (
        <Song fn={fn} key={index} song={currentSong} />
      ))}
    </>
  );
};
