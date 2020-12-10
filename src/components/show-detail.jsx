import React, { useState } from 'react';

const ShowDetail = ({ details }) => {
  const { seasons, episodes, cast, crew, info } = details;
  const [ season, setSeason ] = useState('');
  const [ selectedEps, setSelectedEps ] = useState([]);

  const changeSeason = (e) => {
    setSeason(e.target.value);
    const arr = [];
    episodes.forEach(episode => {
      if (episode.season === parseInt(e.target.value)) {
        arr.push(episode);
      }
    });
    setSelectedEps(arr);
  }

  return (
    <>
      <div>

      </div>
      <div className="row">
        <div className="form-group">
          <select value={season} onChange={changeSeason} className="form-control bg-light-grey">
            <option value='' disabled>Select Season</option>
            {seasons.map(season => {
              return (
                <option key={season.id} value={season.number}>{`Season ${season.number}`}</option>
              )
            })
            }
          </select>
        </div>
      </div>
      <div>
        { selectedEps.map(eps => {
          const date = new Date("2012-10-14").toLocaleDateString();
          return (
            <div className="d-flex flex-row">
              <h1><span className="badge bg-dark-blue text-white">{eps.number}</span></h1>
              <div>
                <h5>{eps.name}</h5>
                <div>
                  <i className="far fa-star"></i>
                  <span>{date}</span>
                </div>
              </div>
            </div>
          )
          })
        }
      </div>
    </>
  )
}

export default ShowDetail;
