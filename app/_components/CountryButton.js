import React from "react";

function CountryButton({ country, selectedCountry, flagUrl, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-6 py-3 rounded-3xl transition-all text-center whitespace-nowrap font-almarai 
                ${
                  selectedCountry === country
                    ? "bg-gold text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                }`}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm">{country}</span>
        {country !== "الكل" && (
          <img src={flagUrl} alt={`${country} Flag`} className="w-5 h-3" />
        )}
      </div>
    </button>
  );
}

export default CountryButton;
