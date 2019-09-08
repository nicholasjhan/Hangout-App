import React, { useState } from "react";
import ReactDOM from "react-dom";
import First from "./page/first/First";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Monthly from "./page/Monthly";
import Creatingevent from "./page/first/Creatingevent";
import {
  FaBeer,
  FaAdobe,
  FaAppStore,
  FaHome,
  FaMailchimp,
  FaCalendar,
  FaCog
} from "react-icons/fa";
// import Creatingevent from "./page/first/Creatingevent";

import "./styles.scss";
import "./frontpage.scss";
import Profile from "./page/Profile";

// import

function App() {
  let [offline, setOffline] = useState(false);
  let [darkmode, setDarkmode] = useState(false);
  let [events, setEvents] = useState([
    { id: 1, subject: "anniversary", year: 2019, month: 8, date: 20 },
    { id: 2, subject: "play", year: 2019, month: 8, date: 1 },
    { id: 3, subject: "jump", year: 2019, month: 9, date: 20 }
  ]);

  //if year is less than , if month is less than, if day is less than
  let sorted = [...events];
  sorted.sort(
    (a, b) =>
      a.year * 365 +
      a.month * 31 +
      a.date -
      (b.year * 365 + b.month * 31 + b.date)
  );

  return (
    <div className={"App " + (darkmode ? "darkmode" : "")}>
      <div className="content">
        <Route
          exact
          path="/"
          render={() => <First events={sorted} setEvents={setEvents} />}
        />
        <Route path="/monthly" render={() => <Monthly events={sorted} />} />
        <Route
          path="/createEvent"
          render={() => <Creatingevent setEvents={setEvents} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile setOffline={setOffline} setDarkmode={setDarkmode} />
          )}
        />
      </div>

      <Footer />
    </div>
  );
}

const Footer = () => (
  <div className="Footer">
    {/* home */}
    <Link to="/">
      <button>
        {" "}
        <FaHome />{" "}
      </button>
    </Link>

    {/* inbox */}
    <Link to="/public">
      <button>
        {" "}
        <FaMailchimp />{" "}
      </button>
    </Link>
    {/* create event */}
    <Link to="/createEvent">
      <button>+</button>
    </Link>
    {/* monthly page */}
    <Link to="/monthly">
      <button>
        {" "}
        <FaCalendar />{" "}
      </button>
    </Link>
    {/* settings */}
    <Link to="/profile">
      <button>
        {" "}
        <FaCog />{" "}
      </button>
    </Link>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// notes:
// need database for multiple people
// profile
// connects to google account
//
