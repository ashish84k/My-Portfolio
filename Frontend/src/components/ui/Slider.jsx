import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <div className="main-scroll">
        <div className="scroll">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="relative h-screen place-content-center gap-[10px] [perspective:1000px] overflow-hidden overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="box1"
            style={{
              "--i": 1,
              "--img":
                "url('https://i.pinimg.com/736x/c4/6a/91/c46a91a5fbd77d101529679ff4382dfc.jpg')",
            }}
          ></div>

          <div
            className="box1"
            style={{
              "--i": 1,
              "--img":
                "url('https://i.pinimg.com/736x/08/29/50/0829505131ca95758fa7af48b1f29b4f.jpg')",
            }}
          ></div>

          <div
            className="box1"
            style={{
              "--i": 1,
              "--img":
                "url('https://i.pinimg.com/1200x/6a/e1/e2/6ae1e2f04ca8a5c2e7bded6416da94e1.jpg')",
            }}
          ></div>

          <div
            className="box1"
            style={{
              "--i": 0,
              "--img":
                "url('https://i.pinimg.com/736x/fc/75/af/fc75af7f66199429850d1fb947191099.jpg')",
            }}
          ></div>

          <div
            className="box2"
            style={{
              "--i": 2,
              "--img":
                "url('https://i.pinimg.com/736x/92/25/0e/92250e8e7fd8088def70e4f8b5380dea.jpg')",
            }}
          ></div>

          <div
            className="box2"
            style={{
              "--i": 2,
              "--img":
                "url('https://i.pinimg.com/736x/52/06/ee/5206ee5c8a74e83f2b0b7e20b6cfc92b.jpg')",
            }}
          ></div>

          <div
            className="box2"
            style={{
              "--i": 2,
              "--img":
                "url('https://i.pinimg.com/736x/fe/58/20/fe58207b7b1a312cf6cc67050e3e5397.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
