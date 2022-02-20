import React from "react";
import { useGlobalContext } from "./context/context";
import { Link, useParams } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        console.log("====================================");
        console.log(movie);
        console.log("====================================");
        return <h4>movie</h4>;
      })}
    </section>
  );
};

export default Movies;
