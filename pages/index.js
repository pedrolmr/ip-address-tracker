import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Image from "next/image";
import patternImg from "../images/pattern-img.png";
import axios from "axios";

export default function Home() {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [ip, setIp] = useState("9.9.9.9");

  useEffect(async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
    );

    setCity(res.data.location.city);
    setTimezone(res.data.location.timezone);
    setIsp(res.data.isp);
    setLat(res.data.location.lat);
    setLng(res.data.location.lng);

    console.log(res);
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    let ip = e.currentTarget.ip.value;

    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
    );

    setIp(ip);
    setCity(res.data.location.city);
    setTimezone(res.data.location.timezone);
    setIsp(res.data.isp);
    setLat(res.data.location.lat);
    setLng(res.data.location.lng);
  };

  const MapWithNoSSR = dynamic(() => import("../components/MapView"), {
    ssr: false,
    loading: () => <h2>Loading...</h2>,
  });

  return (
    <div className="relative">
      <div>
        <Image src={patternImg} alt="Pattern image" width={1440} height={250} />

        <MapWithNoSSR
          lat={lat}
          lng={lng}
          city={city}
          ip={ip}
          timezone={timezone}
        />
      </div>

      <div className="flex w-full absolute top-10 z-9999 flex-col justify-center items-center">
        <div className="w-9/12">
          <div className="flex justify-center">
            <div className="w-full">
              <h1 className="font-bold text-3xl pb-4 text-white text-center">
                IP Address Tracker
              </h1>

              <form
                onSubmit={submit}
                className="flex items-center justify-center"
              >
                <div className="flex border justify-between w-6/12 bg-white rounded-r-lg rounded-l-lg mb-10">
                  <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    name="ip"
                    className="w-9/12 pl-5 focus:outline-none focus-within:bg-white border rounded-l-lg"
                  />
                  <button className="border-none text-white bg-black py-3 rounded-r-lg w-11 focus:outline-none">
                    {">"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Header ip={ip} city={city} timezone={timezone} isp={isp} />
        </div>
      </div>
    </div>
  );
}
