import React from "react";

export const Publications = (props) => {
  return (
    <div id="publications">
      <div className="container">
        <div className="section-title text-center">
          <h2>What we publish</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="publication">
                    <div className="publication-image">
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={d.img} alt={d.text} />
                      </a>
                    </div>
                    <div className="publication-content">
                      <p>{d.text}</p>
                      <div className="publication-meta">{d.name}</div>
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
