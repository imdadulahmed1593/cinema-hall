import React, { useState } from "react";
import "./SeatIcon.css";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import { IconButton } from "@material-ui/core";
function SeatIcon() {
  const [booked, setBooked] = useState(false);
  return (
    <IconButton>
      {" "}
      <EventSeatOutlinedIcon
        style={{ fill: booked ? `red` : `currentcolor` }}
        onClick={() => {
          console.log("clicked");
          setBooked(true);
        }}
      ></EventSeatOutlinedIcon>
    </IconButton>
  );
}

export default SeatIcon;
