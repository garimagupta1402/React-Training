import React, { useEffect, useState } from "react";

import $movieData from "./movieData";
import Movie from "./movieCard";
import "./index.css";

function MovieHomePage() {
  const [rating, setRating] = useState($movieData);

  const updateMovie = $movieData.find((movieData) => movieData.id === "6");
  const updateRating = (updateMovie.rating = Math.floor(Math.random(1) * 3));
  const remainingMovie = $movieData.filter(
    (movieData) => movieData.id !== updateMovie.id
  );

  useEffect(() => {
    setInterval(() => {
      setRating(...remainingMovie, updateMovie);
    }, 4000);
  }, [rating]);

  return (
    <div className={"main"}>
      <h1>Movie Home Page</h1>
      <div className={"movieCard"}>
        {$movieData.map((value) => {
          return (
            <>
              <Movie
                image={value.image}
                movie={value.movie}
                date={value.date}
                rating={value.rating}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default MovieHomePage;
