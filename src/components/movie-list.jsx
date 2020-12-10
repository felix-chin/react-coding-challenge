import React from 'react';
import MovieListItem from './movie-list-item';

const MovieList = ({ movies }) => {
  return (
    <section>
      {movies && movies.map(movie => {
        return (
          <MovieListItem
            key={movie.show.id}
            title={movie.show.name}
            desc={movie.show.summary}
            image={movie.show.image.medium}
          />
        )
      })}
    </section>
  )
}

export default MovieList;
