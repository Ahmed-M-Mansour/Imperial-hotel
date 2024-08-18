import coverBadrany from "@/public/coverBadrany.svg";
import coverBadrany2 from "@/public/coverBadrany.svg";
import coverAslam from "@/public/coverAslam.svg";
import coverWahadat from "@/public/coverWahadat.svg";
import coverAhram from "@/public/coverAhram.svg";
import coverNile from "@/public/coverNile.svg";
import coverLondon from "@/public/LondonCover.svg";
import coverEng from "@/public/engCover.svg";
import coverDabab from "@/public/dababCover.svg";
import badrany1 from "@/public/badrany1.svg";
import badrany2 from "@/public/badrany2.svg";
import badrany3 from "@/public/badrany3.svg";
import badrany4 from "@/public/badrany4.svg";
import Wahadat1 from "@/public/wahadat-1.jpg";
import Wahadat2 from "@/public/wahadat-2.jpg";
import Wahadat3 from "@/public/wahadat-3.jpg";
import Wahadat4 from "@/public/wahadat-4.jpg";
import Aslam1 from "@/public/Aslam1.jpg";
import Aslam2 from "@/public/Aslam2.jpg";
import Aslam3 from "@/public/Aslam3.jpg";
import Aslam4 from "@/public/Aslam4.jpg";
import Ahram1 from "@/public/Ahram-1.jpg";
import Ahram2 from "@/public/Ahram-2.jpg";
import Ahram3 from "@/public/Ahram-3.jpg";
import Ahram4 from "@/public/Ahram-4.jpg";
import Nile1 from "@/public/Nile-1.jpg";
import Nile2 from "@/public/Nile-2.jpg";
import Nile3 from "@/public/Nile-3.jpg";
import Nile4 from "@/public/Nile-4.jpg";
import London1 from "@/public/London-1.jpg";
import London2 from "@/public/London-2.jpg";
import London3 from "@/public/London-3.jpg";
import London4 from "@/public/London-4.jpg";
import Eng1 from "@/public/Eng-1.jpg";
import Eng2 from "@/public/Eng-2.jpg";
import Eng3 from "@/public/Eng-3.jpg";
import Eng4 from "@/public/Eng-4.jpg";
import Dabab1 from "@/public/Dabab-1.jpg";
import Dabab2 from "@/public/Dabab-2.jpg";
import Dabab3 from "@/public/Dabab-3.jpg";
import Dabab4 from "@/public/Dabab-4.jpg";
import badrany2I1 from "@/public/badrany2-1.jpg";
import badrany2I2 from "@/public/badrany2-2.jpg";
import badrany2I3 from "@/public/badrany2-3.jpg";
import badrany2I4 from "@/public/badrany2-4.jpg";
import Member1 from "@/public/member1.svg";
import Member2 from "@/public/member2.svg";
import Member3 from "@/public/member3.svg";
import Member4 from "@/public/member4.svg";
import User1 from "@/public/user1.svg";
import User2 from "@/public/User2.svg";
import User3 from "@/public/user3.svg";
import User4 from "@/public/User4.jpg";
import User5 from "@/public/User5.jpg";
import User6 from "@/public/User6.jpg";
import User7 from "@/public/User7.jpg";

const Members = [
  {
    id: 0,
    Image: Member1,
    name: "سعــــــــد عادل",
    type: "مدير الحساب",
  },
  {
    id: 1,
    Image: Member2,
    name: "مـــــــهاب إمام",
    type: "إدارة الأربـــاح",
  },
  {
    id: 2,
    Image: Member3,
    name: "محمـــد الصـــاوي ",
    type: "مدير خدمة العملاء",
  },
  {
    id: 3,
    Image: Member4,
    name: "فتحـــــــــــي الصـــاوي",
    type: "المدير التنفيذي",
  },
];

