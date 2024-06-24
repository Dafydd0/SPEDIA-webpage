import React from "react";
import PropTypes from "prop-types";

export const Partners = (props) => {
  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>Take a look at the project partners.</p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((partner, index) => (
              <div key={`${partner.description}-${index}`} className="col-md-6">
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={partner.image}
                    alt={`Service ${index + 1}`}
                    className="partner-image"
                  />
                </a>
                <div className="service-desc">
                  <p>{partner.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

Partners.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
};
