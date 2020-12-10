import React, { useState } from 'react';

const SearchBar = ({ getMovies, setView }) => {
  const [ searchInput, setSearch ] = useState('');

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(searchInput);
    setView('list');
  }

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <form onSubmit={handleSubmit} className="d-flex flex-row w-50 mt-4">
          <div className="input-group input-group-lg border-0">
            <div className="input-group-prepend">
              <span className="input-group-text bg-light-grey">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <input
              type="text"
              name="search"
              value={searchInput}
              placeholder="search show titles"
              onChange={handleChange}
              className="form-control bg-light-grey border-left-0"
            />
          </div>
          <button type="submit" className="btn btn-lg btn-dark bg-dark-blue ml-3">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;
