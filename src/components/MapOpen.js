import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function MapOpen() {
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
        <Marker position={[50.22799745011792, 5.34405188915553]}>
          <Popup>
            <p style={{ fontSize: "1rem !important" }}> text hier</p>
          </Popup>
        </Marker>
        <Marker position={[50.24799745011792, 5.35405188915553]}>
          <Popup>
            <p style={{ fontSize: "1rem !important" }}> text hier</p>
          </Popup>
        </Marker>
        <Marker position={[50.23799745011792, 5.33405188915553]}>
          <Popup>
            <p style={{ fontSize: "1rem !important" }}> text hier</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapOpen;
