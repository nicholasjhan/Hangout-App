import React from "react";
import "./Profile.scss";

// Settings
export default function Profile({ setDarkmode, setOffline }) {
  return (
    <div>
      <h1>darkmode</h1>
      <button onClick={() => setDarkmode(true)}> on </button>
      <button onClick={() => setDarkmode(false)}> off </button>

      <hr />
      <h1>offline</h1>
      <button onClick={() => setOffline(true)}> online</button>
      <button onClick={() => setOffline(false)}> online</button>
    </div>
  );
}
