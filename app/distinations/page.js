"use client";

import React, { useEffect, useState } from "react";

import Navbar from "../_components/Navbar";
import CountryButton from "../_components/CountryButton";
import CityCardGrid from "../_components/CityCardGrid";
import CityCard from "../_components/CityCard";
import { citiesData, countryFlags } from "@/constants";

function Destinations() {
  const [selectedCountry, setSelectedCountry] = useState("الكل");
  const [activeCards, setActiveCards] = useState({});

  const countryList = ["الكل", ...Object.keys(citiesData)];

  const filteredCities =
    selectedCountry === "الكل"
      ? citiesData
      : { [selectedCountry]: citiesData[selectedCountry] || [] };

  useEffect(() => {
    const initialActiveCards = {};
    Object.entries(filteredCities).forEach(([_, cities], rowIndex) => {
      const rowId = `row-${rowIndex}`;
      initialActiveCards[rowId] = 0;
    });
    setActiveCards(initialActiveCards);
  }, []);

  const handleCardClick = (rowId, index) => {
    setActiveCards((prev) => ({
      ...prev,
      [rowId]: index,
    }));
  };

  return (
    <>
      <Navbar
        isHome={false}
        isFullHeight={true}
        bgClassName="distinations-bg"
        title="وجهاتنا"
        desc="الرئيســـية / وجهاتنا"
      />
      <div dir="rtl">
        <div className="text-center my-5" style={{ marginTop: "40px" }}>
          <div className="flex flex-wrap gap-2 w-full">
            {countryList.map((country) => (
              <CountryButton
                key={country}
                country={country}
                selectedCountry={selectedCountry}
                flagUrl={countryFlags[country]}
                onClick={() => setSelectedCountry(country)}
              />
            ))}
          </div>
        </div>

        <div className="p-5">
          {Object.entries(filteredCities).map(([country, cities], rowIndex) => {
            const rowId = `row-${rowIndex}`;
            return (
              <div key={rowId} className="p-6 rounded-lg mb-6">
                {selectedCountry === "الكل" ? (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="rounded-[16px] p-4 bg-[#C8C8C833] flex items-center gap-2 w-full"
                        style={{
                          borderRadius: "16px",
                          padding: "16px",
                          gap: "8px",
                          backgroundColor: "#C8C8C833",
                        }}
                      >
                        <h2 className="text-2xl font-bold font-almarai">
                          {country}
                        </h2>
                        <img
                          src={countryFlags[country]}
                          alt={`${country} Flag`}
                          className="w-8 h-6 flag-wave"
                        />
                      </div>
                    </div>
                    <div className="flex overflow-x-auto scroll-container">
                      <div
                        className="flex gap-4"
                        style={{ minWidth: `${cities.length * 320}px` }}
                      >
                        {cities.map((city, index) => (
                          <CityCardGrid
                            key={index}
                            city={city}
                            isActive={activeCards[rowId] === index}
                            onClick={() => handleCardClick(rowId, index)}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    {cities.map((city, index) => (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="rounded-[16px] p-4 bg-[#C8C8C833] flex items-center gap-2 w-full"
                            style={{
                              borderRadius: "16px",
                              padding: "16px",
                              gap: "8px",
                              backgroundColor: "#C8C8C833",
                            }}
                          >
                            <h2 className="text-2xl font-bold font-almarai">
                              {city.name}
                            </h2>
                          </div>
                        </div>
                        <CityCard key={index} city={city} />
                      </>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Destinations;
