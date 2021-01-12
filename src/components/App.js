const { useState, useEffect } = wp.element;

import React from "react";
import MapOpen from "./MapOpen";
import Filtre from "./Filtre";

function App() {
  const [fakeData, setFakeData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  return (
    <div class="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">
      <a
        href="index.html"
        class="button lvl3 align-self-ls-md-start align-self-md-start position-relative right-0 right-hover-12px fs-short-2"
      >
        <i class="fas fa-angle-left pr-8px d-ls-md-inline pr-md-12px fs-short-2 d-md-inline"></i>
        Retour à l'accueil
      </a>

      <h2 class="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">
        Carte dynamique
      </h2>
      <div class="mt-48px d-flex flex-column flex-lg-row mx-0 mx-lg-n48px overflow-hidden align-items-lg-stretch mx-xxl-0 xxl-shadow-sm-1">
        <Filtre
          fakeData={fakeData}
          setFakeData={setFakeData}
          setFilteredList={setFilteredList}
        />

        <MapOpen filteredList={filteredList} />
      </div>
    </div>
  );
}

export default App;
