import React from "react";
import GoodsCard from "./GoodsCard";

const goods = [
  { name: "Apple iPhone 17 Pro Max 256GB", price: 69999, image: "https://mobileplanet.ua/uploads/product/2025-9-11/apple-iphone-17-pro-max-256gb-deep-blue-mfyp4-354276.webp" },
  { name: "Ноутбук ASUS ROG Strix G18", price: 84999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZe6PvvkLF5PdcTjRh6yOU_6YgJ6BsOP2Bw&s" },
  { name: "Гарнітура JBL LIVE 770NC Black", price: 4999, image: "https://content1.rozetka.com.ua/goods/images/big/429519064.jpg" },
  { name: "Миша бездротова ігрова Logitech G PRO 2 LightSpeed", price: 5799, image: "https://content2.rozetka.com.ua/goods/images/big/594815351.jpg" },
  { name: "Клавіатура дротова Hator Rockfall 2 Mecha TKL", price: 1499, image: "https://content.rozetka.com.ua/goods/images/big/381562125.jpg" },
  { name: "Монітор 57 Samsung Odyssey Neo G9", price: 83999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOnlmCpJbjuvc094KS2yztMOj4JJcuTyBew&s" },
];

function Gallery() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
