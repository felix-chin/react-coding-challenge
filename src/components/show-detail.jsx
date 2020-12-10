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
    <div className="container mt-4">
      <div className="row">
        <div className="w-25">
          <img src={info.image && info.image.medium} alt="show poster" className="poster-detail round-corners"/>
          <h5 className="mt-2 font-weight-bold">{info.name}</h5>
        </div>
        <div className="d-flex flex-column ml-4">
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
          <div>
            {selectedEps.map(eps => {
              const date = new Date("2012-10-14").toLocaleDateString();
              return (
                <div key={eps.id} className="d-flex flex-row">
                  <h1 className="badge mb-0"><span className="badge bg-dark-blue text-white">{eps.number}</span></h1>
                  <div className="d-flex flex-column justify-content-center ml-1">
                    <h6 className="mb-0">{eps.name}</h6>
                    <div>
                      <span>{date}</span>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowDetail;
