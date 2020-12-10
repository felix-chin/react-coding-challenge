import React from 'react';
import ShowListItem from './show-list-item';

const ShowList = ({ shows, setView, getDetails }) => {
  return (
    <section className="container mt-5 w-75">
      {shows && shows.map(show => {
        const summary = show.show.summary.replace(/(<([^>]+)>)/ig, '');
        return (
          <ShowListItem
            key={show.show.id}
            id={show.show.id}
            title={show.show.name}
            desc={summary}
            image={show.show.image && show.show.image.medium}
            setView={setView}
            getDetails={getDetails}
          />
        )
      })}
    </section>
  )
}

export default ShowList;
