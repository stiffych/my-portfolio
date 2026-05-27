export const profile = {
  lastName: "Hosea Elistian Loïc",
  firstName: "RATEFINJANAHARY",
  title: "Software Engineer · Full-Stack Developer",
  tagline:
    "Je crée des applications web, desktop et mobiles, en mettant l’accent sur la simplicité, l’efficacité et une expérience utilisateur agréable.",
  location: "Toamasina, Madagascar",
  email: "elistianloic@gmail.com",
  phone: "+261 32 17 875 35",
  github: "https://github.com/stiffych",
  linkedin: "https://www.linkedin.com/",
  cvUrl: "/cv-ratefinjanahary-hosea.pdf",
};

export const about = {
  intro:
    "Étudiant en Master à l'École Nationale d'Informatique, spécialisé en génie logiciel et bases de données. Passionné par la création de produits numériques performants — du backend robuste à l'interface fluide.",
  journey:
    "J'ai enchaîné stages et projets personnels couvrant le web, le desktop et le mobile. Chaque expérience m'a appris à transformer un besoin métier en logiciel concret.",
  goals:
    "Rejoindre une équipe ambitieuse où je pourrai livrer des produits utilisés au quotidien, tout en grandissant en architecture logicielle, et en design produit.",
};

export const skills = [
   {
    category: "Backend",
    items: ["Express JS", "PHP / Laravel", "Spring Boot", "Java", "C#"],
    level: 90,
  },
  {
    category: "Frontend",
    items: ["HTML / CSS", "JavaScript", "React JS", "Vue JS", "Tailwind CSS"],
    level: 86,
  },
  {
    category: "Mobile",
    items: ["Kotlin (Android)", "React Native"],
    level: 75,
  },
  {
    category: "Bases de données",
    items: ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "Firebase"],
    level: 88,
  },
  {
    category: "Outils & Stacks",
    items: ["Git", "MERN Stack", "REST APIs", "Docker"],
    level: 82,
  },
];

export const projects = [
  {
    name: "Restaurant Order System",
    description:
      "Application de gestion des commandes pour un restaurant : panier, cuisine, paiements et tableau de bord.",
    tech: ["MongoDB", "Express", "React", "Node"],
    accent: "from-emerald-400/30 to-teal-500/10",
  },
  {
    name: "Choir Manager",
    description:
      "Application Android pour gérer les chants, répertoires et partitions d'une chorale.",
    tech: ["Kotlin", "Firebase"],
    accent: "from-teal-400/30 to-cyan-500/10",
  },
  {
    name: "School Grades Platform",
    description:
      "Plateforme web de gestion des notes scolaires avec rôles enseignants, élèves et parents.",
    tech: ["Spring Boot", "MySQL", "Thymeleaf"],
    accent: "from-lime-400/25 to-emerald-500/10",
  },
  {
    name: "Parcel Tracking",
    description:
      "Système de gestion et suivi des colis avec dashboard administrateur et notifications.",
    tech: ["PHP", "MySQL"],
    accent: "from-emerald-400/25 to-green-500/10",
  },
  {
    name: "Internal Comms Platform",
    description:
      "Plateforme de communication interne entre départements pour Huilerie de Melville.",
    tech: ["Express", "React", "MySQL"],
    accent: "from-cyan-400/25 to-emerald-500/10",
  },
  {
    name: "Time-Tracking Desktop",
    description:
      "Application desktop de gestion du pointage avec rapports et exports automatisés.",
    tech: ["C#", "SQL Server"],
    accent: "from-teal-400/25 to-emerald-500/10",
  },
];

export const experiences = [
  {
    role: "Stagiaire — Développement informatique",
    company: "Huilerie de Melville, STHM",
    period: "Août 2024 — Janvier 2025",
    bullets: [
      "Conception et développement d'une plateforme web de communication interne (Express, React, MySQL).",
      "Développement d'une application desktop de gestion des encaissements et décaissements (Java, PostgreSQL).",
    ],
  },
  {
    role: "Stagiaire — Développement informatique",
    company: "SMMC",
    period: "Août — Décembre 2023",
    bullets: [
      "Application web de gestion des matériels de manutention (PHP, MySQL).",
      "Plateforme de gestion des fiches de contrôle et suivi de véhicules (PHP, Vue JS).",
    ],
  },
  {
    role: "Projets personnels",
    company: "En continu",
    period: "2023 — Aujourd'hui",
    bullets: [
      "Applications Android, web et desktop couvrant divers domaines métier.",
      "Exploration de stacks : MERN, Spring Boot, Kotlin, C#.",
    ],
  },
];

export const education = [
  {
    school: "École Nationale d'Informatique",
    degree: "Master en Informatique (en cours)",
    period: "2024 — 2026",
  },
  {
    school: "École Nationale d'Informatique",
    degree: "Licence — Génie Logiciel & Bases de Données",
    period: "2021 — 2024",
  },
  {
    school: "Institution Nicolas Barré",
    degree: "Baccalauréat Série D",
    period: "2021",
  },
];
