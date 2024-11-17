import React from "react";
// ```import RateItem from "./RateItem";
import RateItem from "@/app/_components/RateItem"; 
import Icon1 from "@/public/rIcon1.svg";
import Icon2 from "@/public/rIcon2.svg";
import Icon3 from "@/public/rIcon3.svg";
import Icon4 from "@/public/rIcon4.svg";
import Icon5 from "@/public/rIcon5.svg";

function OurRate() {
  return (
    <div className="bg-aboutS mr-8 rounded-tr-3xl w-full flex flex-col text-center justify-center items-center p-6 py-12">
      <h1 className="text-gold font-almarai text-2xl leading-8 font-bold">
        {" "}
        قيــــــــمنا{" "}
      </h1>
      <p className=" font-almarai almarai-extrabold text-xl leading-10 py-2">
        {" "}
        القيم كالمنارات - يرشدوننا من خلال إعطائنا الإتجاه والمعني والغرض
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-5 p-12 gap-8">
        <RateItem
          icon={Icon5}
          title="النزاهة"
          description="نتمسّك بأعلى معايير الصدق والشفافية في جميع الممارسات التجارية."
        />
        <RateItem
          icon={Icon4}
          title="الاحترافية"
          description="نعتمد الاحترافية والمهارة في التعامل مع العملاء والمستأجرين والشركاء."
        />
        <RateItem
          icon={Icon3}
          title="خدمــة العميل"
          description="نعطي احتياجات وأهداف العملاء الاولوية، ونقدم خدمة استثنائية وحلول متخصصة."
        />
        <RateItem
          icon={Icon2}
          title="الـــــتفوق"
          description="نسعى جاهدين لتحقيق التميز في كل أشكال إدارة العقارات، وتحسين العمليات والنتائج بشكل مستمر."
        />
        <RateItem
          icon={Icon1}
          title="المسؤولية"
          description="نتحمل مسؤولياتنا، نَفي بالتزاماتنا ونرحب بالمساءلة عن النتائج الناجمة."
        />
      </div>
    </div>
  );
}

export default OurRate;
