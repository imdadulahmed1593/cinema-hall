import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import instance from "../axios";
import "./MyBookings.css";

function MyBookings() {
  const user = useSelector(selectUser);
  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    instance.get("/getUserBookingList?name=" + user.displayName).then((res) => {
      setMyBookings(res.data);
    });
  }, []);
  return (
    <div>
      <h1 className="text-center mt-5">Your Bookings</h1>

      {myBookings.map((booking, index) => (
        <div className="myBookings">
          <h1>{booking.movieName}</h1>
          <p>{`On:${booking.date}`}</p>
          <p>{`No of Seats:${booking.numberOfBookings}`}</p>
          <p>{`Name:${booking.userName}`}</p>
          <p>{`Email:${booking.emailID}`}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
