import { popup } from "leaflet";
import React from "react";

function PopupDescription({ popupDescription, setPopupDescription }) {
  return (
    <ul className="d-none d-lg-block border-default m-5">
      <li className=" border-default ">
        <button
          className="mb-5 btn btn-outline-primary btn-sm"
          onClick={() => setPopupDescription(null)}
        >
          Retour a la navigation
        </button>
        <h3>{popupDescription.societe}</h3>
        <br />

        <p>{popupDescription.comment1}</p>
      </li>
    </ul>
  );
}

export default PopupDescription;
