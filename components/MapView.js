import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";

const MapView = ({ city, lat, lng, timezone, ip, isp }) => {
  return (
    <>
      <div id="mapid">
        <MapContainer
          id="mapid"
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CircleMarker
            center={[lat, lng]}
            pathOptions={{ color: "red" }}
            radius={20}
          >
            <Tooltip>
              <ul>
                <li>latitude: {lat}</li>
                <li>longitude: {lng}</li>
                <li>IP: {ip}</li>
                <li>City: {city}</li>
                <li>Time zone: {timezone}</li>
                <li>ISP: {isp}</li>
              </ul>
            </Tooltip>
          </CircleMarker>
        </MapContainer>
      </div>
    </>
  );
};
export default MapView;
