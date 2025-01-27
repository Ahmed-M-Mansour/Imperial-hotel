import Image from "next/image";

function CityCard({ city }) {
  return (
    <div className="w-full h-auto md:h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 flex flex-col md:flex-row p-6">
      {/* Right Part (50% width on desktop, full width on mobile) - Image Container */}
      <div className="w-full md:w-[50%] h-64 md:h-full flex items-center justify-center bg-gray-100 ">
        {/* Image Tag using next/image */}
        <div className="w-full h-full relative">
          {" "}
          {/* Container for the image */}
          <Image
            src={city?.secondBgImage ? city.secondBgImage?.src : city.bgImage?.src} // Use the image source from the city object
            alt={city.name} // Alt text for accessibility
            fill // Fill the container
            className="object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            priority // Optional: Prioritize loading for above-the-fold images
          />
        </div>
      </div>

      {/* Left Part (50% width on desktop, full width on mobile) - Content */}
      <div className="w-full md:w-[50%] h-full px-6 flex flex-col justify-between ">
        {/* City Name */}
        <h3 className="text-3xl font-bold font-almarai text-black mb-4">
          {city.name}
        </h3>

        {/* Full Description */}
        <p className="text-sm text-gray-600 font-almarai mb-4 leading-relaxed">
          {city.fullDesc}
        </p>

        <p className="text-base text-gray-600 almarai-bold mb-2">
          أشهر معالم {city.name}
        </p>

        {/* Top Places Section */}
        <div className="flex flex-wrap gap-4 mb-1">
          {city.topPlaces.map((place, i) => (
            <div
              key={i}
              className="flex-1 basis-[45%] md:basis-[30%] h-56 rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundImage: `url(${place.placeImage?.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Place Name */}
              <span className="absolute bottom-0 right-0 p-2 text-base text-white almarai-bold text-right group-hover:bg-opacity-60">
                {place.placename}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CityCard;
