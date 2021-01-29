import React from "react";

function HardCodedValues() {
  return (
    <>
      {/* Mettre a jour les hrefs pour qu'ils pointent vers les bonnes pages */}
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="pool.html" className="icon_custom">
          <i className="i-swimmer"></i>Piscine
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="#" className="icon_custom">
          <i className="i-leaf"></i>Environnment-Déchet
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="#" className="icon_custom">
          <i className="i-traffic-cone"></i>Travaux
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="#" className="icon_custom">
          <i className="i-beach-ball"></i>Jeunesse-Stages
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="map.html" className="icon_custom">
          <i className="i-map"></i>Cartes dynamiques
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="#" className="icon_custom">
          <i className="i-handshake"></i>CPAS
        </a>
      </li>
      <li className="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12">
        <a href="#" className="icon_custom">
          <i className="i-envelope"></i>Mon adresse e-mail
        </a>
      </li>
    </>
  );
}

export default HardCodedValues;
