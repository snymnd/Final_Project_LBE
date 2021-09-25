import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div className="container" >
      <div className="row">  
          {props.movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} />;
          })}
      </div>
    </div>
  );
}
