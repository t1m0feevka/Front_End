import React, { useState } from "react";

function Image({ initialSrc, alt }) {
  const [src, setSrc] = useState(initialSrc);
  const [size, setSize] = useState(500);
  const [visible, setVisible] = useState(true);

  const addImage = () => setVisible(true);
  const removeImage = () => setVisible(false);
  const increase = () => setSize(size + 50);
  const decrease = () => setSize(size - 50);

  if (!visible) return (
    <div className="buttons" style={{ marginTop: "10px" }}>
      <button onClick={addImage}>Додати зображення</button>
    </div>
  );

  return (
    <div>
      <a href="https://www.tbiliso.com.ua" target="_blank" rel="noreferrer">
        <img src={src} alt={alt} width={size} />
      </a>
      <div className="buttons" style={{ marginTop: "10px" }}>
        <button onClick={addImage} style={{ marginRight: "5px" }}>Додати</button>
        <button onClick={increase} style={{ marginRight: "5px" }}>Збільшити</button>
        <button onClick={decrease} style={{ marginRight: "5px" }}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
