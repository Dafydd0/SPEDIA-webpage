import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Partners } from "./components/partners";
import { News } from "./components/news";
import { Gallery } from "./components/gallery";
import { Publications } from "./components/publications";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Partners data={landingPageData.Partners} />
      <Gallery data={landingPageData.Gallery} />
      <Publications data={landingPageData.Publications} />
      <News data={landingPageData.News} />
      <Team data={landingPageData.Team} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
      {/* Imagen al final de la página */}
      <div className="banda-logos">
        <img src="img/BandaLogos.png" alt="Banda Logos" />
      </div>
    </div>
  );
};

export default App;
