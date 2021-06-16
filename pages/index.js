import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import Header from "../components/Header";
import Header from "../components/Header";
// import MapView from "../components/MapView";
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

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
    );

    setIp(e.target.ip.value);

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
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          name="ip"
          value={ip}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>

      <Header ip={ip} city={city} timezone={timezone} lat={lat} lng={lng} />
      <MapWithNoSSR
        lat={lat}
        lng={lng}
        city={city}
        ip={ip}
        timezone={timezone}
      />
    </>
  );
}
