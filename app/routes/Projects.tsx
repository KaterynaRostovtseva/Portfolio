import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

const projects = [
  {
    title: { ua: "Great Shop", en: "Great Shop" },
    description: {
      ua: "Оплачений клієнтський магазин одягу, лютий 2026 – вересень 2026. Каталог, особистий кабінет, знижки, промокоди й адмінка. Репозиторій закритий.",
      en: "Paid client clothing store, Feb 2026 – Sep 2026. Catalog, personal account, discounts, promo codes, and an admin panel. The repository is private.",
    },
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    links: [],
  },
  {
    title: { ua: "Лендинг на Contentful", en: "Contentful landing" },
    description: {
      ua: "Оплачений клієнтський лендинг. Контент публікується в Contentful і виводиться в React. Репозиторій закритий.",
      en: "Paid client landing page. Content is published in Contentful and rendered in React. The repository is private.",
    },
    tech: ["React", "Contentful"],
    links: [],
  },
  {
    title: { ua: "CRM автошколи", en: "Driving School CRM" },
    description: {
      ua: "Командний pet-проєкт Team Challenge, серпень 2026 – зараз. Екрани для учнів, адміністраторів, викладачів теорії та інструкторів. Розклад, запис на практику, теорія онлайн і тести.",
      en: "Team pet project for Team Challenge, Aug 2026 – present. Screens for students, administrators, theory teachers, and instructors. Schedules, practical-lesson booking, online theory, and tests.",
    },
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Ant Design"],
    links: [],
  },
  {
    title: { ua: "Wearly Shop", en: "Wearly Shop" },
    description: {
      ua: "Командний pet-проєкт Team Challenge, окремий від Great Shop. Магазин одягу: каталог, кабінет, промокоди й адмінка.",
      en: "Team pet project for Team Challenge, separate from Great Shop. Clothing store with a catalog, account, promo codes, and an admin panel.",
    },
    tech: ["Next.js", "React", "TypeScript", "Redux Toolkit Query", "REST API"],
    links: [{ href: "https://onwearly.pp.ua/", label: { ua: "Відкрити сайт", en: "Open site" } }],
  },
  {
    title: { ua: "Coffeelane", en: "Coffeelane" },
    description: {
      ua: "Магазин кави, травень 2025 – лютий 2026. Каталог, кошик, оформлення замовлення, авторизація й адмінка.",
      en: "Coffee store, May 2025 – Feb 2026. Catalog, cart, checkout, authentication, and an admin area.",
    },
    tech: ["React", "Redux Toolkit", "Material UI", "REST API", "Axios", "Vite"],
    image: "/images/Coffee page.png",
    links: [
      { href: "https://coffelane.vercel.app/", label: { ua: "Відкрити сайт", en: "Open site" } },
      { href: "https://github.com/KaterynaRostovtseva/Coffelane-e-commerce", label: { ua: "Код на GitHub", en: "GitHub code" } },
    ],
  },
  {
    title: { ua: "Multiwork", en: "Multiwork" },
    description: {
      ua: "Платформа для збору команди, липень 2024 – травень 2025. Проєкти, пошук за навичками, авторизація, закриті маршрути. Контент зі Strapi.",
      en: "Team platform, Jul 2024 – May 2025. Projects, search by skills, authentication, and protected routes. Content comes from Strapi.",
    },
    tech: ["React", "Redux Toolkit", "Strapi", "Material UI", "React Router", "Axios"],
    image: "/images/Registered.png",
    links: [{ href: "https://github.com/KaterynaRostovtseva/Multiwork", label: { ua: "Код на GitHub", en: "GitHub code" } }],
  },
  {
    title: { ua: "Аудіоплеєр", en: "Audio player" },
    description: {
      ua: "Плеєр, лютий 2024 – березень 2024. Відтворення, пошук, плейлисти, перетягування треків і візуалізатор через Web Audio API.",
      en: "Player, Feb 2024 – Mar 2024. Playback, search, playlists, drag-and-drop, and a visualizer through the Web Audio API.",
    },
    tech: ["React", "Redux Toolkit", "Material UI", "Web Audio API"],
    image: "/images/music-player.png",
    links: [{ href: "https://github.com/KaterynaRostovtseva/music-player-react", label: { ua: "Код на GitHub", en: "GitHub code" } }],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

export default function Projects() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  return (
    <section className="section-default">
      <motion.h2 className="heading-section mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {t.projects_title}
      </motion.h2>

      <motion.p className="max-w-2xl mx-auto mb-12 text-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
        {t.projects_subtitle}
      </motion.p>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {projects.map((project, i) => (
          <motion.div key={i} variants={sectionVariants} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
            <ProjectCard
              title={project.title[lang]}
              description={project.description[lang]}
              tech={project.tech}
              image={project.image}
              links={(project.links ?? []).map((item) => ({ href: item.href, label: item.label[lang] }))}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


