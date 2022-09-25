import React from "react";
import Banner from "./Components/Banner";
import Exhibit from "./Components/Exhibit";
import ip from "./Images/ip.jpg";
import latency from "./Images/latency.jpeg";

export default function App() {
  return (
    <>
      <Banner />
      <div className="info-container">
        <Exhibit image={ip} title="Data point 1" body="DP1 Content" />
        <Exhibit image={latency} title="Data point 2" body="DP2 Content" />
      </div>
    </>
  );
}
