import Axios from "axios";

const { useState, useEffect } = wp.element;

function Filtre({ fakeData, setFakeData, setFilteredList }) {
  const [parentCategoryId, setParentCategoryId] = useState([414, 21]); //this line needs to be automated
  const getFichesByParentCategoryId = () => {
    parentCategoryId.map((elem, i) => {
      return Axios.get(`https://new.marche.be/wp-json/ca/v1/map/${elem}`)
        .then((res) => {
          if (res.data.length == 0) {
            //transformation et ajout de la categorie parente
            let formattedData = res.data.map(
              (fiche, (i) => (fiche.parentCategory = elem))
            );
            setFakeData((state) => [...state, formattedData]);
          } else {
            setFakeData(null);
          }
        })
        .catch((err) => console.log(err.message));
    });
  };

  const handleClick = (event) => {
    let filteredList = fakeData.filter((object) => {
      return object.id == event.target.id;
    });
    setFilteredList(filteredList[0].list);
  };
  const handleChange = (event) => {
    if (event.target.value == 0) {
      setFilteredList([]);
    } else {
      let filteredList = fakeData.filter((object) => {
        return object.id == event.target.value;
      });
      setFilteredList(filteredList[0].list);
    }
  };
  return (
    <div class="col-12 col-lg-3 px-0 lg-shadow-sm-1 position-relative z-10">
      <div class="d-block d-lg-none pr-12px border border-dark-primary">
        <select
          name="tabs"
          id="tab-select"
          class="fs-short-3 ff-semibold"
          onChange={(e) => handleChange(e)}
        >
          <option value="0" selected>
            Choisissez une categorie
          </option>
          {fakeData.map((object, i) => {
            return (
              <option key={i} value={object.id}>
                {object.name}
              </option>
            );
          })}
        </select>
      </div>

      <ul class="d-none d-lg-block border-bottom border-default">
        {fakeData.map((object, i) => {
          return (
            <li class="border-top border-default" key={i}>
              <a
                id={object.id}
                onClick={(e) => handleClick(e)}
                href="#"
                class="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
              >
                <i
                  class={`i-${object.icon} w-22px h-22px mr-16px bg-size-auto`}
                ></i>
                {object.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filtre;
