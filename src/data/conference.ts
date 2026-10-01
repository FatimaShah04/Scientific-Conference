export type Language = "en" | "ar";

export type ConferenceContent = {
  nav: {
    home: string;
    overview: string;
    axes?: string;
    objectives: string;
    committee: string;
    venue: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    date: string;
    venue: string;
    city: string;
  };
  info: { date: string; venue: string; location: string; email: string };
  overview: { title: string; paragraphs: string[] };
  axes?: { title: string; items: string[] };
  objectives: { title: string; items: string[] };
  committee: { title: string; items: string[] };
  organizations: { title: string; intro: string };
  venue: { title: string; lines: string[]; mapLabel: string };
  contact: { title: string; intro: string; emailLabel: string };
  footer: { words: string[]; copyright: string };
};

export const conferenceData: Record<Language, ConferenceContent> = {
  en: {
    nav: {
      home: "Home",
      overview: "Overview",
      axes: "Conference Axes",
      objectives: "Objectives",
      committee: "Committee",
      venue: "Venue",
      contact: "Contact",
    },
    hero: {
      eyebrow: "The 18th International Scientific Conference",
      title: "Mathematics and Artificial Intelligence",
      subtitle:
        "From the Foundations of Knowledge to the Horizons of Innovation",
      date: "November 26–27, 2026",
      venue: "Lebanese University-Hadath Campus",
      city: "Beirut, Lebanon",
    },
    info: {
      date: "November 26–27, 2026",
      venue: "Lebanese University-Hadath Campus",
      location: "Beirut, Lebanon",
      email: "mcs.ai.team.2026@gmail.com",
    },
    overview: {
      title: "General Overview",
      paragraphs: [
        "The Iraqi Mathematical Society is one of the specialized scientific institutions concerned with mathematics and its sciences, and seeks to support scientific research, enhance communication between researchers and academics, and encourage scientific cooperation with universities and research centers inside and outside Iraq, contributing to the development of mathematical knowledge and its applications.",
        "Based on its scientific mission, the Society organizes the 18th International Scientific Conference in Beirut in cooperation with the Lebanese University and Al-Anwar Center for Development and Education, on November 26–27, 2026, to be an international scientific platform for exchanging research, expertise, and discussing modern trends in mathematics, its sciences and applications, especially in the fields of artificial intelligence, statistics, computer science, mathematical modeling, and mathematical physics.",
        "The conference aims to enhance academic and research partnerships, encourage joint research, link mathematical knowledge to modern applications and community needs, thereby opening new horizons for cooperation, innovation, and scientific research service.",
      ],
    },
    axes: {
      title: "Conference Axes",
      items: [
        "Pure and applied mathematics and mathematical modeling.",
        "Analysis, statistics and data science.",
        "Mathematics, artificial intelligence and machine learning.",
        "Computer science and algorithms.",
        "Mathematical physics and its applications.",
        "Medical and vital mathematics.",
        "Teaching mathematics and applications of technology.",
        "Scientific research and academic partnerships.",
      ],
    },
    objectives: {
      title: "Conference Objectives",
      items: [
        "Developing scientific research in mathematics, its sciences and applications.",
        "Enhancing integration between mathematics, artificial intelligence and modern sciences.",
        "Exchanging expertise and encouraging joint research.",
        "Supporting researchers and postgraduate students.",
        "Expanding academic and scientific partnerships.",
        "Linking mathematical research to the needs of society and development.",
      ],
    },
    committee: {
      title: "Organizing Committee",
      items: [
        "Prof. Ali Wehbe (LU)",
        "Prof. Noori Al-Mayahi (QU)",
        "Prof. Zaynab Salloum (LU)",
        "Prof. Mohammed Mohammed (AAU)",
        "Ph.D. Student Shahrabanu Shah (LU, UTC)",
        "Ph.D. Student Batoul Younes (LU, UTC)",
        "MSc Student Hasan Abdallah (LU)",
      ],
    },
    organizations: {
      title: "Organizations & Partners",
      intro:
        "With the support and collaboration of the following scientific and educational organizations.",
    },
    venue: {
      title: "Venue",
      lines: ["Lebanese University-Hadath Campus", "Beirut, Lebanon"],
      mapLabel: "View on Google Maps",
    },
    contact: {
      title: "Contact",
      intro: "For conference inquiries, please contact the organizing team.",
      emailLabel: "Email the organizing team",
    },
    footer: {
      words: ["THINK", "LEARN", "CREATE", "PERSIST", "PUBLISH", "CONNECT"],
      copyright: "© 2026 The 18th International Scientific Conference",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      overview: "مقدمة",
      axes: "محاور المؤتمر",
      objectives: "أهداف المؤتمر",
      committee: "اللجنة العلمية",
      venue: "المكان",
      contact: "للتواصل",
    },
    hero: {
      eyebrow: "المؤتمر العلمي الدولي الثامن عشر",
      title: "الرياضيات والذكاء الاصطناعي",
      subtitle: "من أسس المعرفة إلى آفاق الابتكار",
      date: "26 – 27 تشرين الثاني 2026",
      venue: "الجامعة اللبنانية - مجمع الحدث",
      city: "بيروت، لبنان",
    },
    info: {
      date: "26 – 27 تشرين الثاني 2026",
      venue: "الجامعة اللبنانية - مجمع الحدث",
      location: "بيروت، لبنان",
      email: "mcs.ai.team.2026@gmail.com",
    },
    overview: {
      title: "مقدمة عن الجمعية والمؤتمر",
      paragraphs: [
        "تُعد جمعية الرياضيات العراقية من المؤسسات العلمية المتخصصة التي تُعنى بالرياضيات وعلومها، وتسعى إلى دعم البحث العلمي، وتعزيز التواصل بين الباحثين والأكاديميين، وتشجيع التعاون العلمي مع الجامعات والمراكز البحثية داخل العراق وخارجه، بما يسهم في تطوير المعرفة الرياضية وتطبيقاتها.",
        "وانطلاقاً من رسالتها العلمية، تنظم الجمعية المؤتمر العلمي الدولي الثامن عشر بالتعاون مع الجامعة اللبنانية في بيروت ومركز الأنوار للتنمية والتعليم، للمدة 26-27 تشرين الثاني 2026، ليكون منصة علمية لتبادل البحوث والخبرات ومناقشة الاتجاهات الحديثة في الرياضيات وعلومها وتطبيقاتها، ولا سيما في مجالات الذكاء الاصطناعي، الإحصاء، علوم الحاسوب، والنمذجة الرياضية، والفيزياء الرياضية.",
        "ويهدف المؤتمر إلى تعزيز الشراكات الأكاديمية والبحثية، وتشجيع البحوث المشتركة، وربط المعرفة الرياضية بالتطبيقات الحديثة واحتياجات المجتمع، بما يفتح آفاقاً جديدة للتعاون والابتكار وخدمة البحث العلمي.",
      ],
    },
    axes: {
      title: "محاور المؤتمر",
      items: [
        "الرياضيات البحتة والتطبيقية والنمذجة الرياضية.",
        "التحليل والإحصاء وعلوم البيانات.",
        "الرياضيات والذكاء الاصطناعي والتعلم الآلي.",
        "علوم الحاسوب والخوارزميات.",
        "الفيزياء الرياضية وتطبيقاتها.",
        "الرياضيات الطبية والحيوية.",
        "تعليم الرياضيات وتطبيقات التكنولوجيا.",
        "البحث العلمي والشراكات الأكاديمية.",
      ],
    },
    objectives: {
      title: "أهداف المؤتمر",
      items: [
        "تطوير البحث العلمي في الرياضيات وعلومها وتطبيقاتها.",
        "تعزيز التكامل بين الرياضيات والذكاء الاصطناعي والعلوم الحديثة.",
        "تبادل الخبرات وتشجيع البحوث المشتركة.",
        "دعم الباحثين وطلبة الدراسات العليا.",
        "توسيع الشراكات الأكاديمية والعلمية.",
        "ربط البحث الرياضي باحتياجات المجتمع والتنمية.",
      ],
    },
    committee: {
      title: "اللجنة العلمية",
      items: [
        "أ.د. علي وهبة (LU)",
        "أ.د. نوري المياحي (QU)",
        "أ.د. زينب سلوم (LU)",
        "أ.د. محمد محمد (AUU)",
        "طالبة دكتوراه شهربانو شاه (LU, UTC)",
        "طالبة دكتوراه بتول يونس (LU, UTC)",
        "طالب ماجستير حسن عبدالله (LU)",
      ],
    },
    organizations: {
      title: "المنظمات والشركاء",
      intro: "بدعم وتعاون المؤسسات العلمية والتعليمية الآتية.",
    },
    venue: {
      title: "المكان",
      lines: ["الجامعة اللبنانية - مجمع الحدث", "بيروت، لبنان"],
      mapLabel: "عرض على خرائط Google",
    },
    contact: {
      title: "للتواصل",
      intro: "للاستفسارات الخاصة بالمؤتمر، يرجى التواصل مع الفريق المنظم.",
      emailLabel: "مراسلة الفريق المنظم",
    },
    footer: {
      words: ["THINK", "LEARN", "CREATE", "PERSIST", "PUBLISH", "CONNECT"],
      copyright: "© 2026 المؤتمر العلمي الدولي الثامن عشر",
    },
  },
};
