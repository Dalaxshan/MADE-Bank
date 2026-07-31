import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaShip, FaLeaf, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { Ship, Sprout } from "lucide-react";

const FONT_DISPLAY = "'Fraunces', Georgia, serif";
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";
const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";
const INDIGO = "var(--color-primary-dark)";

const exportCountries = [
  { name: "Japan", flag: "🇯🇵", products: ["Cinnamon", "Pepper", "Cardamom"] },
  { name: "Germany", flag: "🇩🇪", products: ["Organic Vegetables", "Spices"] },
  { name: "United Kingdom", flag: "🇬🇧", products: ["Cinnamon", "Tea"] },
  { name: "USA", flag: "🇺🇸", products: ["Organic Spices", "Pepper"] },
  { name: "Australia", flag: "🇦🇺", products: ["Cinnamon", "Vanilla"] },
  { name: "UAE", flag: "🇦🇪", products: ["Vegetables", "Fruits"] },
  { name: "Netherlands", flag: "🇳🇱", products: ["Organic Produce", "Spices"] },
  { name: "Canada", flag: "🇨🇦", products: ["Cardamom", "Cinnamon"] },
];

const exportPartners = [
  { name: "Bio Foods", type: "Organic Export", emoji: "🌿" },
  { name: "Ceylon Spice Co.", type: "Spice Export", emoji: "🌶️" },
  { name: "Lanka Organics", type: "Organic Farming", emoji: "🥦" },
  { name: "Cinnamon Gardens", type: "Cinnamon Export", emoji: "🌿" },
  { name: "Agri-Export Ltd.", type: "Agricultural Products", emoji: "🚢" },
  { name: "Global Harvest", type: "International Trade", emoji: "🌍" },
];

const exportData = [
  { year: "2019", value: 45, target: 40 },
  { year: "2020", value: 52, target: 50 },
  { year: "2021", value: 61, target: 58 },
  { year: "2022", value: 78, target: 70 },
  { year: "2023", value: 95, target: 85 },
  { year: "2024", value: 118, target: 100 },
];

const productData = [
  { product: "Cinnamon", value: 38 },
  { product: "Pepper", value: 22 },
  { product: "Cardamom", value: 15 },
  { product: "Vegetables", value: 18 },
  { product: "Others", value: 7 },
];

const supplyChain = [
  {
    step: "Farm",
    icon: "🌱",
    desc: "MADECOOP farmers grow export-quality produce",
  },
  {
    step: "Collection",
    icon: "🧺",
    desc: "Organized collection centers across Matale District",
  },
  {
    step: "Quality Check",
    icon: "🔬",
    desc: "Rigorous quality assessment and grading",
  },
  {
    step: "Processing",
    icon: "🏭",
    desc: "Certified processing and packaging facilities",
  },
  {
    step: "Export",
    icon: "🚢",
    desc: "Shipped to international buyers via Colombo Port",
  },
  {
    step: "Payment",
    icon: "💰",
    desc: "Premium export prices paid directly to farmers",
  },
];

const bottomStats = [
  {
    icon: "🌍",
    title: "20+ Countries",
    desc: "Our produce reaches markets across Asia, Europe, and beyond",
  },
  {
    icon: "🏅",
    title: "Quality Certified",
    desc: "Export-grade products meeting international quality standards",
  },
  {
    icon: "💱",
    title: "Premium Prices",
    desc: "Farmers earn 30-50% more through direct export partnerships",
  },
];

export default function ExportNetwork() {
  return (
    <section
      id="export-network"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: PAPER }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{
              borderColor: `${JADE}80`,
              color: JADE,
              fontFamily: FONT_MONO,
            }}
          >
            <FaGlobeAsia size={11} /> Global Export Network
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-5"
            style={{ color: INK, fontFamily: FONT_DISPLAY }}
          >
            From Sri Lankan Farms
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              To Global Markets
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${INK}99` }}
          >
            MADECOOP connects Sri Lankan farmers with international buyers
            across 20+ countries, ensuring premium prices for export-quality
            produce.
          </p>
        </motion.div>

        {/* Export Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {exportCountries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="p-4"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${INK}14`,
              }}
            >
              <div className="text-3xl mb-2">{country.flag}</div>
              <div className="font-bold text-sm mb-2" style={{ color: INK }}>
                {country.name}
              </div>
              <div className="space-y-1">
                {country.products.map((p) => (
                  <div key={p} className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: JADE }}
                    />
                    <span className="text-xs" style={{ color: `${INK}80` }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export Performance Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 shadow-md"
            style={{ backgroundColor: "#FFFFFF", border: `1px solid ${INK}12` }}
          >
            <h3
              className="font-bold mb-5 flex items-center gap-2"
              style={{ color: INK }}
            >
              <Ship strokeWidth={1.75} style={{ color: STEEL }} />
              Annual Export Performance (Million LKR)
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={exportData}>
                <CartesianGrid strokeDasharray="3 3" stroke={`${INK}14`} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(v: unknown) => [`Rs. ${Number(v)}M`]}
                  contentStyle={{ border: `1px solid ${INK}26` }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={STEEL}
                  strokeWidth={3}
                  dot={{ fill: STEEL, r: 5 }}
                  name="Actual"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke={INDIGO}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                  dot={{ fill: INDIGO, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 shadow-md"
            style={{ backgroundColor: "#FFFFFF", border: `1px solid ${INK}12` }}
          >
            <h3
              className="font-bold mb-5 flex items-center gap-2"
              style={{ color: INK }}
            >
              <Sprout strokeWidth={1.75} style={{ color: JADE }} /> Export Product Mix (%)
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={productData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke={`${INK}14`} />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis
                  dataKey="product"
                  type="category"
                  tick={{ fontSize: 12 }}
                  width={80}
                />
                <Tooltip
                  formatter={(v: unknown) => [`${Number(v)}%`]}
                  contentStyle={{ border: `1px solid ${INK}26` }}
                />
                <Bar dataKey="value" fill={STEEL} radius={[0, 2, 2, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Supply Chain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3
            className="text-2xl font-black text-center mb-8"
            style={{ color: INK, fontFamily: FONT_DISPLAY }}
          >
            Farm-to-Export Supply Chain
          </h3>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {supplyChain.map((step, i) => (
              <Fragment key={step.step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center p-5 w-36 text-center transition-all"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${INK}14`,
                  }}
                >
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ color: INK }}
                  >
                    {step.step}
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: `${INK}80` }}
                  >
                    {step.desc}
                  </div>
                </motion.div>
                {i < supplyChain.length - 1 && (
                  <FaArrowRight
                    className="hidden md:block text-lg"
                    style={{ color: JADE }}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Export Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-2xl font-black text-center mb-8"
            style={{ color: INK, fontFamily: FONT_DISPLAY }}
          >
            Our Export Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {exportPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="p-4 text-center transition-all cursor-pointer"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${INK}14`,
                }}
              >
                <div className="text-3xl mb-2">{partner.emoji}</div>
                <div className="font-bold text-xs mb-2" style={{ color: INK }}>
                  {partner.name}
                </div>
                <div
                  className="text-[10px] font-semibold px-2 py-0.5 inline-block tracking-wide"
                  style={{
                    backgroundColor: `${STEEL}1A`,
                    color: STEEL,
                    fontFamily: FONT_MONO,
                  }}
                >
                  {partner.type.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-5"
        >
          {bottomStats.map((item) => (
            <div
              key={item.title}
              className="p-6 shadow-md text-center"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${INK}14`,
              }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-bold mb-2" style={{ color: INK }}>
                {item.title}
              </div>
              <div className="text-sm" style={{ color: `${INK}99` }}>
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
