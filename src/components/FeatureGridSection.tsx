import { motion } from 'framer-motion';
import { ChartNoAxesCombined, Earth, Handshake, Leaf, Shield, Users } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

export default function FeatureGridSection() {
  const { t } = useLang();
  const features = [
    { icon: <ChartNoAxesCombined strokeWidth={1.25} size={26} />, title: t.features.agriFinanceTitle, desc: t.features.agriFinanceDesc, accent: STEEL },
    { icon: <Handshake strokeWidth={1.25} size={26} />, title: t.features.tradFarmersTitle, desc: t.features.tradFarmersDesc, accent: JADE },
    { icon: <Earth strokeWidth={1.25} size={26} />, title: t.features.exportPartnerTitle, desc: t.features.exportPartnerDesc, accent: STEEL },
    { icon: <Shield strokeWidth={1.25} size={26} />, title: t.features.buyBackTitle, desc: t.features.buyBackDesc, accent: JADE },
    { icon: <Users strokeWidth={1.25} size={26} />, title: t.features.ruralDevTitle, desc: t.features.ruralDevDesc, accent: STEEL },
    { icon: <Leaf strokeWidth={1.25} size={26} />, title: t.features.sustainableTitle, desc: t.features.sustainableDesc, accent: JADE },
  ];

  return (
    <section id="features" className="py-24" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t.features.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            {t.features.title1}<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}>
              {t.features.title2}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>{t.features.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 transition-all"
              style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14`, borderTopWidth: '3px', borderTopColor: feature.accent }}
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.accent}1A`, color: feature.accent }}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: INK }}>{feature.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: `${INK}99` }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
