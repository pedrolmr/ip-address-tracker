import { useState } from "react";

const Header = ({ ip, city, timezone, isp, lat, lng }) => {
  return (
    <div>
      {/* <h1>{ip}</h1> */}
      <ul>
        <li>latitude: {lat}</li>
        <li>longitude: {lng}</li>
        <li>{ip}</li>
        <li>{city}</li>
        <li>{timezone}</li>
        <li>{isp}</li>
      </ul>
    </div>
  );
};

export default Header;
