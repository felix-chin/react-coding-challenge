import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/search-bar';
import ShowList from './components/show-list';
import ShowDetails from './components/show-detail';

const App = (show) => {
  const [ shows, setShows ] = useState([]);
  const [ details, setDetails ] = useState({
    episodes: [],
    seasons: [],
    cast: [],
    crew: [],
    info: []
  });
  const [ view, setView ] = useState(null);

  const getShows = show => {
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.error(err));
  }

  const getDetails = id => {
    Promise.all([
      fetch(`http://api.tvmaze.com/shows/${id}/episodes`),
      fetch(`http://api.tvmaze.com/shows/${id}/seasons`),
      fetch(`http://api.tvmaze.com/shows/${id}/cast`),
      fetch(`http://api.tvmaze.com/shows/${id}/crew`),
      fetch(`http://api.tvmaze.com/shows/${id}`),
    ])
      .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]))
      .then(([data1, data2, data3, data4, data5]) => {
        setDetails({
          episodes: data1,
          seasons: data2,
          cast: data3,
          crew: data4,
          info: data5
        });
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <Header />
      <main className="container bg-white my-4">
        <SearchBar getShows={getShows} setView={setView} />
        {view === 'details'
          ? <ShowDetails details={details} />
          : <ShowList shows={shows} setView={setView} getDetails={getDetails} />
        }
      </main>
    </div>
  );
}

export default App;
