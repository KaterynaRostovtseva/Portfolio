import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

const projects = [
  {
    title: { ua: "Музичний плеєр", en: "Music Player App" },
    description:
    {
      ua: "Розробила інтерактивний веб-застосунок для відтворення аудіофайлів, оптимізований для настільних пристроїв.",
      en: "Developed an interactive web application for playing audio files, optimized for desktop devices.",
    },
    tech: ["React", "JavaScript", "Redux Toolkit", "React-Beautiful-DnD", "Material UI", "GraphQL"],
    link: "https://github.com/KaterynaRostovtseva/Project-audio-player",
    image: "/images/music-player.png",
  },
  {
    title: { ua: "Multiwork", en: "Multiwork" },
    description:
    {
      ua: "Розробила веб-застосунок, який об'єднує спеціалістів у команди для сприяння професійному зростанню та співпраці.",
      en: "Developed a web application that connects specialists into teams to promote professional growth and collaboration.",
    },
    tech: ["React", "JavaScript", "Redux Toolkit", "Strapi", "Material UI", "REST API"],
    link: "https://github.com/KaterynaRostovtseva/Multiwork",
    image: "/images/Registered.png",
  },
  {

    title: { ua: "Онлайн магазин кофе", en: "Online Coffee Shop" },
    description:
    {
      ua: "Розробила веб-застосунок для купівлі кави в онлайн-магазині з каталогом товарів, кошиком та оформленням замовлення.",
      en: "Developed a desktop web app for purchasing coffee with a product catalog, shopping cart, and checkout.",
    },
    tech: ["React", "JavaScript", "Redux Toolkit", "Material UI", "REST API"],
    link: "https://github.com/KaterynaRostovtseva/Coffelane-online-store",
    image: "/images/Coffee page.png",
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
              link={project.link}
              image={project.image}
              githubText={t.projects_github}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


