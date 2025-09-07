import React from "react";

function Card({img , title , desc , item}) {
  return (
    <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          className="w-full h-36 object-cover transition-transform duration-300 hover:scale-105"
          src={img}
          alt="Card"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-1">
          {title}
        </h2>
        <p className="text-gray-600 text-xs mb-3 leading-snug">
          {desc}
        </p>

        {/* Button */}
        <button className="w-full py-1.5 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
