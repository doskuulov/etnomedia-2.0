import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Movie";
import { Movies } from "../../Date/MovieData";

function PopularMovies() {
  return (
    <div className="my-16">
      <Titles title="Популярные фильмы" Icon={BsCollectionFill} />
      <div className="gap-16 grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {Movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
