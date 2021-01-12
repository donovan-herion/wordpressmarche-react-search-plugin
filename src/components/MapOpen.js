import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FlyToMyPositionButton from "./FlyToMyPositionButton";

function MapOpen({ fakeData, filteredList }) {
  return (
    <div class="col-12 min-height-330px mt-24px mt-lg-0 col-lg-9 px-0 d-flex align-items-stretch justify-content-stretch overflow-hidden position-relative bg-lighter">
      <MapContainer
        style={{ width: "100%" }}
        center={[50.22799745011792, 5.34405188915553]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredList?.map((object, index) => {
          return (
            <Marker key={index} position={[object.long, object.lat]}>
              <Popup>
                <p style={{ fontSize: "1.5rem !important" }}>{object.text}</p>
              </Popup>
            </Marker>
          );
        })}
        <FlyToMyPositionButton />
      </MapContainer>
      <br /> <br />
    </div>
  );
}

export default MapOpen;
