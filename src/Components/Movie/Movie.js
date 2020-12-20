import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovieInfo } from "../../features/appSlice";

import "./Movie.css";
function Movie({ id, name, image }) {
  const dispatch = useDispatch();
  const handleMovie = () => {
    dispatch(
      setMovieInfo({
        movieId: id,
        movieName: name,
        moviePoster: image,
        numberofBookings: 0,
      })
    );
  };
  const base_Url = "https://image.tmdb.org/t/p/original";
  return (
    <Link
      onClick={handleMovie}
      to="/movieDetail"
      className="col-sm-6 col-md-3  movie"
    >
      <img src={`${base_Url}${image}`} alt={name} /> <p>{name}</p>
    </Link>
  );
}

export default Movie;
