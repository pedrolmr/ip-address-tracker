import { useState, useEffect } from "react";
// import Header from "../components/Header";
import Header from "../components/Header";
import Map from "../components/Map";
import axios from "axios";

export default function Home() {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [ip, setIp] = useState("");

  useEffect(async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
    );
    console.log(res);
    setCity(res.data.location.city);
    setTimezone(res.data.location.timezone);
    setIsp(res.data.isp);
    setLat(res.data.location.lat);
    setLng(res.data.location.lng);
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

  return (
    <>
      <Header ip={ip} city={city} timezone={timezone} isp={isp} />
      <Map lat={lat} lng={lng} />

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
    </>
  );
}
