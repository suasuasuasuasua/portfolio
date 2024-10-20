import { Spotify } from "react-spotify-embed";

export default function Home() {
  return (
    <div className="flex flex-col mx-10">
      {/* Leading Title */}
      <h1 className="font-bold">Welcome to my website!</h1>

      {/* Current */}
      <div className="flex flex-row my-10">
        {/* Current Listen */}
        <div className="flex flex-col">
          <p className="font-semibold">Current Listen</p>
          <Spotify link="https://open.spotify.com/album/4eguh1dJUXRh0IMiLKRwab" />
        </div>
        {/* TODO: Current Book */}
      </div>
    </div>
  );
}
