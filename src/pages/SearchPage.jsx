import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { useState, useEffect } from "react";
import { Player } from "../components/Player";
export const SearchPage = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);

  const loadSongs = async () => {
    setAllSongs(await getSongs("Latest Songs"));
  };
  useEffect(() => {
    loadSongs();
  }, []);
  const togglePlayer = (flag, songArg) => {
    setPlayerSong(songArg);
    setFlag(flag);
  };
  const getArtistName = async (artistName) => {
    console.log("the artist you searched for is ", artistName);
    setAllSongs(await getSongs(artistName));
  };
  const jsx = (
    <>
      {" "}
      <Search fn={getArtistName} />
      <Songs fn={togglePlayer} allSongs={allSongs} />
    </>
  );
  return (
    <>
      <div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
        {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
      </div>
    </>
  );
};
