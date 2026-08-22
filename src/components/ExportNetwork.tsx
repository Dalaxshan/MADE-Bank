import { motion } from "framer-motion";
import { FaGlobeAsia } from "react-icons/fa";
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

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";
const INDIGO = "var(--color-primary-dark)";

export default function ExportNetwork() {
  const { t } = useLang();

  const exportData = [
    { year: "2019", value: 45, target: 40 },
    { year: "2020", value: 52, target: 50 },
    { year: "2021", value: 61, target: 58 },
    { year: "2022", value: 78, target: 70 },
    { year: "2023", value: 95, target: 85 },
    { year: "2024", value: 118, target: 100 },
  ];

  const productData = [
    { product: t.export.spieces1, value: 38 },
    { product: t.export.spieces2, value: 22 },
    { product: t.export.spieces3, value: 15 },
    { product: t.export.spieces4, value: 18 },
    { product: t.export.spieces5, value: 7 },
  ];

  const exportPartners = [
     {
      name: "Agroventures Plantations",
      type: t.export.groupTag4,
      logo: "/images/agroventure.png",
      strength: t.export.groupDes4,
      path: "https://agroventures.lk/",
    },
    {
      name: "Bio Foods Agroventures",
      type: t.export.groupTag1,
      logo: "/images/biofoods.png",
      strength: t.export.groupDes1,
      path: "https://www.biofoodsagro.com/",
    },
  
    {
      name: "Agroventure Exports",
      type: t.export.groupTag2,
      logo: "/images/export.png",
      strength: t.export.groupDes2,
      path: "https://agroventuresexports.com/",
    },
    {
      name: "ELEVARE",
      type: t.export.groupTag5,
      logo: "/images/elevare.png",
      strength: t.export.groupDes5,
      path: "https://elevare.lk/",
    },
   
    {
      name: "The Vanilla Shop",
      type: t.export.groupTag3,
      logo: "/images/vanilla-shop.png",
      strength: t.export.groupDes3,
      path: "https://thevanillashop.lk/",
    },
    
    {
      name: "Rathu Ira",
      type: t.export.groupTag6,
      logo: "/images/rathuira.png",
      strength: t.export.groupDes6,
      path: "https://rathuiranewspaper.lk/",
    },
  ];

  return (
    <section
      id="export-network"
      className="py-14 overflow-hidden"
      style={{ backgroundColor: PAPER }}
    >
    <section
      id="export-network"
      className="py-14 overflow-hidden"
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
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            <FaGlobeAsia size={11} /> Global Export Network
          </span>
          <h2
            className="text-4xl font-semibold md:text-5xl font-black mb-5"
            style={{ color: INK }}
          >
            {t.export.title1}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              {t.export.title2}
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${INK}99` }}
          >
            {t.export.sub}
          </p>
        </motion.div>

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
                <Tooltip
                  formatter={(v: unknown) => [`Rs. ${Number(v)}M`]}
                  contentStyle={{ border: `1px solid ${INK}26` }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke={STEEL}
                  strokeWidth={3}
                  dot={{ fill: STEEL, r: 5 }}
                  name="Actual"
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={INDIGO}
                  strokeWidth={2}
                
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
              <Sprout strokeWidth={1.75} style={{ color: JADE }} />{" "}
              {t.export.chartTitle2}
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

        {/* Export Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl semi-bold text-center pt-14 mb-3 font-semibold md:text-5xl font-black mb-5"
            style={{ color: INK }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              {t.export.partnersTitle}
            </span>
            <br />
          </h2>
          <p
            className="text-base text-center max-w-xl mx-auto mb-10"
            style={{ color: `${INK}80` }}
          >
            {t.export.partnersSub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {exportPartners.map((partner, i) => (
              <a
                key={partner.name}
                href={partner.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 32px rgba(30,42,56,0.10)",
                  }}
                  className="flex flex-col overflow-hidden transition-all h-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${INK}14`,
                    boxShadow: "0 2px 12px rgba(30,42,56,0.05)",
                  }}
                >
                  <div
                    className="flex items-center justify-center px-6"
                    style={{
                      height: "132px",
                      backgroundColor: `${INK}03`,
                      borderBottom: `1px solid ${INK}0F`,
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      style={{
                        maxHeight: "90px",
                        maxWidth: "72%",
                        width: "auto",
                        objectFit: "contain",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <div
                      className="text-[11px] font-bold py-1 tracking-widest w-fit"
                      style={{
                        backgroundColor: `${JADE}18`,
                        color: JADE,
                        fontSize: "12px",
                      }}
                    >
                      {partner.type.toUpperCase()}
                    </div>
                    <div className="text-lg font-black" style={{ color: INK }}>
                      {partner.name}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: `${INK}80` }}
                    >
                      {partner.strength}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
