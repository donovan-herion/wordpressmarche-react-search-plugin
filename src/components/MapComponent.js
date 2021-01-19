import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FlyToMyPositionButton from "./FlyToMyPositionButton";

function MapComponent({ markerData, popupDescription, setPopupDescription }) {
  const handleClick = (object) => {
    setPopupDescription(object);
  };

  return (
    <div className="col-12 min-height-330px mt-24px mb-24px mt-lg-0 col-lg-9 px-0 d-flex position-relative bg-lighter">
      <MapContainer
        style={{ width: "100%", height: "700px" }}
        center={[50.22799745011792, 5.34405188915553]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerData?.map((object, index) => {
          return (
            <Marker
              eventHandlers={{
                click: () => {
                  handleClick(object);
                },
              }}
              key={index}
              position={[object.latitude, object.longitude]}
            >
              <Popup className="d-block d-lg-none">
                <h3>{popupDescription?.societe}</h3>
                <p className="text-center">{popupDescription?.telephone}</p>
              </Popup>
            </Marker>
          );
        })}
        <FlyToMyPositionButton />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
