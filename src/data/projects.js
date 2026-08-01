import titrasims from "../assets/optimized/720/titrasims.webp";
import titrasimsLarge from "../assets/optimized/1440/titrasims.webp";
import tedx from "../assets/optimized/720/tedx.webp";
import tedxLarge from "../assets/optimized/1440/tedx.webp";
import sust from "../assets/optimized/720/sust.webp";
import sustLarge from "../assets/optimized/1440/sust.webp";
//import robot from "../assets/robot.jpeg";
//import analgo from "../assets/analgo.png";
import inprogress from "../assets/in-progress.png"
//import ai from "../assets/ai.png";
//import pilketos from "../assets/pilketos.png";
import suaraunpad from "../assets/optimized/720/suaraunpad.webp";
import suaraunpadLarge from "../assets/optimized/1440/suaraunpad.webp";
import zichara from "../assets/optimized/720/zichara.webp";
import zicharaLarge from "../assets/optimized/1440/zichara.webp";
import tedx2026 from "../assets/optimized/720/tedx2026.webp";
import tedx2026Large from "../assets/optimized/1440/tedx2026.webp";
import youri from "../assets/optimized/720/youri.webp";
import youriLarge from "../assets/optimized/1440/youri.webp";
//import semweb from "../assets/semweb.png";
import dw from "../assets/optimized/720/dw.webp";
import dwLarge from "../assets/optimized/1440/dw.webp";

