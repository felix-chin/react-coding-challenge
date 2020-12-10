import React from 'react';

const MovieListItem = ({ title, desc, image }) => {
  return (
    <div>
      <img src="" alt=""/>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        <button type="button" className="btn btn-dark bg-dark-blue">Show Episodes</button>
      </div>
    </div>
  )
}

export default MovieListItem;
