import { useState } from "react";

const Header = ({ lat, lng, ip }) => {
  return (
    <div>
      <h1>{ip}</h1>
      <ul>
        {/* <li>City: {data.location.city}</li>
        <li>Country: {data.location.country}</li> */}
        <li>Latitude: {lat}</li>
        <li>Longitude: {lng}</li>
        {/* <li>Region: {data.location.region}</li> */}
      </ul>
    </div>
  );
};

export default Header;
