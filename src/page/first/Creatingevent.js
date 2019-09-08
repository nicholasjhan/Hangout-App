import React, { useState } from "react";

export default function Creatingevent({ setEvents }) {
  let [name, setName] = useState("");
  let [date, setDate] = useState("");
  let [location, setLocation] = useState("");

  // { id: 1, subject: "anniversary", year: 2019, month: 8, date: 20 }

  //location, time etc are obsolete for now

  function onSubmit(event) {
    event.preventDefault();
    let factor = 0;

    let data = {
      id: new Date().getTime(),
      subject: name,
      year: parseInt(date.split("-")[0], 10),
      month: parseInt(date.split("-")[1], 10),
      date: parseInt(date.split("-")[2], 10)
    };
    setEvents(events => [...events, data]);
  }

  return (
    <div>
      <div> Creating Event </div>
      <div>
        <button>Private</button>
        <button>Shared</button>
        <form onSubmit={onSubmit}>
          <input
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
            placeholder="event name"
          />
          <div />
          <input type="time" placeholder="event time" />
          <div />
          <input
            type="date"
            value={date}
            onChange={ev => setDate(ev.target.value)}
          />
          <div />
          <input
            value={location}
            onChange={event => {
              setEvents(event.target.value);
            }}
            placeholder="location"
          />
          <div />
          <button onClick={() => onSubmit()}>create</button>
        </form>
      </div>
    </div>
  );
}
