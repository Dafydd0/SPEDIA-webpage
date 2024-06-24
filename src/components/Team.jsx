import React from 'react';
import PropTypes from 'prop-types';

export const Team = ({ data }) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>Meet the team behind SPEDIA.</p>
        </div>
        <div id="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                  <div className="thumbnail">
                    <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src={d.img} alt={`${d.name}`} className="team-img" />
                    </a>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

Team.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired
    })
  ),
};
