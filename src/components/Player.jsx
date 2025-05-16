export const Player = ({ fn, song }) => {
  return (
    <div>
      <button
        onClick={() => {
          fn(false, null);
        }}
        className="btn btn-success"
      >
        Back to Songs
      </button>
      <p>
        Details
        <br />
        Singer Name:{song?.artistName}
        <br />
        Song Name/category:{song?.trackName}
      </p>
      <br />
      <img src={song.artworkUrl100} alt="" />
      <br />
      <br />
      <audio controls>
        <source src={song?.previewUrl} type="audio/mp4" />
        {/*
          we know initial value is null so we can use if but from new versions os ecma we can use ?>
          ?. is there for checking if it is null then it will not access 
          */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
