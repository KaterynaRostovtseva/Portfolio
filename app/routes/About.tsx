import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

const MotionA = motion.create("a");

export default function About() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  return (
    <section className="section-default">
      <motion.img src="/avatar.jpg" alt="Kateryna Rostovtseva" className="w-60 h-60 rounded-full mb-2 shadow-lg" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} />

      <motion.p className="heading-secondary" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}>
      {t.hello}
      </motion.p>

      <motion.h1 className="heading-primary" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}>
        {t.frontend}
      </motion.h1>

      <motion.p className="text-default mb-8 max-w-2xl" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}>
       {t.description}
      </motion.p>

      <motion.div className="w-full max-w-md flex flex-col sm:flex-row gap-4 mx-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}>
        <MotionA href="/#projects" className="flex-1 sm:w-auto btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} >
          {t.btn_my_projects}
        </MotionA>

        <MotionA href="/CV_Kateryna Rostovtseva_Frontend Developer.pdf" download className="flex-1 sm:w-auto btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          {t.btn_download_resume}
        </MotionA>
      </motion.div>
    </section>
  );
}

