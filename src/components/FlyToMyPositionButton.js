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
        <div
          onClick={() => showMyLocation()}
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            border: "solid 2px rgba(0,0,0,0.4)",
            cursor: "pointer",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            width: 30,
            top: 80,
            left: 12,
            zIndex: 500,
          }}
        >
          <img
            style={{ width: 40 }}
            src="https://static.thenounproject.com/png/1836810-200.png"
          />
        </div>
        <button
          style={{
            backgroundColor: "black",
            outline: "none",
            border: "none",
            width: "fit-content",
            height: 25,
          }}
        >
          Ma position
        </button>
        <Marker
          icon={L.icon({
            iconUrl: "https://static.thenounproject.com/png/1836810-200.png",
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
