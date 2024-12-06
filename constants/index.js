import coverBadrany from "@/public/coverBadrany.svg";
import coverBadrany2 from "@/public/coverBadrany2.svg";
import coverAslam from "@/public/coverAslam.svg";
import coverHotel from "@/public/hotelCover.svg";
import coverAhram from "@/public/coverAhram.svg";
import coverLondon from "@/public/LondonCover.svg";
import coverEng from "@/public/engCover.svg";
import coverDabab from "@/public/dababCover.svg";
import badrany1 from "@/public/badrany1.jpg";
import badrany2 from "@/public/badrany2.jpg";
import badrany3 from "@/public/badrany3.jpg";
import badrany4 from "@/public/badrany4.jpg";
import badrany5 from "@/public/badrany5.jpg";
import badrany6 from "@/public/badrany6.jpg";
import badrany7 from "@/public/badrany7.jpg";
import Hotel1 from "@/public/hotel-1.jpg";
import Hotel2 from "@/public/hotel-2.jpg";
import Hotel3 from "@/public/hotel-3.jpg";
import Hotel4 from "@/public/hotel-4.jpg";
import Hotel5 from "@/public/hotel-5.jpg";
import Hotel6 from "@/public/hotel-6.jpg";
import Hotel7 from "@/public/hotel-7.jpg";
import Aslam1 from "@/public/Aslam1.jpg";
import Aslam2 from "@/public/Aslam2.jpg";
import Aslam3 from "@/public/Aslam3.jpg";
import Aslam4 from "@/public/Aslam4.jpg";
import Aslam5 from "@/public/Aslam5.jpg";
import Aslam6 from "@/public/Aslam6.jpg";
import Aslam7 from "@/public/Aslam7.jpg";
import Ahram1 from "@/public/Ahram-1.jpg";
import Ahram2 from "@/public/Ahram-2.jpg";
import Ahram3 from "@/public/Ahram-3.jpg";
import Ahram4 from "@/public/Ahram-4.jpg";
import Ahram5 from "@/public/Ahram-5.jpg";
import Ahram6 from "@/public/Ahram-6.jpg";
import London1 from "@/public/London-1.jpg";
import London2 from "@/public/London-2.jpg";
import London3 from "@/public/London-3.jpg";
import London4 from "@/public/London-4.jpg";
import London5 from "@/public/London-5.jpg";
import London6 from "@/public/London-6.jpg";
import London7 from "@/public/London-7.jpg";
import Eng1 from "@/public/Eng-1.jpg";
import Eng2 from "@/public/Eng-2.jpg";
import Eng3 from "@/public/Eng-3.jpg";
import Eng4 from "@/public/Eng-4.jpg";
import Eng5 from "@/public/Eng-5.jpg";
import Eng6 from "@/public/Eng-6.jpg";
import Eng7 from "@/public/Eng-7.jpg";
import Eng8 from "@/public/Eng-8.jpg";
import ManCity1 from "@/public/ManCity-1.jpg";
import ManCity2 from "@/public/ManCity-2.jpg";
import ManCity3 from "@/public/ManCity-3.jpg";
import ManCity4 from "@/public/ManCity-4.jpg";
import ManCity5 from "@/public/ManCity-5.jpg";
import ManCity6 from "@/public/ManCity-6.jpg";
import ManCity7 from "@/public/ManCity-7.jpg";
import ManCity8 from "@/public/ManCity-8.jpg";
import badrany2I1 from "@/public/badrany2-1.jpg";
import badrany2I2 from "@/public/badrany2-2.jpg";
import badrany2I3 from "@/public/badrany2-3.jpg";
import badrany2I4 from "@/public/badrany2-4.jpg";
import badrany2I5 from "@/public/badrany2-5.jpg";
import badrany2I6 from "@/public/badrany2-6.jpg";
import badrany2I7 from "@/public/badrany2-7.jpg";
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
        images: [
          badrany1,
          badrany2,
          badrany3,
          badrany4,
          badrany5,
          badrany6,
          badrany7,
        ],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب، المدينة المنورة.",
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
        images: [
          badrany2I1,
          badrany2I2,
          badrany2I3,
          badrany2I4,
          badrany2I5,
          badrany2I6,
          badrany2I7,
        ],
        description1:
          "أستمتع بإقامة فاخرة، مناسبة تمامًا للاسترخاء في حي مذينب، المدينة المنورة.",
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
        images: [Aslam1, Aslam2, Aslam3, Aslam4, Aslam5, Aslam6, Aslam7],
        description1:
          "أقامتك الفاخرة الآن على بعد 10 دقائق بالسيارة فقط عن المسجد النبوي.",
        description2:
          "حيث تتميز وحداتنا الرائعة بتصميم جمالي حديث، مما يخلق أجواء أنيقة وعصرية التي تساعدك علي الاسترخاء في غرف النوم الفسيحة التي تتميز بأسرّة فخمة وجذابة للاستمتاع بنوم مريح حقًا أثناء الليل.",
        features: [
          "يمكنك الاسترخاء في غرف النوم الفسيحة لدينا، والتي تضم كل منها حمامًا داخليًا فاخرًا لتوفير الخصوصية المطلقة.",
          "ابق على اتصال مع شبكة Wi-Fi عالية السرعة.",
          "كل غرفه بمكيف خاص لتغلب علي حرارة المدينة.",
          "كل غرفة مجهزه باجهزة تلفاز لاستمتاع ببرامجك المفضلة.",
        ],
        description3: "",
      },
    ],
  },
  misr: {
    name: "مصر",
    projects: [
      {
        id: 0,
        name: "غرفة فندقية بمغطس ساخن",
        coverUrl: "/wahadatCover.jpg",
        cover: coverHotel,
        images: [Hotel1, Hotel2, Hotel3, Hotel4, Hotel5, Hotel6, Hotel7],
        description1: "وحدات فاخرة بالقرب من الأهرامات.",
        description2:
          "تعد وحداتنا مكانًا خاصًا للاسترخاء والاستمتاع بالمناظر الرائعة والساحرة لأهرامات الجيزة. بعد الاسترخاء في الجاكوزي المريح مع الإطلالة.",
        features: [
          "تتميز الغرفة المميزة بنظام إضاءة وغرفة نظيفة مشرقة مع فندق سريع ومياه دافئة في الجاكوزي.",
          "يوجد مطبخ صغير مزود بـ الأطباق والأواني الفضية والملاعق والشوك والسكاكين والميكروويف والغلاية والعديد من مستلزمات المطبخ.",
          "العديد من فوط الفندق الطازجة المغسولة والمصنوعة من القطن المصري الخالص.",
          "خدمة الواي فاي المجانية وتلفزيون مع قنوات الكابل.",
        ],
        description3:
          "يمكنك الوصول بسهولة إلى الأهرامات في غضون 5 دقائق سيرًا على الأقدام من فندقنا. لا تنس أن تسأل عن رحلاتنا والجولات الخاصة. أننا نجعلها خاصة بالنسبة لك.",
      },
      {
        id: 1,
        name: "شقة عائلية بإطلالة الأهرامات",
        cover: coverAhram,
        coverUrl: "/AhramCover.jpg",
        images: [Ahram1, Ahram2, Ahram3, Ahram4, Ahram5, Ahram6],
        description1: "مساكن فاخرة بالقرب من الأهرامات.",
        description2:
          "تخيل أنك تستيقظ على المنظر المذهل أهرامات الجيزة التي تطل من نافذتك. إمبريال هوست تساعدك في العثور على الفندق المثالي لمغامرة مصرية لا تنسى، حيث تضعك في قلب الحدث!",
        features: [],
        description3:
          "اخرج من مسكنك لتجد نفسك وسط الطاقة النابضة بالحياة في الحي المحلي.  استكشف المقاهي الساحرة حيث يمكنك تذوق القهوة والمعجنات الطازجة.  انغمس في وجبة لذيذة في أحد المطاعم المحلية، أو احصل على البقالة الطازجة لتناول وجبة غداء في نزهة مطلة على الأهرامات. يوفر هذا الجو المفعم بالحيوية نافذة على الحياة المصرية الأصيلة، مما يضيف بعدًا فريدًا لرحلتك.",
        description4: "معًا، لنصنع تجربة مصرية لن تنساها أبدًا!",
      },
    ],
  },
  england: {
    name: "الممــــــلكة المتحدة",
    projects: [
      {
        id: 0,
        name: "لندن الفاخرة",
        cover: coverLondon,
        coverUrl: "/coverLondon.jpg",
        images: [London1, London2, London3, London4, London5, London6, London7],
        description1: "ستشعر بالدفء في منزل لندن العصري!",
        description2:
          "يقع المنزل في موقع مركزي في لندن الكبرى - ويستضيف بسهولة ما يصل إلى 7 ضيوف. منزل عائلي مثالي، المنزل مليء بوسائل الراحة المتميزة. توفر 3 غرف نوم مريحة للغاية وحمام واحد بالإضافة إلى مرحاض واحد ومطبخ واسع ومساحة معيشة نابضة بالحياة",
        features: [
          "إجلس واسترخي بينما تستمتع بأفضل المرافق",
          "هذا المنزل الحديث يلبي جميع احتياجاتك!",
          "ديكور حديث وأثاث أنيق وأجواء مريحة",
        ],
        description3:
          "كل شيء في هذا المنزل يدعوك إلى نسيان كل المخاوف والعيش في الوقت الحالي. يقع المنزل في موقع متميز جدًا",
      },
      {
        id: 1,
        name: "ليفربول",
        cover: coverEng,
        coverUrl: "/CoverEng.jpg",
        images: [Eng1, Eng2, Eng3, Eng4, Eng5, Eng6, Eng7, Eng8],
        description1:
          "منزل مريح يوفر لك إقامة مريحة داخل ليفربول. قريب جدًا من مناطق الجذب والمعالم الرئيسية في ليفربول بالإضافة إلى وجود العديد من المطاعم القريبة. وصلات النقل على بعد دقائق قليلة.",
        description2:
          "استمتع بهذا المنزل الفسيح بأكمله، الذي تم تجديده حديثًا، ويتمتع بموقع مركزي مثالي.",
        features: [
          "إجلس واسترخي بينما تستمتع بأفضل المرافق",
          "هذا المنزل الحديث يلبي جميع احتياجاتك!",
          "ديكور حديث وأثاث أنيق وأجواء مريحة",
        ],
        description3:
          "يتدفق الضوء الطبيعي من خلال النوافذ ويضيء المنزل بأكمله. كل شيء في هذا المنزل يدعوك إلى نسيان كل المخاوف والعيش في الوقت الحالي.",
      },
      {
        id: 2,
        name: "مانشستر سيتي",
        cover: coverDabab,
        coverUrl: "/coverDabab.jpg",
        images: [
          ManCity1,
          ManCity2,
          ManCity3,
          ManCity4,
          ManCity5,
          ManCity6,
          ManCity7,
          ManCity8,
        ],
        description1: "استمتع بإقامة ممتعة في هذه الشقة الحديثة المليئة بجميع وسائل الراحة الضرورية. موقع مركزي في ميرسيسايد .ارتشف الشاي وأنت تشاهد مناظر المدينة الصاخبة عبر النوافذ الزجاجية كاملة الطول في مساحة المعيشة.",
        description2: "صالة مشرقة مع مطبخ مفتوح ومساحة لتناول الطعام وغرفتي نوم مريحتين وحمام مُجهز جيدًا - هذه الشقة الرائعة تدعوك لقضاء عطلة عائلية رائعة لاستعادة ذكريات العمر.",
        features: [
          "غرف واسعة وأثاث حصري وأجواء مريحة",
          "تم إعداد الشقة بعناية لقضاء عطلة عائلية هادئة. الشقة نفسها تتمتع بإطلالة مريحة للغاية"
        ],
        description3: "الجدران البيضاء الكلاسيكية والأرضيات الخشبية والحد الأدنى من الفوضى - كلها تتضافر لتمنحك شعورًا حقيقيًا بالهدوء والنعيم. على بعد دقائق من المطاعم الرائعة والمتنزهات ومراكز التسوق وغيرها من الأماكن السياحية المعروفة، ستكون هذه منطقة راحتك لقضاء العطلة التالية.",
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

const timeline = [
  {
    year: "2023",
    description:
      "أدرنا أكثر من 200 وحدة وتوسعنا في كلا من المملكة السعودية و المتحدة",
  },
  {
    year: "2022",
    description:
      "أخذنا على عاتقنا مسؤولية الاشراف علي 45 وحدة في المملكة المتحدة 🚀",
  },
  {
    year: "2021",
    description:
      "توسعت عملياتنا لـ أكثر من 50 وحدة في الرياض وساعدنا في تأسيس حضور بارز في السوق 🚀",
  },
  {
    year: "2020",
    description:
      "عززنا إيرادات كل وحدة بشكل لافت إذ ارتفع من 13 ألف دولار عام 2019 إلى 23 ألف دولار",
  },
  {
    year: "2019",
    description: "نحن فخورين بإدارة أفضل العقارات و أكثرها تميزاً في مصر.",
  },
  {
    year: "2018",
    description:
      "نجحنا في إدارة و تقديم أكثر من 20 وحدة سكنية في جميع أنحاء مصر 🚀",
  },
  {
    year: "2017",
    description: "إدارة وحدة سكنية لنا في مصر بإحترافية عالية 🔍",
  },
];

export { data, Members, testimonials, timeline };
