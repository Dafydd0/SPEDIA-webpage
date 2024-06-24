import React from "react";

export const About = (props) => {
  const createParagraphWithLinks = (text) => {
    const replacements = [
      {
        linkText: "Next Generation EU program",
        linkURL: "https://next-generation-eu.europa.eu/index_es",
      },
      {
        linkText: "Recovery, Transformation and Resilience Plan",
        linkURL: "https://planderecuperacion.gob.es/",
      },
      {
        linkText: "DIT",
        linkURL: "https://www.dit.upm.es/",
      },
      {
        linkText: "ETSIT",
        linkURL: "https://www.etsit.upm.es/",
      },
      {
        linkText: "UPM",
        linkURL: "https://www.upm.es/",
      },
      {
        linkText: "IPTC",
        linkURL: "https://iptc.upm.es/",
      },
    ];

    let modifiedText = text;

    // Reemplazar texto con enlaces
    replacements.forEach(({ linkText, linkURL }) => {
      modifiedText = modifiedText.replaceAll(
        linkText,
        `<a href="${linkURL}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
      );
    });

    // Reemplazar \n con <br />
    modifiedText = modifiedText.replace(/\n/g, "<br />");

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
          <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-between">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                {props.data
                  ? createParagraphWithLinks(props.data.paragraph)
                  : "loading..."}
              </p>
            </div>
            {/* Bloque de "Research Lines" */}
            <div className="research-lines text-center my-auto">
              <h3>Research Lines</h3>
              <div className="list-style text-left mx-auto" style={{ maxWidth: '600px' }}>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li
                            key={`${d}-${i}`}
                            dangerouslySetInnerHTML={{
                              __html: d.replace(
                                /(.*?):/,
                                "<strong>$1</strong>:"
                              ),
                            }}
                          ></li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
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
