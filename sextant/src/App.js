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
        <Exhibit
          image={ip}
          title="Public IP Address"
          displayIP={true}
        />
        <Exhibit image={latency} title="Latency Information"/>
      </div>
    </>
  );
}
