"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import CountryButton from "../_components/CountryButton";
import CityCard from "../_components/CityCard";
import makahBg from "@/public/p_makah_bg.jpg";
import MadenahBg from "@/public/resizeable.webp";
import RiyadhBg from "@/public/p_riyadh_bg.png";
import KhobarBg from "@/public/p_khobar_bg.jpg";
import LondonBg from "@/public/p_london_bg.jpg";
import LiverBg from "@/public/p_liverball_bg.jpg";
import ManshesterBg from "@/public/p_lmanshester_bg.jpg";
import Duabaibg from "@/public/p_dubai_bg.jpg";
import AbuzabiBg from "@/public/p_abuzabi_bg.jpg";
import IstamboolBg from "@/public/p_istanbool_bg.jpg";
import AthenaBg from "@/public/p_athena_bg.jpg";
import RomaBg from "@/public/p_roma_bg.jpg";
import MillanoBg from "@/public/p_milano_bg.jpg";
import NabolyBg from "@/public/p_naboly_bg.jpg";
import CityCardGrid from "../_components/CityCardGrid";

function Destinations() {
  const [selectedCountry, setSelectedCountry] = useState("الكل");
  const [activeCards, setActiveCards] = useState({}); // Track active cards per row

  const citiesData = {
    "المملكة العربية السعودية": [
      {
        name: "مكة",
        description: "مدينة مقدسة يقصدها الملايين سنويًا لأداء مناسك الحج والعمرة.",
        fullDesc: "مكة المكرمة هي أقدس مدينة في الإسلام، تقع في غرب المملكة العربية السعودية. تحتضن الكعبة المشرفة في المسجد الحرام، التي تعد قبلة المسلمين حول العالم. تستقبل مكة ملايين الزوار سنويًا لأداء الحج والعمرة، وهي مدينة غنية بالتاريخ والثقافة الإسلامية.",
        topPlaces: [
          { placename: "جبل عرفات", placeImage: NabolyBg },
          { placename: "غار حراء", placeImage: NabolyBg },
          { placename: "الكعبة المشرفة", placeImage: NabolyBg },
        ],
        bgImage: makahBg,
        isDoubleWidth: true,
      },
      {
        name: "المدينة",
        description: "تحتضن المسجد النبوي الشريف مكانًا تاريخيًا يجمع بين الروحانية والهدوء.",
        fullDesc: "المدينة المنورة هي ثاني أقدس مدينة في الإسلام بعد مكة المكرمة، وتقع في غرب المملكة العربية السعودية. كانت تُعرف قديمًا باسم يثرب، وهي المدينة التي هاجر إليها النبي محمد ﷺ وأسس فيها أول مجتمع إسلامي. تضم المدينة المسجد النبوي، الذي يحتوي على الروضة الشريفة وقبر النبي ﷺ، وهي مقصد للمسلمين من جميع أنحاء العالم.",
        topPlaces: ["جبل أحد", "مسجد قباء", "المسجد النبوي"],
        bgImage: MadenahBg,
      },
      {
        name: "الرياض",
        description: "عاصمة المملكة ومركز رئيسي للأعمال والثقافة الحديثة.",
        fullDesc: "الرياض هي عاصمة المملكة العربية السعودية وأكبر مدنها، تقع في قلب المملكة وتُعتبر مركزًا سياسيًا واقتصاديًا وثقافيًا. تتميز الرياض بتطورها السريع وتحديث بنيتها التحتية، مما يجعلها من بين أكثر المدن الحديثة في المنطقة. تضم الرياض العديد من المعالم السياحية البارزة التي تعكس تراث المملكة وتطورها.",
        topPlaces: ["حي الدرعية التاريخي", "المتحف الوطني السعودي", "برج المملكة"],
        bgImage: RiyadhBg,
      },
      {
        name: "الخبر",
        description: "مدينة ساحلية تُعرف بشواطئها الخلابة ومرافقها الترفيهية.",
        fullDesc: "الخبر هي إحدى أبرز المدن في المنطقة الشرقية من المملكة العربية السعودية، وتُعرف بجمالها وحداثتها. تقع على ساحل الخليج العربي، مما يجعلها وجهة سياحية مميزة بفضل شواطئها الخلابة وأجوائها البحرية. تعتبر الخبر مركزًا تجاريًا وسياحيًا مزدهرًا، حيث تحتضن العديد من المعالم الترفيهية والثقافية، بالإضافة إلى كونها مدينة عائلية بامتياز.",
        topPlaces: ["جسر الملك فهد", "مجمع الظهران التجاري", "كورنيش الخبر"],
        bgImage: KhobarBg,
      },
    ],
    "المملكة المتحدة": [
      {
        name: "لندن",
        fullDesc: "العاصمة",
        topPlaces: ["برج لندن", "عين لندن", "قصر باكنغهام"],
        description: "مدينة عالمية تجمع بين التاريخ العريق والمعالم الشهيرة مثل بيغ بن وعين لندن.",
        bgImage: LondonBg,
        isDoubleWidth: true,
      },
      {
        name: "ليفربول",
        fullDesc: "المدينة الثانية",
        topPlaces: ["مكتبة برمنغهام", "قناة برمنغهام", "متحف برمنغهام"],
        description: "مهد فرقة البيتلز ووجهة لعشاق كرة القدم والفنون.",
        bgImage: LiverBg,
      },
      {
        name: "مانشستر سيتي",
        fullDesc: "مدينة صناعية",
        topPlaces: ["ملعب أولد ترافورد", "متاحف مانشستر", "قناة مانشستر"],
        bgImage: ManshesterBg,
        description: "مدينة نابضة بالحياة الرياضية والثقافية والمراكز التسوقية.",
      },
    ],
    "الإمارات العربية المتحدة": [
      {
        name: "دبي",
        description: "وجهة سياحية عالمية معروفة بمعالمها المبهرة مثل برج خليفة وجزر النخيل.",
        topPlaces: ["برج خليفة", "دبي مول", "نخلة جميرا"],
        bgImage: Duabaibg,
        isDoubleWidth: true,
      },
      {
        name: "أبو ظبي",
        description: "العاصمة الثقافية والاقتصادية، موطن مسجد الشيخ زايد الكبير.",
        topPlaces: ["مسجد الشيخ زايد", "قصر الإمارات", "جزيرة ياس"],
        bgImage: AbuzabiBg,
      },
    ],
    تركيا: [
      {
        name: "إسطنبول",
        description: "مدينة القارتين",
        topPlaces: ["آيا صوفيا", "المسجد الأزرق", "قصر توبكابي"],
        bgImage: IstamboolBg,
        isDoubleWidth: true,
      },
    ],
    اليونان: [
      {
        name: "أثينا",
        description: "العاصمة التاريخية",
        topPlaces: ["الأكروبوليس", "متحف الأكروبوليس", "حي بلاكا"],
        bgImage: AthenaBg,
        isDoubleWidth: true,
      },
    ],
    بلجيكا: [
      {
        name: "بروكسل",
        description: "عاصمة أوروبا",
        topPlaces: ["الساحة الكبرى", "ذرة بروكسل", "قصر العدل"],
      },
      {
        name: "أنتويرب",
        description: "مدينة الألماس",
        topPlaces: ["كاتدرائية أنتويرب", "متحف الألماس", "سوق أنتويرب"],
      },
      {
        name: "بروج",
        description: "مدينة القرون الوسطى",
        topPlaces: ["ساحة السوق", "برج الجرس", "قنوات بروج"],
      },
      {
        name: "غنت",
        description: "مدينة تاريخية",
        topPlaces: ["قلعة غرافنستين", "كاتدرائية سانت بافو", "سوق غنت"],
      },
    ],
    قطر: [
      {
        name: "الدوحة",
        description: "عاصمة قطر",
        topPlaces: ["سوق واقف", "متحف الفن الإسلامي", "كورنيش الدوحة"],
      },
      {
        name: "الوكرة",
        description: "مدينة ساحلية",
        topPlaces: ["شاطئ الوكرة", "سوق الوكرة", "حديقة الوكرة"],
      },
      {
        name: "الخور",
        description: "مدينة شمالية",
        topPlaces: ["خور العديد", "متحف الخور", "سوق الخور"],
      },
      {
        name: "لوسيل",
        description: "مدينة حديثة",
        topPlaces: ["ملعب لوسيل", "حديقة لوسيل", "سوق لوسيل"],
      },
    ],
    مصر: [
      {
        name: "القاهرة",
        description: "عاصمة مصر",
        topPlaces: ["الأهرامات", "المتحف المصري", "قلعة صلاح الدين"],
      },
      {
        name: "الإسكندرية",
        description: "ميناء البحر الأبيض المتوسط",
        topPlaces: ["قلعة قايتباي", "مكتبة الإسكندرية", "شاطئ المنتزه"],
      },
      {
        name: "الجيزة",
        description: "موطن الأهرامات",
        topPlaces: ["أبو الهول", "هرم خفرع", "هرم منقرع"],
      },
      {
        name: "الأقصر",
        description: "مدينة تاريخية",
        topPlaces: ["معبد الكرنك", "وادي الملوك", "معبد الأقصر"],
      },
    ],
  };

  // Get the list of countries
  const countryList = ["الكل", ...Object.keys(citiesData)];

  // Filter cities based on the selected country
  const filteredCities =
    selectedCountry === "الكل"
      ? citiesData
      : { [selectedCountry]: citiesData[selectedCountry] || [] };

  // Map country names to flag URLs (using Flagpedia)
  const countryFlags = {
    "المملكة العربية السعودية": "https://flagcdn.com/sa.svg", // Saudi Arabia
    "المملكة المتحدة": "https://flagcdn.com/gb.svg", // United Kingdom
    "الإمارات العربية المتحدة": "https://flagcdn.com/ae.svg", // United Arab Emirates
    تركيا: "https://flagcdn.com/tr.svg", // Turkey
    اليونان: "https://flagcdn.com/gr.svg", // Greece
    بلجيكا: "https://flagcdn.com/be.svg", // Belgium
    قطر: "https://flagcdn.com/qa.svg", // Qatar
    مصر: "https://flagcdn.com/eg.svg", // Egypt
  };

 // Initialize activeCards state with the first item in each row as active
 useEffect(() => {
    const initialActiveCards = {};
    Object.entries(filteredCities).forEach(([_, cities], rowIndex) => {
      const rowId = `row-${rowIndex}`;
      initialActiveCards[rowId] = 0; // Set the first item as active by default
    });
    setActiveCards(initialActiveCards);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to handle card clicks
  const handleCardClick = (rowId, index) => {
    setActiveCards((prev) => ({
      ...prev,
      [rowId]: index, // Update the active card for the specific row
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
            const rowId = `row-${rowIndex}`; // Unique identifier for each row
            return (
              <div key={rowId} className="p-6 rounded-lg mb-6">
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
                    <h2 className="text-2xl font-bold font-almarai">{country}</h2>
                    <img
                      src={countryFlags[country]}
                      alt={`${country} Flag`}
                      className="w-8 h-6 flag-wave"
                    />
                  </div>
                </div>

                {selectedCountry === "الكل" ? (
                  // Grid layout for "الكل"
                  <div className="flex overflow-x-auto scroll-container">
                    <div
                      className="flex gap-4"
                      style={{ minWidth: `${cities.length * 320}px` }}
                    >
                      {cities.map((city, index) => (
                        <CityCardGrid
                          key={index}
                          city={city}
                          isActive={activeCards[rowId] === index} // Check if this card is active in its row
                          onClick={() => handleCardClick(rowId, index)} // Pass rowId and index to handle click
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  // List layout for specific country
                  <div className="space-y-4">
                    {cities.map((city, index) => (
                      <CityCard key={index} city={city} />
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