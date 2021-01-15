import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FlyToMyPositionButton from "./FlyToMyPositionButton";

function MapComponent({ data, filteredData, setPopupDescription }) {
  const handleClick = (object) => {
    setPopupDescription(object);
  };

  return (
    <div className="col-12 min-height-330px mt-24px mt-lg-0 col-lg-9 px-0 d-flex align-items-stretch justify-content-stretch overflow-hidden position-relative bg-lighter">
      <MapContainer
        style={{ width: "100%", height: "800px" }}
        center={[50.22799745011792, 5.34405188915553]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredData?.map((object, index) => {
          return (
            <Marker
              eventHandlers={{
                click: () => {
                  handleClick(object);
                },
              }}
              key={index}
              position={[object.latitude, object.longitude]}
            ></Marker>
          );
        })}
        <FlyToMyPositionButton />
      </MapContainer>
      <br /> <br />
    </div>
  );
}

export default MapComponent;
