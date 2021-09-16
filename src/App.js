import React, { useState } from "react";
import "./styles.css";
import { songs } from "./song_list.js";

export default function App() {
  var [singer, set_singer] = useState("Arijit");
  function onClickHandler(singer) {
    set_singer(singer);
  }
  return (
    <div className="App">
      <h1>🎧 Song Reccomendation</h1>
      <h4>CheckOut My Favoriate Singer and their Song</h4>
      <hr />
      <button onClick={() => onClickHandler("Mohit")}>Mohit Chauhan</button>
      <button onClick={() => onClickHandler("Arijit")}>Arijit</button>
      <button onClick={() => onClickHandler("Udit")}>Udit Narayan</button>
      <div className="song-listing">
        {songs[singer].map((c) => {
          return (
            <div className="song-unit" key={c}>
              <p className="song">{c[0]}</p>
              <p className="rating">Ratings - {c[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
