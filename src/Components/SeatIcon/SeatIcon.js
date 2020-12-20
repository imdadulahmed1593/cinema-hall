import React, { useState } from "react";
import "./SeatIcon.css";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setMovieInfo } from "../../features/appSlice";

function SeatIcon() {
  const [booked, setBooked] = useState(false);

  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const numBooked = movie?.numberofBookings;
  return (
    <IconButton>
      {" "}
      <EventSeatOutlinedIcon
        style={{ fill: booked ? `red` : `currentcolor` }}
        onClick={() => {
          console.log("clicked");
          setBooked(true);

          dispatch(
            setMovieInfo({
              ...movie,
              numberofBookings: numBooked + 1,
            })
          );
        }}
      ></EventSeatOutlinedIcon>
    </IconButton>
  );
}

export default SeatIcon;
