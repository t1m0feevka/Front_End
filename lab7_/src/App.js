import React from "react";
import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import Gallery from "./Gallery";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Header title="Степанчук Тимофій Вадимович" />
      <Content />
      <Image
        initialSrc="https://www.advantour.com/img/georgia/images/tbilisi.jpg"
        alt="Тбілісі"
      />

      <h2 style={{ marginTop: "40px" }}>Галерея товарів</h2>
      <Gallery />
    </div>
  );
}

export default App;
