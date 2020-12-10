import React from 'react';

const MovieListItem = ({ title, desc, image, setView }) => {

  const displayDetails = () => {
    setView('details');
  }

  return (
    <div className="d-flex flex-row bg-light-grey round-corners movie-list-item">
      <img src={image} alt="movie poster" className="round-corners poster ml-4 mr-5"/>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="font-weight-bold">{title}</h4>
        <p className="summary-text text-muted">{desc}</p>
        <div>
          <button type="button" onClick={displayDetails} className="btn btn-sm btn-dark bg-dark-blue">Show Episodes</button>
        </div>
      </div>
    </div>
  )
}

export default MovieListItem;
