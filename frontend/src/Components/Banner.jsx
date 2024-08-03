import React, { useState } from "react";
import "./Banner.css";
import { img1, img2, img3 } from "./index";

const img = [img1, img2, img3];

function Banner() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="flex overflow-hidden relative items-center p-2 mb-5">
        <button
          className="pre-btn"
          onClick={() => setCounter((i) => (i - 1 + img.length) % img.length)}
        >
          <p>&lt;</p>
        </button>
        <button
          className="next-btn"
          onClick={() => setCounter((i) => (i + 1) % img.length)}
        >
          <p>&gt;</p>
        </button>
        <img src={img[counter]} className="w-screen h-[500px] " />
      </div>
    </>
  );
}

export default Banner;
