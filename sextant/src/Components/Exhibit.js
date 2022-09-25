import React from "react";

export default function Exhibit({ image, title, body }) {
  return (
    <div className="info">
      <figure>
        <img className="exhibit-img" src={image}></img>
      </figure>
      <header>
        <h1>{title}</h1>
      </header>
      <p>{body}</p>
    </div>
  );
}
