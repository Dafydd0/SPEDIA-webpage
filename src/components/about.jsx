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
      {
        linkText: "RSTI",
        linkURL: "https://blogs.upm.es/rsti/",
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

  // Función para resaltar el texto antes de los ":"
  const highlightTextBeforeColon = (text) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex !== -1) {
      const textBeforeColon = text.slice(0, colonIndex + 1);
      const textAfterColon = text.slice(colonIndex + 1);
      return <span><b>{textBeforeColon}</b>{textAfterColon}</span>;
    }
    return text;
  };

  return (
    <div id="about" className="text-center section-spacing">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>About Us</h2>
        </div>
        <div className="row first-row">
          <div className="col-xs-12 col-md-6">
            <div className="research-lines text-center my-auto">
              <h3>About the research group</h3>
              <div className="list-style text-left mx-auto" style={{ maxWidth: '600px' }}>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li
                          key={`${d}-${i}`}
                          dangerouslySetInnerHTML={{
                            __html: createParagraphWithLinks(d),
                          }}
                        ></li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="research-lines text-center my-auto">
              <h3>Research Lines</h3>
              <div className="list-style text-left mx-auto" style={{ maxWidth: '600px' }}>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.researchLines.map((d, i) => (
                        <li
                          key={`${d}-${i}`}
                        >
                          {highlightTextBeforeColon(d)}
                        </li>
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
