import { motion } from "framer-motion";
import { Eye, Target, Compass } from "lucide-react";

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

const coreValues = [
  "Integrity",
  "Farmer-First",
  "Transparency",
  "Sustainability",
  "Community",
];

export default function OurVisionMission() {
  return (
    <section
      id="vision-mission"
      className="py-24"
      style={{ backgroundColor: PAPER }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: JADE }}
            />
            Our Charter
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-5"
            style={{ color: INK }}
          >
            Vision &amp;{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              Mission
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${INK}99` }}
          >
            The two commitments every MADECOOP decision is measured against.
          </p>
        </motion.div>

        {/* Two charter articles */}
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-0">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${INK}14`,
              borderTopWidth: "3px",
              borderTopColor: STEEL,
            }}
          >
            <div
              className="text-[22px] font-bold uppercase tracking-[0.5em] mb-5"
              style={{ color: STEEL }}
            >
              Vision
            </div>
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
              style={{ backgroundColor: `${STEEL}1A`, color: STEEL }}
            >
              <Eye strokeWidth={1.25} size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: INK }}>
              Where We're Headed
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: `${INK}99` }}
            >
              To be the most trusted agricultural cooperative in Sri Lanka -
              transforming traditional farming into a globally competitive,
              sustainable, and prosperous enterprise for every farmer-member,
              from Matale District to international markets.
            </p>
          </motion.div>

          {/* Center emblem, desktop only */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${PAPER}`,
                color: INK,
              }}
            >
              <Compass strokeWidth={1.5} size={26} />
            </div>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${INK}14`,
              borderTopWidth: "3px",
              borderTopColor: JADE,
            }}
          >
            <div
              className="text-[22px] font-bold uppercase tracking-[0.5em] mb-5"
              style={{ color: JADE }}
            >
              Mission
            </div>
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
              style={{ backgroundColor: `${JADE}1A`, color: JADE }}
            >
              <Target strokeWidth={1.25} size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: INK }}>
              How We Get There
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: `${INK}99` }}
            >
              To empower farmers through affordable financing, guaranteed
              harvest purchasing, technical guidance, and direct access to
              international buyers - building a cooperative where every season
              brings greater security and prosperity for the people who grow it.
            </p>
          </motion.div>
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 mt-10"
        >
          {coreValues.map((value) => (
            <span
              key={value}
              className="text-xs font-semibold px-3.5 py-1.5 tracking-wide"
              style={{
                backgroundColor: `${INK}08`,
                color: `${INK}CC`,
                border: `1px solid ${INK}14`,
              }}
            >
              {value.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
