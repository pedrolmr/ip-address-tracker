import { useState } from "react";

const Header = ({ ip, city, timezone, isp }) => {
  return (
    <div>
      {/* <h1>{ip}</h1> */}
      <ul>
        <li>{ip}</li>
        <li>{city}</li>
        <li>{timezone}</li>
        <li>{isp}</li>
      </ul>
    </div>
  );
};

export default Header;
