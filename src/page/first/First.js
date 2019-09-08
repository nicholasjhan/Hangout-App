import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function First({ events, setEvents }) {
  function editevent(t) {}
  console.log(events);

  function determinemonth(x) {
    let months = [
      "Janurary",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Decemer"
    ];

    return months[x - 1];
  }
  function deleteevent(t) {
    // let events2 = [...events];
  } // setEvents(events.filter(v,i) => i.id !== t.id);
  let [filter, setFilter] = useState(1);

  //if filter is even dispaly filtered
  //if filter is odd display all

  if (filter % 2 == 0) {
  } else {
  }

  return (
    <div>
      Timeline
      <button>private</button>
      <button>public</button>
      <button onClick={() => setFilter(filter + 1)}>filter</button>
      <hr />
      <h1 />
      <div classname="schedulebuttons">
        {events.map(t => (
          <>
            {t.subject}
            <p />
            {determinemonth(t.month)} {t.date},{t.year}
            <button onClick={t => deleteevent(t)}>
              <p /> {events.subject}-
            </button>
            <p />
          </>
        ))}
      </div>
      <div />
    </div>
  );
}
//split the buttons d

function editevent(event) {
  //delete event
  //redirect to creating event
}