const data = {
  saudi: {
    name: "المملكة العربية السعودية",
    projects: [
      {
        id: 0,
        name: "البدراني 1",
        coverUrl: "/CoverBadrany1.svg",
        cover: coverBadrany,
        images: [badrany1, badrany2, badrany3, badrany4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 1,
        name: "البدراني 2",
        coverUrl: "/CoverBadrany2.jpg",
        cover: coverBadrany2,
        images: [badrany2I1, badrany2I2, badrany2I3, badrany2I4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 2,
        name: "السلام 1",
        cover: coverAslam,
        coverUrl: "/CoverAslam.jpg",
        images: [Aslam1, Aslam2, Aslam3, Aslam4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [
          "يمكنك الاسترخاء في غرف النوم الفسيحة لدينا، والتي تضم كل منها حمامًا داخليًا فاخرًا لتوفير الخصوصية المطلقة.",
          "ابق على اتصال مع شبكة Wi-Fi عالية السرعة.",
          "كل غرفه بمكيف خاص لتغلب علي حرارة المدينة.",
          "كل غرفة مجهزه باجهزة تلفاز لاستمتاع ببرامجك المفضلة.",
        ],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
    ],
  },
  misr: {
    name: "مصر",
    projects: [
      {
        id: 0,
        name: "وحدات مصر",
        coverUrl: "/wahadatCover.jpg",
        cover: coverWahadat,
        images: [Wahadat1, Wahadat2, Wahadat3, Wahadat4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 1,
        name: "قصر إطلالة الأهرام",
        cover: coverAhram,
        coverUrl: "/AhramCover.jpg",
        images: [Ahram1, Ahram2, Ahram3, Ahram4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 2,
        name: "منتجع واحة النيل",
        cover: coverNile,
        coverUrl: "/NileCover.jpg",
        images: [Nile1, Nile2, Nile3, Nile4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [
          "يمكنك الاسترخاء في غرف النوم الفسيحة لدينا، والتي تضم كل منها حمامًا داخليًا فاخرًا لتوفير الخصوصية المطلقة.",
          "ابق على اتصال مع شبكة Wi-Fi عالية السرعة.",
          "كل غرفه بمكيف خاص لتغلب علي حرارة المدينة.",
          "كل غرفة مجهزه باجهزة تلفاز لاستمتاع ببرامجك المفضلة.",
        ],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
    ],
  },
  england: {
    name: "الممــــــلكة المتحدة",
    projects: [
      {
        id: 0,
        name: "حديقة لندن الفاخرة",
        cover: coverLondon,
        coverUrl: "/coverLondon.jpg",
        images: [London1, London2, London3, London4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 1,
        name: "فندق ريفي إنجلترا",
        cover: coverEng,
        coverUrl: "/CoverEng.jpg",
        images: [Eng1, Eng2, Eng3, Eng4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
      {
        id: 2,
        name: "منتجع الضباب البريطاني",
        cover: coverDabab,
        coverUrl: "/coverDabab.jpg",
        images: [Dabab1, Dabab2, Dabab3, Dabab4],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [
          "يمكنك الاسترخاء في غرف النوم الفسيحة لدينا، والتي تضم كل منها حمامًا داخليًا فاخرًا لتوفير الخصوصية المطلقة.",
          "ابق على اتصال مع شبكة Wi-Fi عالية السرعة.",
          "كل غرفه بمكيف خاص لتغلب علي حرارة المدينة.",
          "كل غرفة مجهزه باجهزة تلفاز لاستمتاع ببرامجك المفضلة.",
        ],
        description3:
          "قم بإعداد المأكولات اللذيذة في المطبخ المجهز بالكامل.\nابق على اتصال: نضمن لك شبكة Wi-Fi عالية السرعة إمكانية البقاء على اتصال مع أحبائك أو بث برامجك المفضلة أثناء فترة توقفك عن العمل.\nيوفر ملاذ المذينب هذا مزيجًا مثاليًا من الأناقة والراحة والعملية.",
      },
    ],
  },
};

const testimonials = [
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أحمد أشرف",
      type: "كاتب",
      image: User1,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أميرة أكرم",
      type: "مبرمجة",
      image: User2,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أميرة أكرم",
      type: "مبرمجة",
      image: User3,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أحمد الفارسي",
      type: "كاتب",
      image: User4,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "عمر الخالدي",
      type: "مبرمج",
      image: User5,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "سامي الجابري",
      type: "مبرمج",
      image: User6,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "خالد البكري",
      type: "كاتب",
      image: User7,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أميرة أكرم",
      type: "مبرمجة",
      image: User2,
    },
  },
  {
    text: "النص الكامل للوريم إيبسوم هو مجرد تسلسل عشوائي من الكلمات والجمل باللغة اللاتينية، وهو لا يحمل أي معنى محدد. يُستخدم هذا النص في الصناعات المطبعية.",
    user: {
      name: "أميرة أكرم",
      type: "مبرمجة",
      image: User3,
    },
  },
];

export { data, Members, testimonials };
