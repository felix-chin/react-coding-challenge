import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/search-bar';
import ShowList from './components/show-list';
import ShowDetails from './components/show-detail';
import Loader from './components/loader';

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
  const [isLoading, setLoading] = useState(false);

  const getShows = show => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
      .then(res => res.json())
      .then(data => {
        setShows(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }

  const getDetails = id => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch(err => console.error(err));
  }

  let renderView = view === 'details' ? <ShowDetails details={details} /> : <ShowList shows={shows} setView={setView} getDetails={getDetails} />;

  return (
    <div>
      <Header />
      <main className="container bg-white my-4">
        <SearchBar getShows={getShows} setView={setView} />
        {isLoading
          ? <Loader />
          : renderView
        }
      </main>
    </div>
  );
}

export default App;
