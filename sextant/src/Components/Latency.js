import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default function Latency() {
  const ws = new W3CWebSocket("ws://localhost:55455");
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
