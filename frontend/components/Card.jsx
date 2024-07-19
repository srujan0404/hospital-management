import React from "react";

const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
