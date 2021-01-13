const { useState, useEffect } = wp.element;

import Axios from "axios";
import React from "react";
import MapComponent from "./MapComponent";
import Filtre from "./Filtre";
import Top from "./Top";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [categoriesToDisplay, setCategoriesToDisplay] = useState();

  //defining categories to display || Expecting Parent Category Bottin Id + Name to display
  useEffect(() => {
    let categoriesToDisplay = [
      {
        ParentCategoryId: 414,
        ParentCategoryName: "Maison de repos",
      },
      {
        ParentCategoryId: 113,
        ParentCategoryName: "Restaurant",
      },
      {
        ParentCategoryId: 386,
        ParentCategoryName: "Logopede",
      },
      {
        ParentCategoryId: 248,
        ParentCategoryName: "Agence Interim",
      },
    ];
    setCategoriesToDisplay(categoriesToDisplay);
  }, []);

  // const [parentCategoryId, setParentCategoryId] = useState([414, 21]); //this line needs to be automated

  //Fetching Data
  const getFichesByParentCategoryId = () => {
    categoriesToDisplay?.map((category, index) => {
      Axios.get(
        `https://new.marche.be/wp-json/ca/v1/map/${category.ParentCategoryId}`
      )
        .then((res) => {
          if (res.data.length !== 0) {
            //transformation et ajout de la categorie parente
            let formattedData = res.data;
            formattedData.map((data, i) => {
              data.ParentCategoryId = category.ParentCategoryId;
            });
            setData((state) => [...state, ...formattedData]);
          } else {
            return null;
          }
        })
        .catch((err) => console.log(err.message));
    });
  };

  console.log(data);

  useEffect(() => {
    getFichesByParentCategoryId();
  }, [categoriesToDisplay]);

  return (
    <div className="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">
      <Top />
      <div className="mt-48px d-flex flex-column flex-lg-row mx-0 mx-lg-n48px overflow-hidden align-items-lg-stretch mx-xxl-0 xxl-shadow-sm-1">
        <Filtre
          categoriesToDisplay={categoriesToDisplay}
          data={data}
          setData={setData}
          setFilteredData={setFilteredData}
        />

        <MapComponent filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;