export const projects = [
  {
    id: "praktis",
    title: "Praktis",
    desc: "A secure practicum management platform built with Next.js and FastAPI to replace fragmented cloud workflows with centralized university server storage and secure onboarding.",
    img: inprogress, 
    link: "https://github.com/aidanismail/praktis", 
    alt: "https://github.com/aidanismail/praktis",
    tags: ["Next.js", "React", "Front-End", "Content Management System", "Product Lead"]
  },
  {
    id: "archiver",
    title: "Archiver",
    desc: "A self-hosted personal cloud and media server for archiving large files. Developed using a monorepo architecture with a Next.js frontend, Go/Gin backend, and Dockerized PostgreSQL, Redis, and MinIO.",
    img: inprogress,
    link: "https://github.com/aidanismail/archiver", 
    alt: "https://github.com/aidanismail/archiver",
    tags: ["Next.js", "React", "Go", "Fullstack", "PostgreSQL", "MinIO"]
  },
  {
    id: "dw",
    title: "Logistics Company Data Warehouse",
    desc: "An end-to-end logistics data warehouse platform that simulates shipment data, runs ETL processing, and visualizes delivery performance through executive analytics dashboards.",
    img: dw,
    imgSrcSet: `${dw} 720w, ${dwLarge} 1275w`,
    link: "https://logitrackdw.streamlit.app/",
    alt: "https://github.com/atharikputra/DW-Logistic",
    tags: ["Data Warehouse", "Data Analysis", "ETL", "Python", "PostgreSQL"]
  },
  // {
  //   id: "semweb",
  //   title: "NIHONGO GRAPH-RAG",
  //   desc: "An LLM-powered semantic search prototype for Japanese vocabulary, combining RDF Knowledge Graph data, SPARQL queries, and natural language answers for easier kanji, hiragana, romaji, and meaning lookup. ",
  //   img: semweb,
  //   link: "https://github.com/isomorfisma/semweb-nihongo",
  //   alt: "https://github.com/isomorfisma/semweb-nihongo",
  //   tags: ["Semantic Web", "Knowledge Graph", "Next.js", "RDF/SPARQL", "LLM"]
  // },
  {
    id: "youri",
    title: "Youri - Your Smart Cooking Assistant",
    desc: "An AI microservice for Youri Smart Cooking Assistant that recommends recipes from available ingredients and suggests realistic ingredient substitutions through TF-IDF matching, flavor similarity, and a deep learning ranker. ",
    img: youri,
    imgSrcSet: `${youri} 720w, ${youriLarge} 1440w`,
    link: "https://yourii-fe.vercel.app/",
    alt: "https://github.com/aidanismail/youri-ai-service",
    tags: ["AI", "Machine Learning", "Deep Learning", "NLP"]
  },
  {
    id: "tedx2026",
    title: "TEDxPadjadjaranUniversity 2026 Official Website",
    desc: "The official responsive website for TEDxPadjadjaran University, featuring interactive page layouts and animation-rich sections for a consistent visual experience across all devices.",
    img: tedx2026,
    imgSrcSet: `${tedx2026} 720w, ${tedx2026Large} 1440w`,
    link: "https://tedxpadjadjaranuniversity.com/",
    alt: "https://github.com/HitMagicc/tedx-unpad2026",
    tags: [
      "Front-End",
      "React",
      "Next.js",
      "Typescript",
      "GSAP",
      "Back-End Integration"
    ]
  },
  {
    id: "suaraunpad",
    title: "SUARAUNPAD",
    desc: "A student advocacy platform for Universitas Padjadjaran students to submit reports, raise aspirations, and participate in policy related voting.",
    img: suaraunpad,
    imgSrcSet: `${suaraunpad} 720w, ${suaraunpadLarge} 1440w`,
    link: "https://wall-replacement-cal-minimum.trycloudflare.com",
    alt: "https://github.com/mfachri820/SuaraUnpad-PPL",
    tags: [
      "Front-End",
      "React",
      "Next.js",
      "Typescript",
      "CI/CD",
      "Testing"
    ]
  },
  {
    id: "zichara",
    title: "ZICHARA",
    desc: "Augmented reality learning application that helps users learn Hanzi characters and Pinyin through interactive visual guidance.",
    img: zichara,
    imgSrcSet: `${zichara} 720w, ${zicharaLarge} 1440w`,
    link: "https://drive.google.com/drive/folders/1_XeGWrUN8J0faLrk6qlAtklywWt17isr?usp=sharing",
    alt: "https://github.com/Kelompok-2-IMK/zichara/",
    tags: ["Unity", "C#", "Vuforia"]
  },
  {
    id: "titrasims",
    title: "TITRA SIMS",
    desc: "Android AR titration simulator built with Unity and Vuforia. Digitalized titration process for pharmacy lab into interactive 3D virtual experiences.",
    img: titrasims,
    imgSrcSet: `${titrasims} 720w, ${titrasimsLarge} 1080w`,
    link: "https://drive.google.com/drive/folders/1G_1j0BzmT727MOmmaechpomC213SvS6d?usp=sharing",
    alt: "https://github.com/aidanismail/PharmaAR",
    tags: ["Unity", "C#", "Vuforia"]
  },
  {
    id: "tedx2025",
    title: "TEDxPadjadjaranUniversity 2025 Official Website",
    desc: "The official responsive website for TEDxPadjadjaran University, featuring a modular design system for visual consistency across all devices.",
    img: tedx,
    imgSrcSet: `${tedx} 720w, ${tedxLarge} 1440w`,
    link: "https://www.figma.com/proto/ma4xdNtbYhDlCVMP4NNOGV/tedX?page-id=&node-id=466-74&p=f&viewport=225%2C417%2C0.02&t=G3k6LPUJEJH71gB2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=466%3A74&show-proto-sidebar=1",
    alt: "https://www.figma.com/proto/ma4xdNtbYhDlCVMP4NNOGV/tedX?page-id=&node-id=466-74&p=f&viewport=225%2C417%2C0.02&t=G3k6LPUJEJH71gB2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=466%3A74&show-proto-sidebar=1",
    tags: ["Figma", "UI/UX", "Design"]
  },
  {
    id: "sustainabite",
    title: "Sustainabite",
    desc: "a UI/UX GEMASTIK 2025 proposal for a food rescue platform connecting MSMEs with surplus food to consumers, utilizing gamification and POS systems to facilitate sustainable environment.",
    img: sust,
    imgSrcSet: `${sust} 720w, ${sustLarge} 1440w`,
    link: "https://drive.google.com/drive/folders/1MezbfeLQ_KIGzaRUWxUNKyLSJjUv3Aq8",
    alt: "https://www.figma.com/proto/UsxRCH96bJeKnqgVtluXAi/SUSTAINABITE-BACKUP?page-id=&node-id=3-4611&p=f&viewport=-438%2C2335%2C0.16&t=68BbqO8QmpUH4KAg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A4611",
    tags: ["Figma", "UI/UX", "Design"]
  },
  // {
  //   id: "robotik",
  //   title: "Smart Follower Robot with Face Recognition",
  //   desc: "An autonomous robot capable of real-time face tracking using InsightFace (ArcFace), translating visual data into precise motor control for subject following.",
  //   img: robot,
  //   link: "https://drive.google.com/file/d/1M5K56R_UKHc0E2HsaeNv2MyVcM5jJR7-/view?usp=drive_link",
  //   alt: "https://github.com/mfachri820/RobotikaFaceRecognition",
  //   tags: ["Python", "Arduino", "Robotics"]
  // },
  // {
  //   id: "analgo",
  //   title: "Huffman Visualizer & File Compressor",
  //   desc: "A custom file compressor and visualizer that demonstrates lossless compression mechanics by rendering binary tree structures and statistics in real-time.",
  //   img: analgo,
  //   link: "https://aidanismail-file-compressor-app-haumig.streamlit.app/",
  //   alt: "https://github.com/aidanismail/File-Compressor",
  //   tags: ["Python", "Streamlit", "Algorithm"]
  // },
  // {
  //   id: "ai",
  //   title: "CodeMind AI Chatbot",
  //   desc: "An AI teaching assistant that supports algorithm mastery through interactive code feedback, semantic search, and personalized resource recommendations.",
  //   img: ai,
  //   link: "https://github.com/mfachri820/AlgorithmAnalysis-AITutor",
  //   alt: "https://github.com/mfachri820/AlgorithmAnalysis-AITutor",
  //   tags: ["Python", "Streamlit", "Algorithms", "AI"]
  // },
  // {
  //   id: "pilketos",
  //   title: "Pemilihan Ketua OSIS SMAN 5 Bandung (2022)",
  //   desc: "A responsive E-Voting front-end platform designed for the student body, ensuring a seamless and intuitive voting experience integrated with server-side processing.",
  //   img: pilketos,
  //   link: "https://github.com/fivecybercommunity/Front-End-Pilketos-2023",
  //   alt: "https://github.com/fivecybercommunity/Front-End-Pilketos-2023",
  //   tags: ["Front-End", "PHP"]
  // }
];
