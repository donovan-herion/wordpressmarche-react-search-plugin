const { useState, useEffect } = wp.element;

import React from "react";
import MapOpen from "./MapOpen";
import Filtre from "./Filtre";

function App() {
  const [fakeData, setFakeData] = useState([
    {
      name: "Boulangerie",
      icon: "book",
      id: 1,
      list: [
        { text: "Delhaye", long: 50.23799745011792, lat: 5.33405188915553 },
        { text: "Poncelet", long: 50.23699745011792, lat: 5.33305188915553 },
        { text: "Lefevre", long: 50.23599745011792, lat: 5.33205188915553 },
      ],
    },
    {
      name: "Restaurant",
      id: 2,
      icon: "flatware",
      list: [
        {
          text: "Le palais d'ete",
          long: 50.22911792,
          lat: 5.32505188915553,
        },
        { text: "San Marino", long: 50.25399745011792, lat: 5.33305188915553 },
        { text: "Greta", long: 50.2543745011792, lat: 5.33205188915553 },
      ],
    },
    {
      name: "Administration",
      id: 3,
      icon: "umbrella",
      list: [
        {
          text: "Hotel de ville",
          long: 50.26799745011792,
          lat: 5.33405188915553,
        },
        { text: "CST", long: 50.23739745011792, lat: 5.33305188915553 },
        {
          text: "Office du tourisme",
          long: 50.23599745011792,
          lat: 5.35405188915553,
        },
      ],
    },
  ]);
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
        <Filtre fakeData={fakeData} setFilteredList={setFilteredList} />

        <MapOpen filteredList={filteredList} />
      </div>
    </div>
  );
}

export default App;
