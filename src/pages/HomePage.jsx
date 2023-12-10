// src/pages/HomePage.jsx

import React from "react";
import HomeImage from "../components/HomeImage";

export default function HomePage() {
  return (
    <div>
      <HomeImage />

      <h3 className="trailersText"> Best New Video Game Trailers Of This Year
 </h3>
      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/QdBZY2fkU-0?si=fFhSHDy2nicHhSmr"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/o03STclgxSc?si=1tJqQrLtu7TunFDA"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/C44_HrseDSs?si=K-UZ_QRe4WtAZk51"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/3VYGOkMnGCE?si=rGmH8uDdqptpxFkC"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/1pv5CqXdA8w?si=-7w3QDFPkqqw9R7h"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/OQ8l1cBsjtw?si=f7PqtmPlBiaSq_Ug"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}