import React from "react";
import "./IPAddress";
import IPAddress from "./IPAddress";

export default function Exhibit({ image, title, displayIP }) {
  return (
    <div className="info">
      <figure>
        <img className="exhibit-img" src={image}></img>
      </figure>
      <header>
        <h1>{title}</h1>
      </header>
      {displayIP && (
        <>
          <p className="ipv4">
            IP v4 address: <IPAddress type="" />
          </p>
          <p className="ipv6">
            IP v6 address: <IPAddress type="64" />
          </p>
        </>
      )}
    </div>
  );
}
