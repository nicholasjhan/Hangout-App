import React from "react";

export default function SharedEvents() {
  return(
    <div>SharedEvents</div>
    <div>
      {friendlist.map((v, i) => (
        <button onClick={() => SeeInbox(i)}>{v}</button>
      ))}
    </div>
  )
  ;
}
