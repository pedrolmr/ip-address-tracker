import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

export default function Home() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [ip, setIp] = useState("");

  useEffect(async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
    );
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
    setLat(res.data.location.lat);
    setLng(res.data.location.lng);

    // console.log("new ip:", ip);
    // console.log("new lat:", lat);
    // console.log("new lng:", lng);
  };

  return (
    <>
      <Header lat={lat} lng={lng} ip={ip} />

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
