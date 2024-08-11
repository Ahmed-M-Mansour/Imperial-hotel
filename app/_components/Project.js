import ImageCarousel from "./ImageCarousel";

const Project = ({ Project }) => {
  return (
    <div
      className="mr-8 almarai rounded-tr-3xl flex flex-col gap-7 p-6 py-12"
      style={{
        direction: "rtl",
      }}
    >
      <h1 className="font-extrabold text-3xl">{Project.name}</h1>
      <p className="text-[#42526E]">{Project.description1}</p>
      <ImageCarousel images={Project.images} />
      <p className="text-[#42526E]">{Project.description2}</p>
      {Project.features && Project.features.length > 0 && (
        <>
          <p>استرخاء وراحة لا مثيل لها:</p>
          <ul className="list-disc">
            {Project.features.map((text, index) => (
              <li key={index} className="text-[#42526E]">
                {index+1}-{text}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="text-[#42526E]">{Project.description3}</p>
    </div>
  );
};

export default Project;
