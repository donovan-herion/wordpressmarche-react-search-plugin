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
          icon={L.icon({
            iconUrl:
              "https://i.pinimg.com/originals/e9/85/b8/e985b822d867f21b3fd20ae7a81f6760.png",
            iconSize: [50, 50],
          })}
          position={[location.coordinates.lat, location.coordinates.lng]}
        ></Marker>
      </>
    );
  } else {
    return null;
  }
}

export default FlyToMyPositionButton;
