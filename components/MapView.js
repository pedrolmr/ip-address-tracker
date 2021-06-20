import locationIcon from "../images/icon-location.svg";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapView = ({ lat, lng }) => {
  return (
    <>
      <div id="mapid" className="-mt-1.5 -z-10 overflow-hidden">
        <MapContainer
          className="h-screen overflow-hidden"
          id="mapid"
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[lat, lng]}
            icon={
              new Icon({
                iconUrl: locationIcon,
                iconAnchor: [12, 41],
              })
            }
            draggable={true}
            animate={true}
          ></Marker>
        </MapContainer>
      </div>
    </>
  );
};
export default MapView;
