import React from "react";
import RateItem from "./RateItem";
import Icon1 from "@/public/rIcon1.svg";
import Icon2 from "@/public/rIcon2.svg";
import Icon3 from "@/public/rIcon3.svg";
import Icon4 from "@/public/rIcon4.svg";
import Icon5 from "@/public/rIcon5.svg";

function OurRate() {
  return (
    <div className="bg-aboutS mr-8 rounded-tr-3xl flex flex-col justify-center items-center p-6 py-12">
      <h1 className="text-gold font-almarai text-2xl leading-8 font-bold">
        {" "}
        قيــــــــمنا{" "}
      </h1>
      <p className=" font-almarai font-extrabold text-xl leading-10 py-2">
        {" "}
        القيم كالمنارات - يرشدوننا من خلال إعطائنا الإتجاه والمعني والغرض
      </p>
      <div className="grid grid-cols-5 p-12 gap-8">
        <RateItem
          icon={Icon5}
          title="النزاهة"
          description="نتحمل مسؤوليتنا، نفي بالتزامتنا ونرحب بالمساءلة عن النتائج الناجمة"
        />
        <RateItem
          icon={Icon4}
          title="الاحترافية"
          description="نتحمل مسؤوليتنا، نفي بالتزامتنا ونرحب بالمساءلة عن النتائج الناجمة"
        />
        <RateItem
          icon={Icon3}
          title="خدمــة العميل"
          description="نتحمل مسؤوليتنا، نفي بالتزامتنا ونرحب بالمساءلة عن النتائج الناجمة"
        />
        <RateItem
          icon={Icon2}
          title="الـــــتفوق"
          description="نتحمل مسؤوليتنا، نفي بالتزامتنا ونرحب بالمساءلة عن النتائج الناجمة"
        />
        <RateItem
          icon={Icon1}
          title="المسؤولية"
          description="نتحمل مسؤوليتنا، نفي بالتزامتنا ونرحب بالمساءلة عن النتائج الناجمة"
        />
      </div>
    </div>
  );
}

export default OurRate;
