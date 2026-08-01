import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { 
  SiTypescript, 
  SiRedux, 
  SiTailwindcss, 
  SiMaterialdesign, 
  SiFigma, 
  SiNextdotjs, 
  SiExpress, 
  SiPostgresql, 
  SiPrisma,
  SiReactrouter
} from "react-icons/si";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "React Router 7", icon: <SiReactrouter className="text-red-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-teal-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Redux Toolkit / RTK", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Material UI", icon: <SiMaterialdesign className="text-indigo-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-red-500" /> },
];

export default function Skills() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  return (
    <section className="section-default">
      <motion.h2 className="heading-section mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {t.skills_title}
      </motion.h2>

      <motion.p className="max-w-2xl mx-auto mb-12 text-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
        {t.skills_text}
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }, // Ускорила анимацию появления карточек
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

