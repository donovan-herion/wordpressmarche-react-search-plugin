import { popup } from "leaflet";
import PopupDescription from "./PopupDescription";

function Filtre({
  setPopupDescription,
  popupDescription,
  categoriesToDisplay,
  data,
  setFilteredData,
}) {
  const handleClick = (event) => {
    let filteredData = data.filter((object) => {
      return object.ParentCategoryId == event.target.id;
    });
    // console.log(filteredData);
    setFilteredData(filteredData);
  };
  const handleChange = (event) => {
    if (event.target.value == 0) {
      setFilteredData([]);
    } else {
      let filteredData = data.filter((object) => {
        return object.ParentCategoryId == event.target.value;
      });
      setFilteredData(filteredData);
    }
  };
  return (
    <div className="col-12 col-lg-3 px-0 lg-shadow-sm-1 position-relative z-10">
      <div className="d-block d-lg-none pr-12px border border-dark-primary">
        <select
          name="tabs"
          id="tab-select"
          className="fs-short-3 ff-semibold"
          onChange={(e) => handleChange(e)}
        >
          <option value="0" selected>
            Choisissez une categorie
          </option>
          {categoriesToDisplay?.map((object, i) => {
            return (
              <option key={i} value={object.ParentCategoryId}>
                {object.ParentCategoryName}
              </option>
            );
          })}
        </select>
      </div>

      {popupDescription ? (
        <PopupDescription
          setPopupDescription={setPopupDescription}
          popupDescription={popupDescription}
        />
      ) : (
        <ul className="d-none d-lg-block border-bottom border-default">
          {categoriesToDisplay?.map((object, i) => {
            return (
              <li className="border-top border-default" key={i}>
                <a
                  id={object.ParentCategoryId}
                  onClick={(e) => handleClick(e)}
                  className="d-flex align-items-center h-45px pl-48px pr-16px text-dark-primary text-hover-primary transition-color icon_custom"
                >
                  {/* <i
                  className={`i-${object.icon} w-22px h-22px mr-16px bg-size-auto`}
                ></i> */}
                  {object.ParentCategoryName}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Filtre;
