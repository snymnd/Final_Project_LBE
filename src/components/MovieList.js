import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div >
      <div >
        {props.movies.map((movie) => {
          return <Movie key={movie.id} image={movie.poster_path} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} />;
        })}
      </div>
    </div>
  );
}
