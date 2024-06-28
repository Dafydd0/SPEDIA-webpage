import React from "react";

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
      linkText: "INCIBE",
      linkURL: "https://www.incibe.es/",
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

  // Reemplaza los textos y agrega enlaces
  replacements.forEach(({ linkText, linkURL }) => {
    modifiedText = modifiedText.replaceAll(
      linkText,
      `<a href="${linkURL}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
    );
  });

  // Reemplaza los saltos de línea por <br>
  modifiedText = modifiedText.replace(/\n/g, "<br />");

  return modifiedText;
};

export const Features = (props) => {
  return (
    <div id="features" className="text-center section-spacing">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="row first-row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Us" />
          </div>
          <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-start col-right">
            <div className="col-md-12 row-content">
              <p className="text-left">
                {props.data && props.data.paragraph
                  ? <span dangerouslySetInnerHTML={{ __html: createParagraphWithLinks(props.data.paragraph) }} />
                  : "Loading..."}
              </p>
            </div>
          </div>
        </div>
        <div className="row second-row">
          {props.data && props.data.list
            ? props.data.list.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 mb-4 row-content">
                <i className={d.icon + " row-icon"}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
