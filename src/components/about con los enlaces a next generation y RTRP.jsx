import React from "react";

export const About = (props) => {
  const createParagraphWithLinks = (text) => {
    const replacements = [
      {
        linkText: "Next Generation EU program",
        linkURL: "https://next-generation-eu.europa.eu/index_es"
      },
      {
        linkText: "Recovery, Transformation and Resilience Plan",
        linkURL: "https://planderecuperacion.gob.es/"
      }
    ];

    let modifiedText = text;

    replacements.forEach(({ linkText, linkURL }) => {
      modifiedText = modifiedText.replaceAll(
        linkText,
        `<a href="${linkURL}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: modifiedText }} />;
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Imagen de la sección "About Us" */}
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="About Us"
            />
          </div>
          {/* Texto de la sección "About Us" */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                {props.data
                  ? createParagraphWithLinks(props.data.paragraph)
                  : "loading..."}
              </p>
              <h3>Research Lines</h3>
              <div className="list-style">
                {/* Primera lista de razones para elegirnos */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li
                            key={`${d}-${i}`}
                            dangerouslySetInnerHTML={{
                              __html: d.replace(/(.*?):/, "<strong>$1</strong>:")
                            }}
                          ></li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* Segunda lista de razones para elegirnos */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
