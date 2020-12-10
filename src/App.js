import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/search-bar';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-detail';

const App = (movie) => {
  const [ movies, setMovies ] = useState([]);

  const getMovies = movie => {
    fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }

  return (
    <div>
    </div>
  );
}

export default App;
