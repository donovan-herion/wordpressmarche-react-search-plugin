import React, { useEffect } from "react";
import useGeolocation from "../hooks/useGeolocation";
import { Marker, useMap } from "react-leaflet";

function FlyToMyPositionButton() {
  const location = useGeolocation();

  const map = useMap();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      map.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        map.getZoom()
      );
    } else {
      alert(location.error.message);
    }
  };

  if (location.loaded && !location.error) {
    return (
      <>
        <button
          style={{
            backgroundColor: "black",
            outline: "none",
            border: "none",
            width: "fit-content",
            height: 25,
            position: "absolute",
            color: "white",
            borderRadius: 10,
            fontWeight: "bold",
            top: 15,
            right: 15,
            zIndex: 500,
          }}
          onClick={() => showMyLocation()}
        >
          Ma position
        </button>
        <Marker
          position={[location.coordinates.lat, location.coordinates.lng]}
        ></Marker>
      </>
    );
  } else {
    return null;
  }
}

export default FlyToMyPositionButton;
