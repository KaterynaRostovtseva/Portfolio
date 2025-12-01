import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

export default function Contact() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  return (
    <section className="section-default">
      <motion.h2 className="heading-section mb-4" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {t.contacts_title}
      </motion.h2>

      <motion.p className="text-default mb-8 text-center max-w-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
        {t.contacts_subtitle}
      </motion.p>

      <motion.a href="mailto:katjarost1501@gmail.com" className="w-full sm:w-auto btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {t.contacts_form_send}
      </motion.a>
    </section>
  );
}


