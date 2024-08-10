import coverBadrany from '@/public/coverBadrany.svg';
import coverBadrany2 from '@/public/coverBadrany2.svg';
import coverAslam from '@/public/coverAslam.svg';

const data = {
  saudi: {
    name: "المملكة العربية السعودية",
    projects: [
      {
        name: "البدراني 1",
        cover: coverBadrany,
        images: [
          "@/public/badrany1.svg",
          "@/public/badrany2.svg",
          "@/public/badrany3.svg",
          "@/public/badrany4.svg",
        ],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        name: "البدراني 2",
        cover: coverBadrany2,
      },
      {
        name: "السلام 1",
        cover: coverAslam,
      },
    ],
  },
};

export { data };
