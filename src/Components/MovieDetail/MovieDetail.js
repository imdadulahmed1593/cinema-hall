import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { setHours, setMinutes } from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { selectMovie } from "../../features/appSlice";
import "./MovieDetail.css";

function MovieDetail() {
  const movie = useSelector(selectMovie);
  const [startDate, setStartDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const user = useSelector(selectUser);
  const base_Url = "https://image.tmdb.org/t/p/original";
  console.log(startDate);
  return (
    <div className="movieDetail text-center">
      <div className="movieDetail__img">
        <img src={`${base_Url}${movie?.moviePoster}`} alt="" />
      </div>

      <div className="movieDetails">
        <h1>{movie?.movieName}</h1>
        <button
          onClick={() => setCalendar(true)}
          className="btn-primary btn-lg"
        >
          Show date and time
        </button>
        {calendar && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        )}
        {calendar && (
          <Link to="/booking">
            <button className="btn-success btn-lg">
              Check seat availability
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
// <Datepicker controls={["calendar"]} select="range" touchUi={true} />

// <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         showTimeSelect
//         includeTimes={[
//           setHours(setMinutes(new Date(), 0), 17),
//           setHours(setMinutes(new Date(), 30), 18),
//           setHours(setMinutes(new Date(), 30), 19),
//           setHours(setMinutes(new Date(), 30), 17),
//         ]}
//         dateFormat="MMMM d, yyyy h:mm aa"
//       />
