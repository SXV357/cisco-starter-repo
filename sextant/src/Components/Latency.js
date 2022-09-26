import React, { useState, useEffect } from "react";

export default function Latency() {
  const ws = new WebSocket("ws://localhost:55455");
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    ws.onmessage = (message) => {
      setLatency(Date.now() - message.data)
    };
  }, []);

  return (
    <div className="latency-container">
      <p>Network Speed: {latency} ms</p>
    </div>
  );
}
