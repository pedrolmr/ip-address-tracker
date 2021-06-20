import { useState } from "react";

const Header = ({ ip, city, timezone, isp, lat, lng }) => {
  return (
    <div className="flex bg-white h-40 z-9999 border-2 border-white rounded">
      <div className="flex flex-1 flex-col py-8 pl-8">
        <div className="border-r-2 border-gray-200 pb-7">
          <p className="uppercase text-gray-400 font-bold text-sm pb-2">
            IP Address
          </p>
          <p className="text-xl font-bold">{ip}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col py-8 pl-8">
        <div className="border-r-2 border-gray-200 pb-7">
          <p className="uppercase text-gray-400 font-bold text-sm pb-2">
            Location
          </p>
          <p className="text-xl font-bold">{city}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col py-8 pl-8">
        <div className="border-r-2 border-gray-200 pb-7">
          <p className="uppercase text-gray-400 font-bold text-sm pb-2">
            Timezone
          </p>
          <p className="text-xl font-bold">{`UTC${timezone}`}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col py-8 pl-8">
        <div className="border-none pb-7">
          <p className="uppercase text-gray-400 font-bold text-sm pb-2">ISP</p>
          <p className="text-xl font-bold">{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
