import React from "react";
import PropTypes from "prop-types";

export const News = (props) => {
  const createParagraphWithLineBreaks = (text) => {
    // Reemplaza los saltos de línea por <br>
    return text.replace(/\n/g, "<br />");
  };

  return (
    <div id="news" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our News</h2>
        </div>
        <div className="news-grid">
          {props.data && props.data.length > 0 ? (
            props.data.map((newsItem, index) => (
              <div
                key={`${newsItem.title}-${index}`}
                className="news-item-container"
              >
                <div className="news-item">
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.date}</p>
                    <p
                      className="news-description"
                      dangerouslySetInnerHTML={{
                        __html: createParagraphWithLineBreaks(newsItem.description),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default News;
