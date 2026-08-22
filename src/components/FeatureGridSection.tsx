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
    {
      icon: <ChartNoAxesCombined strokeWidth={1.25} size={20} />,
      title: t.features.agriFinanceTitle,
      desc: t.features.agriFinanceDesc,
      accent: STEEL,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/6.jpg',
    },
    {
      icon: <Handshake strokeWidth={1.25} size={20} />,
      title: t.features.tradFarmersTitle,
      desc: t.features.tradFarmersDesc,
      accent: JADE,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA02236.webp',
    },
    {
      icon: <Earth strokeWidth={1.25} size={20} />,
      title: t.features.exportPartnerTitle,
      desc: t.features.exportPartnerDesc,
      accent: STEEL,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/5.webp',
    },
    {
      icon: <Shield strokeWidth={1.25} size={20} />,
      title: t.features.buyBackTitle,
      desc: t.features.buyBackDesc,
      accent: JADE,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA02719.webp',
    },
    {
      icon: <Users strokeWidth={1.25} size={20} />,
      title: t.features.ruralDevTitle,
      desc: t.features.ruralDevDesc,
      accent: STEEL,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/p23.webp',
    },
    {
      icon: <Leaf strokeWidth={1.25} size={20} />,
      title: t.features.sustainableTitle,
      desc: t.features.sustainableDesc,
      accent: JADE,
      image: 'https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA03371.webp',
    },
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
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JADE }} />
            {t.features.badge}
          </span>
          <h2 className="text-4xl font-semibold md:text-5xl font-black mb-5 font-semibold" style={{ color: INK }}>
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
              className="group overflow-hidden transition-all"
              style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14`, borderTopWidth: '3px', borderTopColor: feature.accent }}
            >
              {/* Image header */}
              <div className="relative h-66 w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay so the icon badge stays legible on any photo */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, ${INK}00 40%, ${INK}B3 100%)` }}
                />
                {/* Icon badge */}
                <div
                  className="absolute bottom-3 left-4 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  style={{ backgroundColor: `${feature.accent}E6`, color: '#FFFFFF' }}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{ color: INK }}>{feature.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: `${INK}99` }}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}