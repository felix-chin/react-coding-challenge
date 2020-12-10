import React from 'react';
import MovieListItem from './movie-list-item';

const MovieList = ({ movies }) => {
  return (
    <section className="container mt-5 w-75">
      {movies && movies.map(movie => {
        const summary = movie.show.summary.replace(/(<([^>]+)>)/ig, '');
        return (
          <MovieListItem
            key={movie.show.id}
            title={movie.show.name}
            desc={summary}
            image={movie.show.image && movie.show.image.medium}
          />
        )
      })}
    </section>
  )
}

export default MovieList;
