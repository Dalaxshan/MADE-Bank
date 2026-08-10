import { motion } from 'framer-motion';
import { ChartNoAxesCombined, Earth, Handshake, Leaf, Shield, Users } from 'lucide-react';

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

export default function FeatureGridSection() {
  const features = [
    {
      icon: <Handshake strokeWidth={1.25} size={26} />,
      title: 'Supporting Traditional Farmers',
      desc: 'We provide comprehensive support to traditional farmers, helping them modernize while preserving their agricultural heritage.',
      accent: JADE,
    },
    {
      icon: <ChartNoAxesCombined strokeWidth={1.25} size={26} />,
      title: 'Agriculture Financing',
      desc: 'Affordable loans with competitive interest rates designed specifically for the agricultural community.',
      accent: STEEL,
    },
    {
      icon: <Earth strokeWidth={1.25} size={26} />,
      title: 'Export Partnerships',
      desc: 'Direct partnerships with international buyers including Bio Foods, ensuring premium prices for quality produce.',
      accent: STEEL,
    },
    {
      icon: <Shield strokeWidth={1.25} size={26} />,
      title: 'Buy-Back Guarantee',
      desc: 'MADECOOP guarantees to purchase your harvest at fair market prices, eliminating the risk of unsold produce.',
      accent: JADE,
    },
    {
      icon: <Leaf strokeWidth={1.25} size={26} />,
      title: 'Sustainable Agriculture',
      desc: 'Promoting environmentally responsible farming practices that benefit both farmers and future generations.',
      accent: JADE,
    },
    {
      icon: <Users strokeWidth={1.25} size={26} />,
      title: 'Rural Economic Development',
      desc: 'Committed to uplifting rural communities through cooperative economics and shared prosperity.',
      accent: STEEL,
    },
  ];

  return (
    <section id="features" className="py-24" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE}}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JADE }} />
            What Sets Us Apart
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-5"
            style={{ color: INK }}
          >
            Built Around
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              The Farmer, Not the Bank
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>
            Six commitments that shape everything MADECOOP does - from the first loan
            application to the final export shipment.
          </p>
        </motion.div>

        {/* Grid */}
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
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${INK}14`,
                borderTopWidth: '3px',
                borderTopColor: feature.accent,
              }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.accent}1A`, color: feature.accent }}
              >
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: INK }}>
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: `${INK}99` }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}