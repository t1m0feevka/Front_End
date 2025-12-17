import React from "react";

function GoodsCard({ name, price, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "180px",
        textAlign: "center",
      }}
    >
      <img src={image} alt={name} width={150} height={150} />
      <h3>{name}</h3>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
