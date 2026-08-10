import { motion } from "framer-motion";
import { Eye, Target, Compass } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

export default function OurVisionMission() {
  const { t } = useLang();

  return (
    <section id="vision-mission" className="py-24" style={{ backgroundColor: PAPER }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JADE }} />
            {t.vision.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            {t.vision.title1}{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}>
              {t.vision.title2}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>{t.vision.sub}</p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10"
            style={{ backgroundColor: "#FFFFFF", border: `1px solid ${INK}14`, borderTopWidth: "3px", borderTopColor: STEEL }}
          >
            <div className="text-[22px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: STEEL }}>{t.vision.visionLabel}</div>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${STEEL}1A`, color: STEEL }}>
              <Eye strokeWidth={1.25} size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: INK }}>{t.vision.visionTitle}</h3>
            <p className="text-base leading-relaxed" style={{ color: `${INK}99` }}>{t.vision.visionText}</p>
          </motion.div>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#FFFFFF", border: `2px solid ${PAPER}`, color: INK }}>
              <Compass strokeWidth={1.5} size={26} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10"
            style={{ backgroundColor: "#FFFFFF", border: `1px solid ${INK}14`, borderTopWidth: "3px", borderTopColor: JADE }}
          >
            <div className="text-[22px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: JADE }}>{t.vision.missionLabel}</div>
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: `${JADE}1A`, color: JADE }}>
              <Target strokeWidth={1.25} size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: INK }}>{t.vision.missionTitle}</h3>
            <p className="text-base leading-relaxed" style={{ color: `${INK}99` }}>{t.vision.missionText}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 mt-10"
        >
          {t.vision.values.map((value) => (
            <span
              key={value}
              className="text-xs font-semibold px-3.5 py-1.5 tracking-wide"
              style={{ backgroundColor: `${INK}08`, color: `${INK}CC`, border: `1px solid ${INK}14` }}
            >
              {value.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
