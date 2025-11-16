import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Settings } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

export default function Services() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  const services = [
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: { ua: "Веб-розробка", en: "Web Development" },
    description: {
      ua: "Створюю адаптивні вебсайти з React, чистою архітектурою та сучасним дизайном.",
      en: "I build responsive websites with React using clean architecture and modern design.",
    },
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-500" />,
    title: { ua: "Мобільна оптимізація", en: "Mobile Optimization" },
    description: {
      ua: "Інтерфейси, які ідеально виглядають та працюють на будь-якому пристрої — від телефонів до десктопів.",
      en: "Interfaces that look and work perfectly on any device — from phones to desktops.",
    },
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-500" />,
    title: { ua: "UI/UX дизайн", en: "UI/UX Design" },
    description: {
      ua: "Точно втілюю Figma-дизайн у чисті та зручні інтерфейси.",
      en: "I accurately implement Figma designs into neat and user-friendly interfaces.",
    },
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    title: { ua: "Управління станом", en: "State Management" },
    description: {
      ua: "Налаштовую логіку додатку через Redux Toolkit для стабільної та масштабованої роботи.",
      en: "I set up application logic with Redux Toolkit for stable and scalable performance.",
    },
  },
];


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <section className="section-default">
      <motion.h2 className="heading-section mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {t.services_title}
      </motion.h2>
      
      <motion.p className="max-w-2xl mx-auto mb-12 text-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
        {t.services_webdev}
      </motion.p>

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} >
        {services.map((service, i) => (
          <motion.div key={i} variants={sectionVariants} whileHover={{ scale: 1.05 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">
               {service.title[lang]}
            </h2>
            <p className="text-default">{service.description[lang]}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

