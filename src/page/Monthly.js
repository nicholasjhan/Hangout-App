import React from "react";
import { format, setDate, getDay, addMonths } from "date-fns";

function Monthly({ events }) {
  let [today, setToday] = React.useState(new Date());

  const dayOfFirst = getDay(setDate(today, 1));

  return (
    <div className="Calendar">
      <h1>
        <button onClick={() => setToday(addMonths(today, -1))}>&lt;</button>
        {format(today, "yyyy MMM")}
        <button onClick={() => setToday(addMonths(today, 1))}>&gt;</button>
      </h1>
      <div className="cells">
        {["su", "mo", "tu", "w", "th", "f", "sa"].map(v => (
          <div key={v} className="header">
            {v}
          </div>
        ))}
        {new Array(dayOfFirst).fill(0).map((_, i) => (
          <div key={i} />
        ))}
        {new Array(30).fill(0).map((_, i) => (
          <div key={i} className="date-cell">
            <div className="dateNum">{i + 1}</div>

            <div className="events">
              {events
                .filter(
                  ev =>
                    ev.year === today.getFullYear() &&
                    ev.month === today.getMonth() + 1 &&
                    ev.date == i + 1
                )
                .map(ev => (
                  <li key={ev.id}>{ev.subject}</li>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monthly;
