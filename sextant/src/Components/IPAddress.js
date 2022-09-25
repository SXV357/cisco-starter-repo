import React, { useState, useEffect } from "react";

export default function IPAddress(props) {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch(`https://api${props.type}.ipify.org?format=json`)
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip));
  }, []);

  return <div className="ip-address-container">{ipAddress}</div>;
}
