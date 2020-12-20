import React, { useEffect, useState } from "react";
import axios from "../axios";
import Movie from "../Movie/Movie";

import "./Home.css";
function Home() {
  const Api_key = "2f78ff5fecdd4f911f60f8749170b289";
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}&language=en-US`
    );
    const data = await request.json();

    setMovies(data.results);

    return data;
  }, []);

  return (
    <div className="home">
      <h1>The Ultimate Movie Experience</h1>
      <h3 className="text-center">
        Pick any movie from our amazing collection
      </h3>
      <div className="home__input">
        <input type="text" />
        <button className="btn  btn-primary">Search</button>
      </div>
      <div className="row home__movies">
        {movies?.map((movie) => (
          <Movie
            key={movie?.id}
            id={movie?.id}
            name={movie?.title || movie?.name}
            image={movie?.backdrop_path || movie?.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
