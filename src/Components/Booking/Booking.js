import React, { useState } from "react";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import "./Booking.css";
import { IconButton } from "@material-ui/core";
import SeatIcon from "../../Components/SeatIcon/SeatIcon";
function Booking() {
  return (
    <div className="booking">
      <div className="booking__seats">
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
        <div className="booking__seatsRow">
          {Array(10)
            .fill()
            .map((_) => (
              <SeatIcon></SeatIcon>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Booking;
