import React from "react";

function CityCardGrid({ city, onClick, isActive }) {
  return (
    <div
      className={`${isActive ? "w-[600px]" : "w-[300px]"} h-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 relative cursor-pointer transition-all duration-500 ease-in-out`} // Added smooth transition
      style={{
        backgroundImage: `url(${city.bgImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick} // Handle click event
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-3xl my-3 font-semibold font-almarai text-white">{city.name}</h3>
        <p className="text-sm text-gray-200 mb-4 font-almarai">{city.description}</p>
      </div>
    </div>
  );
}

export default CityCardGrid;